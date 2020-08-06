//el usuario ya esta conectado al servidor por lo que puedo enviar y recibir mensajes

//const socket= io();
//pruebo a ver si funciona jquery
$(function() {
    //conexion de socket del cliente
    const socket= io();

    //obtener los elementos del dom
    //estoy guardando un elemento de mi html
    const $messageForm =$('#message-form');
    const $messageBox=$('#message');
    //este es el dato q voy a enviar al servidor y este lo va a retransmitir a otros usuarios
    const $chat =$('#chat');
//-------------------------------------------------------//

    //obtener los elementos de nicknameForm(html)
    const $nickForm=$('#nickForm');
    const $nickError=$('#nickError');
    const $nickname= $('#nickname');
    const $users= $('#usernames');

    //ejecuto el nickform/cada vez que se envie ese evento/ tmb prevenimos que se refresque
    $nickForm.submit(e => {
        e.preventDefault();
        //cuando obtenga el evento de enviar datos al servidor (submit)ejecutamos con socket
        //hacemos un "callback" (lo estoy haciendo con arrow, que recibiriamos los datos luego de haber enviado al servidor
        socket.emit('new user', $nickname.val(), data => {
            //si los datos que recibe el servidor son verdad, nickwrap es el contenedor de mi chat
            if(data){
                //si es verdad lo ocultamos
               $('#nickWrap').hide();
               //que me muestre el contenedor del chat
               $('#contentWrap').show();
            } else {
                $nickError.html(`
                <div class="alert alert-danger">
                That username already exist
                </div>
                `);

            }
            //luego tenemos que limpiar el campo
            $nickname.val('');


        });


    });


    //capturar los eventos
    //cuando se ejecute el evento de submit en el formulario agarrarlo 
    $messageForm.submit(e => {
        //para que prevenga el refresh de pagina
        e.preventDefault();
        //ver socket.emit para enviarlos de verdad
        //coloco el valor de la informacion q quieron enviar ($messageBok httml), el evento se envia con el nombre de send message
         socket.emit('send_message',$messageBox.val());
         //luego de enviarlo quiero limpiar la barra entonces le asigno un valor vacio
         $messageBox.val('');
    });
         
   //escuchamos el evento que viene desde el servidor
  //new message es el evento del servidor de mi archivo sockets.js
   socket.on('new message', function (data){
    var date = new Date();
    var dateStr =
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      ('00' + date.getDate()).slice(-2) +
      '/' +
      date.getFullYear() +
      ' ' +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2) +
      ':' +
      ('00' + date.getSeconds()).slice(-2);
    console.log(dateStr);


       
       //cuando reciba esos datos los quiero mostrar en el cuerpo de la ventana chat, (es la constante que declare arriba $chat)
       //con append agrego los datos dentro del cuerpo chat, y para wue cada uno me aparezca en una linea uso la etiqueta br
       $chat.append(dateStr + " " +'<b>' + data.nick + '</b>: ' + data.msg + '<br/>');
   });

    

    socket.on('usernames', data => {
        let html = '';
        for(let i=0; i<data.length; i++){
            html+= `<p><i class="fas fa-paw"></i> ${data[i]}</p>`
        }
           //cuando recibamos los datos vamos a crear una variable que empiece a almacenar etiquetas p
           //se van a ir agregando a medida que recorran mi array
           $users.html(html);
       });


   });







