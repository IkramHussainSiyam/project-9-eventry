import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
});

const usersModel =
  mongoose.models.users || mongoose.model("users", usersSchema);

export default usersModel;
