const mongoose = require("mongoose");
const bcrypt =require("bcryptjs")
const jwt =require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
userSchema.methods.generateToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          email: this.email,
          username: this.username
        
      },
      process.env.ACCESS_TOKENS_SECRET,
      {
          expiresIn: process.env.ACCESS_TOKENS_EXPIRY
      }
  )
  
    }

module.exports = mongoose.model("User", userSchema);