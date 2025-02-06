import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  gender: {
    type: String,
    require: true,
    enm: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
  // createdAt and updatedAt => Member science <created>
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User;