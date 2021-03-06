//requerimos mongoose y creamos el schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
    namedog: String,
    image: String,
    breed:String,
    sex: {
      type:String,
      enum: [
        "male",
        "female",
      ]
    },
    description: String,
    age: { type: Number, min: 0 },
    weight: String,
    reviews:[
      {
        user: String,
        comments: String,
        userId: { type: Schema.Types.ObjectId, ref: 'User' }
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
  },
);

//el nombre de mi modelo
const Dog = mongoose.model("Dog", dogSchema);
module.exports = Dog;
