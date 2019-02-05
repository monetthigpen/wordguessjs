function Letters(){
    this.character = "";
    this.guessedOrNot = false;
    this.guesses = 0;
    this.lettersGuessed = [];
    this.wrongletters = [","];
    this.CorrectlettersArray= [];
    var guesses = function(){
        for(var i = 0; i < lettersArray.length; i++){
            if(character === CorrectslettersArray[i]){
                character.push(lettersGuessed)
            }else{
                character.push(wrongletters) 
            }
        }

        }
         }

this.guesses();
module.exports = Letters;