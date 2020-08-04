//requerimos mongoose y creamos el schema
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema(
 {
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  telephone: {type: String},
  cp: {type: String},
  dog:[{type : Schema.Types.ObjectId, ref: 'Dog'}],
  reviews:[
    {
      user: String,
      comments: String
    },
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