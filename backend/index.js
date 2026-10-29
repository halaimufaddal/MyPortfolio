import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import connectDB from "./db/db.js";
import userConnect from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5300;

// Hosts like Render sit behind a proxy; this lets rate limiting see the real visitor IP
app.set("trust proxy", 1);

// Allowed frontend origins. Comma-separated, e.g.
// CLIENT_URL=https://my-portfolio.vercel.app,http://localhost:5173
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);

app.use(express.json({ limit: "10kb" }));
app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Spam protection: max 5 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages sent. Please try again later.",
  },
});

// Health check (useful for hosting platforms and uptime pingers)
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactLimiter, userConnect);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`The app is running on port: ${port}`);
    });
  } catch (error) {
    console.error("Server startup failed.");
    process.exit(1);
  }
};

startServer();
