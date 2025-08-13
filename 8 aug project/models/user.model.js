import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lastName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  emailId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true,
  },
  bio: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
});

export const Profile = mongoose.model("Profile", ProfileSchema);
