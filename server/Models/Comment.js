import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
