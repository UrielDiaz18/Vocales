let frase = "odontologo";
let vocales = ["a", "e", "i", "o", "u"];
let contadorVocales = 0;

function contarVocales(palabra) {
    frase = palabra.toLowerCase();

     for (let i = 0; i < frase.length; i++){
        for (let v = 0; v < vocales.length; v++) {
              if (frase[i] === vocales[v]) {
                contadorVocales++;
            } //if
        }// for anidada
    }//for

   return contadorVocales;
}//contadorVocales

console.log("palabra:", frase)
 console.log("total de vocales en la palabra:", contarVocales(frase));

 