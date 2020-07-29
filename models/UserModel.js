//requerimos mongoose y creamos el schema
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema(
 {
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  namedog: String,
  image: {
    type: String,
    default: "/images/userprofiledefault"
  },
  breed:String,
  sex: {
    type:String,
    enum: [
      "male",
      "female",
    ],
  },
  telephone: String,
  description: String,
  age: { type: Number, min: 0 },
  weight: String,
  cp:String,
  review:[
    {type: Schema.Types.ObjectId, ref:'Review'}
  ],
},
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
}
);

//el nombre de mi modelo
const User = mongoose.model("User", userSchema);
module.exports = User;