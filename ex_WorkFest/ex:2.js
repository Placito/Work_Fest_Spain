//first soluction
const checkSum = function(matrix) {
    const newArray = [];

    matrix.map((itemArray) => {
        let max = itemArray[0];
        let min = itemArray[0];

        itemArray.map((item) => {
            if (item > max) max = item;
            if (item < min) min = item;
        });
        newArray.push(max - min);
    })

    /*The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value.*/ 
    return newArray.reduce((accumulator, a) => accumulator + a);
}

//second soluction
const checksum = function(matrix) {
    return matrix
        .map((row) => Math.max(...row) - Math.min(...row))
        .reduce((checksum, current) => checksum + current);
}