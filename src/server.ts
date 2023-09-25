import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

//database
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("✅ Database connected successfully");

    app.listen(port, "192.168.10.16", () => {
      console.log(`Server listening on 192.168.10.16:${port}`);
    });
  } catch (err) {
    console.log("🤢 Failed to connect Database", err);
  }
}
main().catch((err) => console.log(err));
