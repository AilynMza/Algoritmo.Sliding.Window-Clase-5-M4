
function findLongestWord(text) {
    const words = text.split(" ");
    let palabraActual = '';
    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    // for (...) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        // if (...) {
            // Actualizar la palabra más larga
            // longestWord = ...;
        // }
    // }

    // TODO: Retornar la palabra más larga encontrada
    // return ...;

    for (let i = 0; i < words.length; i++){
        palabraActual = words[i];
        if (palabraActual.length >= longestWord.length) {
           longestWord = palabraActual;
        }
    }
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"