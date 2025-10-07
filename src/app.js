import express from "express"
import cors from "cors"

const app = express();

//basic configuration
app.use(express.json({ limi: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTION"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);


app.get("/", (req, res) => {
res.send("Welcome to basecampy")
})


export default app;