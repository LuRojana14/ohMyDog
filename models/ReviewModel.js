//requerimos mongoose y creamos el schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    comments: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

//el nombre de mi modelo
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
