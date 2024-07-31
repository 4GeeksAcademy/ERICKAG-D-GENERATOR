const urls=document.querySelector(".urls")

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

//SACAMOS SUMAMOS LA LONGITUD DE TODOS LOS ARRAYS Y LO DIVIDIMOS ENTRE LA CANTIDAD DE ARRAYS,SERIA 2+2+2 / 3 ,da 2
//FINALIZADO
let template = "";
for (let m = 0; m < 2; m++) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; i < adj.length; i++) {
      for (let k = 0; k < noun.length; k++) {
        template += `<p> ${pronoun[i]}${adj[j]}${noun[k]}.com </p>`;
      }
    }
  }
}

urls.innerHTML=template
console.log(template);
