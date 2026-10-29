import React, { useState } from "react";
import "../Css/Contact.css";

// Backend address comes from the VITE_API_URL environment variable.
// Local dev falls back to localhost; on your host set VITE_API_URL to the deployed backend URL.
const API_BASE = (import.meta.env.VITE_API_URL || "http://localhost:5300").replace(/\/$/, "");
const API_URL = `${API_BASE}/api/contact/userConnect`;

function Contact() {
  // Store all form input values
  const [formData, setFormData] = useState({
    name: "",
    phoneNum: "",
    email: "",
    message: "",
  });

  // Track request status and messages
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrorMessage("");
  };

  // Send contact form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const { name, phoneNum, email, message } = formData;

    // Validate required fields
    if (
      !name.trim() ||
      !phoneNum.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Validate 10-digit phone number
    if (!/^[0-9]{10}$/.test(phoneNum.trim())) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Send a POST request to Express
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name.trim(),
          phoneNum: phoneNum.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      // Read the JSON response
      const data = await response.json();

      // Handle unsuccessful responses
      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send your message."
        );
      }

      // Show success only after the backend confirms success
      setShowSuccessModal(true);

      // Clear the form after successful submission
      setFormData({
        name: "",
        phoneNum: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error.message === "Failed to fetch"
          ? "Cannot connect to the server. Please try again later."
          : error.message || "Something went wrong. Please try again."
      );
    } finally {
      // Re-enable the button after the request finishes
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            Have a project in mind or want to connect?
            Send me a message.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="contact-form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              maxLength={100}
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="phoneNum">Phone Number</label>
            <input
              type="tel"
              id="phoneNum"
              name="phoneNum"
              placeholder="Enter your 10-digit phone number"
              value={formData.phoneNum}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={10}
              autoComplete="tel"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              maxLength={254}
              autoComplete="email"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              maxLength={3000}
              required
            />
          </div>

          {errorMessage && (
            <p className="contact-error" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Success popup */}
      {showSuccessModal && (
        <div
          className="contact-modal-overlay"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="contact-success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-success-icon" aria-hidden="true">
              ✓
            </div>

            <h3 id="contact-success-title">
              Message Sent Successfully!
            </h3>

            <p>
              Thank you for reaching out. Your message has been received.
            </p>

            <button
              type="button"
              className="contact-modal-btn"
              onClick={() => setShowSuccessModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;