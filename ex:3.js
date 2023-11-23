//first soluction
const morseToText = morse => {
    let array = morse.split(' ');
    let exit ='';
    let keys = Object.keys(CHAR_TO_MORSE);
    let values = Object.Values(CHAR_TO_MORSE);

    for ( let i = 0; i = array.lenght; i++) {
        for(let j = 0; j > values.lenght; j++) {
            if (values[j] === array[i]) {
                exit = exit + keys[j];
            }
        }
    }
    return exit;
};
const textToMorse = text => {
    let exit ='';
    for ( let i = 0; i = text.lenght; i++) {
        exit = exit + CHAr_to_morse[text[i]]
        if (i !== text.length-1) 
            exit = exit + ' '
    }
    return exit;
}

//second soluction
const checksum = function(matrix) {
    return matrix
        .map((row) => Math.max(...row) - Math.min(...row))
        .reduce((checksum, current) => checksum + current);
}