const add = document.getElementById('add-product')
const product = document.getElementById('products')
const taste1 = document.getElementById('taste1')
const taste2 = document.getElementById('taste2')
const taste3 = document.getElementById('taste3')
const result = document.getElementById('tabla')
const emptyResult =document.getElementById('empty')
const ide = document.querySelector('option')
const comprar = document.getElementById('buy')

// info date
const dateNumber = document.getElementById('dateNumber')
const dateText = document.getElementById('dateText')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')
const hours = document.getElementById('hours')

const setDate = ()=> {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'})
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' })
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' })
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' })
    hours.textContent = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setDate()



let datos = []

    result.addEventListener('click', eliminar)

    emptyResult.addEventListener('click', () => {
        datos = []
        clear()
    })
    add.addEventListener('click', productos);

    comprar.addEventListener('click', () => {
      const total = prompt(`La compra fue de $${resSuma} ¿con cuanto es el valor a pagar?`)
      if (total == '' || total == 0) {
          
      }else{
          const resultado = parseInt(total) - resSuma
          alert(`la devuelta es de $${resultado}`)
        
      }
      
    })
    

function productos(){
//  e.preventDefault()

    const producto = product;

    const selected = producto.options[producto.selectedIndex].text
    const sabor1 = taste1;
    const showTaste1 = sabor1.options[sabor1.selectedIndex].text
    const sabor2 = taste2;
    const showTaste2 = sabor2.options[sabor2.selectedIndex].text
    const sabor3 = taste3;
    const showTaste3= sabor3.options[sabor3.selectedIndex].text
    
    const laid = producto.options[producto.selectedIndex].getAttribute('data-id')

    // console.log(selected, showTaste1,showTaste2,showTaste3)
    // document.body.append(selected, showTaste1, showTaste2,showTaste3)

   function Preparados(prod, precio, sabor1, sabor2, sabor3, id) {
       this.prod = prod;
       this.precio = precio;
       this.sabor1 = sabor1;
       this.sabor2 = sabor2;
       this.sabor3 = sabor3;
       this.id = id
   }
   const capProd = selected
    const capprice = product.value
    const capSabor1 = showTaste1
    const capSabor2 = showTaste2
    const capSabor3 = showTaste3
    id = parseInt(laid)
     
    

    fusion = new Preparados(capProd, parseInt(capprice), capSabor1, capSabor2, capSabor3, id)

    print();
    

}



function print() {
     
    // clear()// no debo llamarlo desde aqui
    
    datos.push(fusion)
    
    let newSuma = datos.map((preciox) =>  preciox.precio);
    
    resSuma = newSuma.reduce((sum, item) => sum + item, 0)   
    
     const {prod, precio, sabor1, sabor2, sabor3} = fusion

    if (prod == 'Seleccionar Producto') {
        swal('oops!!!', 'Primero Selecciona un producto')
        
    }
    else {
        result.innerHTML +=
            `<tbody>
           <td>${prod}</td>
           <td>$${precio}</td>
           <td>$${resSuma}</td>
           <td>${sabor1}<br>${sabor2}<br>${sabor3}</td>
           `
    }  
    
}



function clear() {
    while (result.firstChild) {
        result.removeChild(result.firstChild)
}
}

function eliminar(e) {
    console.log(id)
    if (e.target.classList.contains('lax')) {
        filtro = datos.filter(datos => {
            datos.id == id
            
        })
        console.log(filtro)
        
        // result.innerHTML = datos
    
    }
 
}

// var pages = {
//     'home': `hola soy edwin`,

//     'aboutus': `un chomincillo <br /><br /><img src='lion2.jpg' style='width:200px;' />`,

//     'services': `Our Services page<br /><br /><img src='lion3.jpg' style='width:200px;' />`,
    
//     'contact': `Our Contact Us page<br /><br /><img src='lion4.jpg' style='width:200px;' />`
// };

// function getPageContent(page) {
//     var contentToReturn;
//     switch (page) {
//         case 'home':
//             contentToReturn = pages.home;
//             break;
//         case 'aboutus':
//             contentToReturn = pages.aboutus;
//             break;
//         case 'services':
//             contentToReturn = pages.services;
//             break;
//         case 'contact':
//             contentToReturn = pages.contact;
//             break;
//         default:
//             contentToReturn = pages.home;
//             break;
//     }
//     document.getElementById('content').innerHTML = contentToReturn;
// }

