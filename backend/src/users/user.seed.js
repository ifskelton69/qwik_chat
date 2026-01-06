import { config } from "dotenv";
import { connectdb } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "emma.thompson@gmail.com",
    fullname: "Emma Thompson",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "olivia.miller@gmail.com",
    fullname: "Olivia Miller",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sophia.davis@gmail.com",
    fullname: "Sophia Davis",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "ava.wilson@gmail.com",
    fullname: "Ava Wilson",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isabella.brown@gmail.com",
    fullname: "Isabella Brown",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "mia.johnson@gmail.com",
    fullname: "Mia Johnson",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "charlotte.williams@gmail.com",
    fullname: "Charlotte Williams",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "amelia.garcia@gmail.com",
    fullname: "Amelia Garcia",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "james.anderson@gmail.com",
    fullname: "James Anderson",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "william.clark@gmail.com",
    fullname: "William Clark",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "benjamin.taylor@gmail.com",
    fullname: "Benjamin Taylor",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "lucas.moore@gmail.com",
    fullname: "Lucas Moore",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "henry.jackson@gmail.com",
    fullname: "Henry Jackson",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "alexander.martin@gmail.com",
    fullname: "Alexander Martin",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "daniel.rodriguez@gmail.com",
    fullname: "Daniel Rodriguez",
    password: "123456",
    profilepic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectdb();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();