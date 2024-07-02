import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      maxlength: [40, "Title cannot be more than 40 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [400, "Description cannot be more than 400 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
