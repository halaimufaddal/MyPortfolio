
import Users from "../models/contact.models.js";

export const userMsg = async (req, res) => {
  try {
    const { username, phoneNum, email, message } = req.body;
    if (
      !username?.trim() ||
      !phoneNum?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

   
    if (!/^[0-9]{10}$/.test(phoneNum)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit phone number",
      });
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // 5. Save contact message in MongoDB
    const newUser = await Users.create({
      username: username.trim(),
      phoneNum: phoneNum.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    
    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: {
        id: newUser._id,
        username: newUser.username,
      },
    });
  } catch (error) {
   
    console.error("Contact submission error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
