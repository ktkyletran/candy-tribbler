import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
  },
  zip: { type: Number, required: true },
  likedJobs: { type: [String], required: true, default: [] },
  skills: { type: [String], required: true, default: [] },
});

module.exports = mongoose.model("User", userSchema);