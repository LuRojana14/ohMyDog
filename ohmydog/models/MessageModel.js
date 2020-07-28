const mongoose = require("mongoose");
const Schema   = mongoose.Schema;




const messageSchema = new Schema(
    {
     userid: [{type: Schema.Types.ObjectId, ref:'username'}],
     message: [{
         chat: String,
         time: new Date(),
         receiverId: [{type: Schema.Types.ObjectId, ref:'username'}]
         
    }],
     
   },
   {
     timestamps: {
       createdAt: "created_at",
       updatedAt: "updated_at"
     }
   }
   );
   




//el nombre de mi modelo
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;