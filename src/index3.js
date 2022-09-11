const add3 = document.getElementById('add-product3')
const product3 = document.getElementById('products3')
const taste13 = document.getElementById('taste13')
const taste23 = document.getElementById('taste23')
const taste33 = document.getElementById('taste33')
const result3 = document.getElementById('tabla3')
const emptyResult3 = document.getElementById('empty3')
const ide3 = document.querySelector('option3')
const comprar3 = document.getElementById('buy3')

// info date
const dateNumber3 = document.getElementById('dateNumber3')
const dateText3 = document.getElementById('dateText3')
const dateMonth3 = document.getElementById('dateMonth3')
const dateYear3 = document.getElementById('dateYear3')
const hours3 = document.getElementById('hours3')
2
const setDate3 = ()=> {
    const date3 = new Date();
    dateNumber3.textContent = date3.toLocaleString('es', {day: 'numeric'})
    dateText3.textContent = date3.toLocaleString('es', { weekday: 'long' })
    dateMonth3.textContent = date3.toLocaleString('es', { month: 'short' })
    dateYear3.textContent = date3.toLocaleString('es', { year: 'numeric' })
    hours3.textContent = date3.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setDate3()



let datos3 = []

    result3.addEventListener('click', eliminar)

    emptyResult3.addEventListener('click', () => {
        datos3 = []
        clear3()
    })

     add3.addEventListener('click', productos);

    comprar3.addEventListener('click', () => {
        const total3 = prompt(`La compra fue de $${resSuma3} ¿con cuanto es el valor a pagar?`)
         if (total3 == '' || total3 == 0) {

    } else {
        const resultado3 = parseInt(total3) - resSuma3
        alert(`la devuelta es de $${resultado3}`)

    }

})


function productos(){
//  e.preventDefault()

    const producto3 = product3;

    const selected3 = producto3.options[producto3.selectedIndex].text
    const sabor13 = taste13;
    const showTaste13 = sabor13.options[sabor13.selectedIndex].text
    const sabor23 = taste23;
    const showTaste23 = sabor23.options[sabor23.selectedIndex].text
    const sabor33 = taste33;
    const showTaste33= sabor33.options[sabor33.selectedIndex].text
    
    const laid3 = producto3.options[producto3.selectedIndex].getAttribute('data-id')

    // console.log(selected, showTaste1,showTaste2,showTaste3)
    // document.body.append(selected, showTaste1, showTaste2,showTaste3)

   function Preparados(prod3, precio3, sabor13, sabor23, sabor33, id3) {
       this.prod3 = prod3;
       this.precio3 = precio3;
       this.sabor13 = sabor13;
       this.sabor23 = sabor23;
       this.sabor33 = sabor33;
       this.id3 = id3
   }
   const capProd3 = selected3
    const capprice3 = product3.value
    const capSabor13 = showTaste13
    const capSabor23 = showTaste23
    const capSabor33 = showTaste33
    id3 = parseInt(laid3)
     
    

    fusion3 = new Preparados(capProd3, parseInt(capprice3), capSabor13, capSabor23, capSabor33, id3)

    print3();
    

}



function print3() {
     
    // clear()// no debo llamarlo desde aqui
    
    datos3.push(fusion3)
    
    console.log(datos3)
    let newSuma3 = datos3.map((preciox3) =>  preciox3.precio3)
    console.log(newSuma3)
    
    resSuma3 = newSuma3.reduce((sum3, item3) => sum3 + item3, 0)

    
    
        
    const {prod3, precio3, sabor13, sabor23, sabor33} = fusion3
        
    //  suma = 0
    // for (let i = 0; i > sumarPrecio.length; i++) {
    //     suma += sumarPrecio[i]
    // }
    if (prod3 == 'Seleccionar Producto') {
        swal('oops!!!', 'Primero Selecciona un producto')
        
    }
    else {
        result3.innerHTML +=
            `<tbody>
           <td>${prod3}</td>
           <td>$${precio3}</td>
           <td>$${resSuma3}</td>
           <td>${sabor13}<br>${sabor23}<br>${sabor33}</td>
           `
    }  
    
}



function clear3() {
    while (result3.firstChild) {
        result3.removeChild(result3.firstChild)
}
}

function eliminar(e) {
    // console.log(id)
    // if (e.target.classList.contains('lax')) {
    //     filtro = datos.filter(datos => {
    //         datos.id == id
            
    //     })
    //     console.log(filtro)
        
    //     // result.innerHTML = datos
    
    // }
 
}

function edwin () {

};
