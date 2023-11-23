//single DNA nucleotido
function transcriptDNA (strandDNA) {
    switch (strandDNA) {
    case 'G':
        console.log('C');
    case 'C':
        console.log('G');
    case 'T':
        console.log('A');
    case 'A':
        console.log('U');
    }
    
}

//an intire strand of DNA
var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(strg) {
    var rna = "";

    for (var i = 0; i < strg.length; i++) {
        if (strg[i] === 'G') {
            rna += 'C';
        } else if (strg[i] === 'C') {
            rna += 'G';
        } else if (strg[i] === 'T') {
            rna += 'A';
        } else if (strg[i] === 'A') {
            rna += 'U';
        }
    }

    return rna;
};

module.exports = DnaTranscriber;