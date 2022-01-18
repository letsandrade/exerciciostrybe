//ARRAY
let arrNome = [];
//OBJETO
let arrObj = {};

let firstName = "Murilo";
let lastName = "Flesch";
let age = 35;
let canDrive = true;
favoriteMovies = ["see", "Matrix"]

let person = {
    firstName: "Leticia",
    lastName: "Andrade",
    age: 28,
    canDrive: false,
    favoriteMovies: ["Star Wars", "Matrix"],
    adress: {
        street: 'Equador',
        number: 357,
    },
}; 
//LENDO OBJETOS
console.log("item: ",person.favoriteMovies[0]);
console.log("item: ",person.adress.number);


//ATUALIZANDO OBJETOS
person.lastName = "Almeida"


//ITERANDO ITENS DE UM OBJETO
for(let key in person ){
    console.log("key in objeto:", person[key]);

    if(key == "firstName"){
        break;
    }
}

//COMPARACAO OF IN COM ARRAY
let pessoa = ["Leticia","Andrade", 28]