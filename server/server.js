import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import messagesRoutes from "./routes/message.routes.js";
import userRouters from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the incoming cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRouters);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
