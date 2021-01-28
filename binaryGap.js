function getGaps(arrayBinary, gaps) {
    const firstExtreme = arrayBinary.indexOf("1"); // Posición del primer '1' en el array de binarios
    if(firstExtreme > -1){ // Si existe un '1' en la matriz
        let newArrayBinary = arrayBinary.slice(firstExtreme + 1); // Nuevo array para encontrar el próximo '1' sin incluir el encontrado
        const secondExtreme = newArrayBinary.indexOf("1"); // Posición del segundo '1' en el array binario
        if (secondExtreme > 0) { // Para validar que no se repita la primera posición en ambos arrays
            gaps.push(secondExtreme);   
        }
        // Se llama a la misma función descomponiendo el array hasta encontrar todas las posiciones de los '1'
        return getGaps(newArrayBinary.slice(secondExtreme), gaps); 
    }
    if (gaps.length > 0) { // Se valida que el array que contiene las brechas posea algún valor y se calcula el máximo
        return Math.max.apply(Math, gaps);
    }else{
        return 0;
    }
}

function binaryGap(n) {
    if ((Number.isInteger(n)) && (n >= 1 && n <= 2147483647)) {
        const binary = n.toString(2); // Conversión a binario utilizando función toString()
        const arrayBinary = binary.split(''); // Almacenar Binario en array separando valores con la función split()
        console.log(arrayBinary);
        return getGaps(arrayBinary, []); // Función que se encarga de encontrar las brechas de ceros en el array
    }
    return 0;
}

console.log(`The longest binary gap is: ${binaryGap(1385)}`);