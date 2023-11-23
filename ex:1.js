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
	var rna = "" ;
	for(var i = 0; i < strg.length; i ++) {
		if (strg[i] === 'G') {
			rna += strg[i].replace('G','C');
		} else if(strg[i] === 'C') {
			rna += strg[i].replace('C','G');
		} else if(strg[i] === 'T') {
			rna += strg[i].replace('T','A');
		}else {
			rna += strg[i].replace('A','U');
		}
	}
	return rna;
}
module.exports = DnaTranscriber;