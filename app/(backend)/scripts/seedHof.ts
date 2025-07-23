import mongoose from "mongoose";
import dotenv from "dotenv";
import connectMongoDb from "../libs/mongodb";
import HallOfFame from "../models/hallOfFame";

dotenv.config();

async function seed() {
  await connectMongoDb();

  await HallOfFame.deleteMany({});

  await HallOfFame.insertMany([
    {
      name: "Alice Nguyen",
      achievement: "Led the club to win inter‑university hackathon.",
      category: "Club MVP",
      photo_url: "https://example.com/photos/alice.jpg",
      semester: "2024A",
    },
    {
      name: "Bob Tran",
      achievement: "Top GPA in the department with outstanding research contributions.",
      category: "Academic Ace",
      photo_url: "https://example.com/photos/bob.jpg",
      semester: "2024B",
    },
    {
      name: "Charlie Le",
      achievement: "Delivered key features ahead of schedule, ensuring project success.",
      category: "Project MVP",
      photo_url: "https://example.com/photos/charlie.jpg",
      semester: "2023C",
    },
  ]);

  console.log("✅ Hall of Fame test data inserted!");
  mongoose.disconnect();
}

seed().catch((err) => {
  console.error("❌ Error seeding:", err);
  mongoose.disconnect();
});
