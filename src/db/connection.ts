import mongoose from "mongoose";

mongoose.connect(process.env.URI_DB || "mongodb://127.0.0.1:27017/persona-metrica");

mongoose.connection.on("open", () => {
    console.log("connection to mongo successfully");
});
