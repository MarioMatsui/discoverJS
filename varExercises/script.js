// Declare uma variável de nome weight
let weight;

// Que tipo de dado é a variável acima?
console.log(typeof weight);

/* Declare uma variável e atribua valores para cada um dos dados
    name: string;
    age: number (int);
    stars: number (float);
    isSubscribed: Boolean;
*/ 
let name = "Marcus"
let age = 24
let stars = 76.4
let isSubscribed = false
//Ou
/*
let name, age, stars, isSubscribed''
name = "Marcus"
age = 24
stars = 12.4
isSubscribed = false
*/

/* 
    A variável student abaixo é de que tipo de dado?

    1. Atribua a ela as mesmas propriedades e valores do exercício 3.
    2. Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valore
        de cada propriedade do objeto.
*/
let student = {
    name: "Marcus",
    age: 24,
    weight: 76.4,
    isSubscribed: true,
};
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/* 
    Declare uma variável do tipo Array, de nome students e atribua a
    ela nenhum valor, ou seja, somente o Array vazio.
*/
let students = []

/* 
    Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
    (não copiar e colar o objeto, mas usaro objeto criado e inserir ele no array)
*/
students = [
    student
]

/* 
    Coloque no console o valor da posição zero do Array acima.
*/
console.log(students[0])

/* 
    Crie um novo student e coloque na posição 1 do Array students.
*/
let student1 = {
    name: "Lucas",
    age: 23,
    weight: 72.3,
    isSubscribed = true
}
students = [
    student,
    student1
]

/*
    Sem rodar o código responda qual é a resposta do código abaixo
    e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/
A resposta é undefined, pois, por mais que a variável sofra o hoisting,
sua definição não será levada para cima na hora da leitura do código pelo navegador.