class Combos {
  constructor(nombre, precio, stock) {
    this.nombre = nombre,
      this.precio = precio
    this.stock = stock
  }
}

let producto1= new Combos ("notebook lenovo", 480000, 20)
let producto2= new Combos ("lenovo pad", 45500, 26)
let producto3= new Combos ("notebook apple macbook", 700000, 45)
let producto4= new Combos ("apple pad", 350000, 23)
let producto5= new Combos ("apple smartwatch", 150000, 10)
let producto6= new Combos ("samsung smartwatch", 17000, 30)
let producto7= new Combos ("samsung smarttv", 120000, 1)
let producto8= new Combos ("samsung galaxy s23", 320000, 7)


let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]


if (localStorage.getItem("Combos")) {
lista = JSON.parse(localStorage.getItem("Combos"));
} else {
lista = lista
}

function filtrarCombos()


      (palabraClave) => {
          palabraClave = palabraClave.trim().toUpperCase()
          let resultado = lista.filter((Combos)=> Combos.nombre.toUpperCase().includes(palabraClave))

           if (resultado.length > 0){
              console.table(resultado)
             
              Swal.fire({
                  title: 'Resultados de búsqueda',
                  html: '<table><tr><th>Nombre</th><th>Precio</th><th>Stock</th></tr>' +
                        resultado.map(Combo => `<tr><td>${Combos.nombre}</td><td>${Combos.precio}</td><td>${Combos.stock}</td></tr>`).join('') +
                        '</table>',
                  confirmButtonText: 'OK'
              })
              
          } else {
              Swal.fire({
                  title: 'No se encontraron coincidencias',
                  icon: 'error',
                  confirmButtonText: 'OK'
              })
          }
      }


console.table(lista)