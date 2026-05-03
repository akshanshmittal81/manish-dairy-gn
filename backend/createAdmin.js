const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  
  const user = new User({
    username: "anikett",
    password: "aniket123",   // jo bhi password rakhna ho
    shopName: "AniketBakery", // jo bhi shop name rakhna ho
  });

  await user.save(); // bcrypt auto hoga pre-save hook se
  
  console.log("✅ Admin user created successfully!");
  process.exit();

}).catch((err) => {
  console.log("❌ Error:", err.message);
  process.exit();
});