/* console.log('hello type')

const add = (a: number,b :number) => { 
  return a+b;
}
const sum = add(2,3);

console.log(sum) */

let muted: boolean =true; //boleanos
let number:number = 5;//numeros
let string:string = "hola como estas" // strings

let array: string[] = [] //arreglo de solo strings
array = ['pipe','camilo'] 

let numberAndString : Array <string |number> = []// arreglos de numeros y strings
numberAndString.push("ricardo")
numberAndString.push(8500)

//enum

enum Colores{
  rojo = "rojo",
  verde = "verde",
  azul = "azul"
}
let colorFav:Colores= Colores.rojo
console.log(colorFav)

//Any

let comodin : any = "joker" // cualquier tipo de dato
comodin = 54

//object

let object: object = { type: "Dogs"}

// funciones

function add (a:number, b:number): number{
  return a+b;
}
const sum = add(4,6);


const createAdeer = (a:number) : (number) => number =>{
  return function (b:number){
    return a+b;
  }
}
const addFour = createAdeer(5)
const fourPlus6 = addFour(6)

const namePrint  = (fisrtName: string = 'camilo' , lastName?:string) =>{ // se le pone signo de interogacion a parametros opcionales
  return `${fisrtName} ${lastName}` 
}
const nom = namePrint()
console.log(nom)

//interfaces
interface Rectangulo {
  ancho:number
  alto:number
}

let rect: Rectangulo = {
  ancho:4,
  alto: 6
}

function area (r:Rectangulo){
  return r.alto *r.ancho;
}
const areRect = area(rect)
console.log(areRect)

