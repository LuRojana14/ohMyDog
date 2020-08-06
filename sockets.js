//decirle que se quede escuchando cuando hay una nueva conexion

//como aqui dentro no tengo la conexion de socket voy a englobar el codigo dentro de una funcion q voy a exportar con un parametro io que es la conexcion q necesito

module.exports = function(io){

//esta variable me agregara todos los usuarios en la medida que se van conectando
    let nicknames=[];
//conexion de socket del servidor
  io.on('connection', socket => {
    console.log('new user connected');
    //verificamos que no exista en el array, si el indice es -1 no est dentro de mi array
    socket.on('new user',(data, respuesta)=>{
      console.log('data:',data);
      if(nicknames.indexOf(data)!=-1){
          respuesta(false);
      } else {
         respuesta(true);
         //socket es un objeto con metodos y propiedades
         socket.nickname=data;
         nicknames.push(socket.nickname); 
         updateNicknames();
         //enviar todos los usuarios que tenemos almacenados en el array
         
      }

    });
   //ahora deberia retransmitirlo a todos los usuarios que esten conectados en mi app
   socket.on('send_message',data => {
      //socket solo me sirve para mi servidor, io es el que tiene a todos los usuarios conectados 
      //esto es igual que decirle reenviaselo a todos
      //cuando un usuario envia a traves de send_message los datos, el servidor los va a reenviar a traves de un nuevo evento llamado new data.
      //console.log(data);
      io.sockets.emit('new message', {
        msg:data,
        nick:socket.nickname
      });
   
    });
    //desconectar el usuario 
    socket.on('disconnect', data => {
      if(!socket.nickname) return;
      //quita el elemento por su indice // el 1 es para que remueva un elemento
      nicknames.splice(nicknames.indexOf(socket.nickname),1);
      updateNicknames();
      
    });



    function updateNicknames(){
      io.sockets.emit('usernames', nicknames);

    }
   


});

  }