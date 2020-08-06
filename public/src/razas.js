
//ULTIMO QUE HICE YO 

const categories=document.getElementById('razas');
const formBuscar=document.querySelector('.formulario-buscar');
const searchInputValue= document.querySelector('.breed-search');
const razas=["00Puro Perro","Akita","Affenpinscher", "Airedale terrier"," American staffor","Australian Terrier","Basset","Bichon","Bichón Frisé","Border Collie","Boston terrier","Beagle","Boxer","Boyero","Braco de Ariege","Braco Aleman","Bulldog ingles","Bulldog frances","Bull terrier","Bullmastiff", "Cao de Fila de Sao Miguel","Cane Corso","Caniche","Cesky Terrier","Chihuahua","Chow Chow","Cocker","Collie","Dalmata","Doberman","Dogo Argentino","Dogo de Burdeos","Dogo del Tibet","Fila Brasileiro","Fox Terrier","Galgo"," Golden Retriever", "Gran Danés","Husky","Jack Russell"," Labrador","Maltés","Mastiff","Mastín Napolitano","Ovejero alemán","Pointer","Rhodesian Ridgeback","Rottweiler","Sabueso","Samoyedo","San Bernardo","Schnauzer","Setter","Shar Pei","Terranova","Vizla","Weimaraner","Yorkshire Terrie"]
  


 const SelectBreed= document.querySelector('.categories-list');
for(i=0; i<razas.length;i++){
    const cadaRaza= document.createElement('option');
     cadaRaza.value=razas[i]
     cadaRaza.textContent=razas[i]
     categories.appendChild(cadaRaza)
  
}

  
 //escucho permanentemente el formulario buscar y cuando escuche submit dispare un evento  

//  formBuscar.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const categorias = document.querySelector('.categories-list');
    
//     const categoriaSeleccionada =categorias.options[categorias.selectedIndex].value; 
//     console.log(categoriaSeleccionada);
    
//     let params = new URLSearchParams({
//       breed: categoriaSeleccionada
//     })
//     let baseUrl = window.location.href.split('?')[0];
//     let url = baseUrl + "?" + params;
//     window.location = url;
// })