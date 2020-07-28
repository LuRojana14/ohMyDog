//requerimos mongoose y creamos el schema

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;



const userSchema = new Schema(
 {
  username: String,
  mail:String,
  password:String,
  namedog: String,
  image:
  raza:String,
  telephone: Number,
  description: String,
  age: Number,
  weight: Number,
  cp:Number,
  review: [
      {user: [{type: Schema.Types.ObjectId, ref:'username'}],
      comments: String
      }
  ]
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