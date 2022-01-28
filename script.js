var prompt = require ('prompt-sync')();


let nome = prompt('Qual seu nome: ');
console.log(`${nome} As vezes para sermos Herois , temos que nos redobrar com os desafios que a vida empoe\n seja em casa no trabalho`)
console.log("Escolha 1 para sim e 0 para não")

let atitude1= +prompt(`${nome} voce paga suas contas em dia?:  `);
let atitude2= +prompt(`${nome} voce cumpri  horario marcado? `);
let atitude3= +prompt(`${nome} voce corre atrás do seus objetivos  `);
let atitude4= +prompt(`${nome} voce é feliz? `);
let atitude5= +prompt(`${nome} voce sabe perdoar seus inimigos? `);

let cont = atitude1 + atitude2 + atitude3 + atitude4 + atitude5
console.log(cont);

if( cont === 5 ){
    console.log (`${nome} Parabens voce é heroi da Vida ! e concerteza é um orgulho para sua familia .`)

}else if(cont === 4 ){
console.log (`${nome} Com muito esforço voce consegue cumprir seus sonhos `)

}else if(cont ===3){
    console.log (`${nome} Você chega perto de conseguir seus objetivos, mais acaba desistindo em alguma etapa da vida `)

}else if(cont === 2 ){
        console.log (`${nome} Você falha em muitas coisas , precisa rever suas atitudes`)
}else{
     console.log(`${nome} Você é especial , não desista de si mesmo!`)
 }
 

