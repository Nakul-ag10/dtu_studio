const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ override: false })

const authRoutes = require("./routes/auth");
const monthInPicturesRoutes = require("./routes/monthInPictures");
const pressConferencesRoutes = require("./routes/pressConferences");
const pressCoveragesRoutes = require("./routes/pressCoverages");
const pressReleasesRoutes = require("./routes/pressReleases");

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Validate required environment variables
// if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) {
//   console.error(
//     "Error: Missing required environment variables (MONGODB_URI, JWT_SECRET)",
//   );
//   process.exit(1);
// }

// CORS configuration
const corsOptions = {
  origin: ["https://dtustudio.netlify.app", CORS_ORIGIN, "http://localhost:5173", "http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/month-in-pictures", monthInPicturesRoutes);
app.use("/api/press-conferences", pressConferencesRoutes);
app.use("/api/press-coverages", pressCoveragesRoutes);
app.use("/api/press-releases", pressReleasesRoutes);

app.get("/", (req, res) => {
  res.json({ message: "DTU Studio Backend API", version: "1.0.0" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

// Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";

  if (NODE_ENV === "development") {
    console.error("Error:", err);
  }

  res.status(status).json({ message });
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    if (NODE_ENV !== "test") {
      console.log("Connected to MongoDB");
    }
    app.listen(PORT,'0.0.0.0', () => {
      if (NODE_ENV !== "test") {
        console.log(`Server is running on port ${PORT} [${NODE_ENV}]`);
      }
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
