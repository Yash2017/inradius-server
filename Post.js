const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  number: Number,
  companyName: String,
  location: String,
  leftLat: String,
  rightLat: String,
  topLong: String,
  btmLong: String,
  radius: Number,
  qual: String,
  industry: String,
  domain: String,
  skillset1: String,
  skillset2: String,
  skillset3: String,
  skillset4: String,
  exp: String,
  totalExp: String,
  relevantExp: String,
  currentPay: String,
  expectedPay: String,
  linkedIn: String,
  type: String,
});
const Post = mongoose.model("inradius_backend", UserSchema);
module.exports = Post;
