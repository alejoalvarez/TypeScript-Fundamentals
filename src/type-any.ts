// explicit type
let idUser : any
idUser = 1 // number
idUser = '1' // string
console.log(">>idUser:", idUser)

// inferred type
let otherId;
otherId = 1;
otherId = '1';
//otherId = true // Print: ">>otherId: true"
console.log(">>otherId:", otherId);

let surprise: any = 'Hello typescript';
const res = surprise.substring(6) 
console.log(">>res:", res);