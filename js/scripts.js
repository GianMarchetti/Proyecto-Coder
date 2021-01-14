// desafio clase 6-----------------------------------------------------------------------------------------------------------------
const dias = ["lunes", "martes", "miercoles"];
let dias2 = new Array("jueves", "viernes", "sabado", "domingo");

const semana = [...dias, ...dias2];
console.log(semana)

const Lebron = [17, 'nike', true, { precio: 8200, stock: "no disponible" },
    [1, "dos", 3]
];
console.log(Lebron)

Lebron[3].stock = "disponible";
// console.log(Lebron[3].stock)

const tallesl = [...Lebron, "talle 35 a 45"]
console.log(tallesl)

// 1era entrega proyecto----------------------------------------------------------------------------------------------------------

const producto1 = {
        nombre: "Lebron17",
        precio: 8200,
        marca: "Nike",
        talle: 43,
        cant: 1,

        mostrarInfo: function() {
            console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
        }
    }
    // const producto2 = {
    //     nombre: "SpursManu",
    //     precio: 8200,
    //     marca: "Nike",
    //     talle: "large",
    //     cant: 1,

//     mostrarInfo: function() {
//         console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
//     }
// }
// const producto3 = {
//     nombre: "ShortAS",
//     precio: 8200,
//     marca: "Jordan",
//     talle: "large",
//     cant: 1,

//     mostrarInfo: function() {
//         console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
//     }
// }
console.log(producto1)
    // console.log(producto2)
    // console.log(producto3)

let carrito = [`producto1`, `producto2`, `producto3`];
console.table(carrito)