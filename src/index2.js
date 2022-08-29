const add2 = document.getElementById('add-product2')
const product2 = document.getElementById('products2')
const taste12 = document.getElementById('taste12')
const taste22 = document.getElementById('taste22')
const taste32 = document.getElementById('taste32')
const result2 = document.getElementById('tabla2')
const emptyResult2 = document.getElementById('empty2')
const ide2 = document.querySelector('option2')
const comprar2 = document.getElementById('buy2')

// info date
const dateNumber2 = document.getElementById('dateNumber2')
const dateText2 = document.getElementById('dateText2')
const dateMonth2 = document.getElementById('dateMonth2')
const dateYear2 = document.getElementById('dateYear2')
const hours2 = document.getElementById('hours2')
2
const setDate2 = ()=> {
    const date2 = new Date();
    dateNumber2.textContent = date2.toLocaleString('es', {day: 'numeric'})
    dateText2.textContent = date2.toLocaleString('es', { weekday: 'long' })
    dateMonth2.textContent = date2.toLocaleString('es', { month: 'short' })
    dateYear2.textContent = date2.toLocaleString('es', { year: 'numeric' })
    hours2.textContent = date2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setDate2()



let datos2 = []

    result2.addEventListener('click', eliminar)

    emptyResult2.addEventListener('click', () => {
        datos2 = []
        clear2()
    })

    add2.addEventListener('click', productos);

    comprar2.addEventListener('click', () => {
        const total2 = prompt(`La compra fue de $${resSuma2} ¿con cuanto es el valor a pagar?`)
        if (total2 == '' || total2 == 0) {

    } else {
        const resultado2 = parseInt(total2) - resSuma2
        alert(`la devuelta es de $${resultado2}`)

    }

})

function productos(){
//  e.preventDefault()

    const producto2 = product2;

    const selected2 = producto2.options[producto2.selectedIndex].text
    const sabor12 = taste12;
    const showTaste12 = sabor12.options[sabor12.selectedIndex].text
    const sabor22 = taste22;
    const showTaste22 = sabor22.options[sabor22.selectedIndex].text
    const sabor32 = taste32;
    const showTaste32= sabor32.options[sabor32.selectedIndex].text
    
    const laid2 = producto2.options[producto2.selectedIndex].getAttribute('data-id')

    // console.log(selected, showTaste1,showTaste2,showTaste3)
    // document.body.append(selected, showTaste1, showTaste2,showTaste3)

   function Preparados(prod2, precio2, sabor12, sabor22, sabor32, id2) {
       this.prod2 = prod2;
       this.precio2 = precio2;
       this.sabor12 = sabor12;
       this.sabor22 = sabor22;
       this.sabor32 = sabor32;
       this.id2 = id2
   }
   const capProd2 = selected2
    const capprice2 = product2.value
    const capSabor12 = showTaste12
    const capSabor22 = showTaste22
    const capSabor32 = showTaste32
    id2 = parseInt(laid2)
     
    

    fusion2 = new Preparados(capProd2, parseInt(capprice2), capSabor12, capSabor22, capSabor32, id2)

    print2();
    

}



function print2() {
     
    // clear()// no debo llamarlo desde aqui
    
    datos2.push(fusion2)
    
    console.log(datos2)
    let newSuma2 = datos2.map((preciox2) =>  preciox2.precio2)
    console.log(newSuma2)
    
    resSuma2 = newSuma2.reduce((sum2, item2) => sum2 + item2, 0)

    
    
        
    const {prod2, precio2, sabor12, sabor22, sabor32} = fusion2
        
    //  suma = 0
    // for (let i = 0; i > sumarPrecio.length; i++) {
    //     suma += sumarPrecio[i]
    // }
    if (prod2 == 'Seleccionar Producto') {
        swal('oops!!!', 'Primero Selecciona un producto')
        
    }
    else {
        result2.innerHTML +=
            `<tbody>
           <td>${prod2}</td>
           <td>$${precio2}</td>
           <td>$${resSuma2}</td>
           <td>${sabor12}<br>${sabor22}<br>${sabor32}</td>           
           `
    }  
    
}



function clear2() {
    while (result2.firstChild) {
        result2.removeChild(result2.firstChild)
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

