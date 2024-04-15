function calcularMedia(numeros) {
    // Verifica se o array está vazio
    if (numeros.length === 0) {
        return 0; // Se estiver vazio, retorna 0
    }

    // Calcula a soma de todos os números no array
    const soma = numeros.reduce((total, numero) => total + numero, 0);

    // Calcula a média
    const media = soma / numeros.length;

    return media;
}

// Exemplo de uso da função:
const arrayNumeros = [5, 10, 15, 20];
const media = calcularMedia(arrayNumeros);
console.log("A média dos números é:", media); // Saída: A média dos números é: 12.5
