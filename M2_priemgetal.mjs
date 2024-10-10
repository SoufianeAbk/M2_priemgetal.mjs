import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({ input, output });

let maxGetal = parseFloat(await userInput.question("Geef een getal in:" ))

for(let controlerenGetal = 2; controlerenGetal < maxGetal; controlerenGetal++){
    let priemGetal = true;

    for(let deler = 2; deler < controlerenGetal; deler++){
        if(controlerenGetal % deler == 0){
         priemGetal = false;
        }
    }

    if(priemGetal == true){
        console.log(controlerenGetal + " is een priemgetal.");
    }else 
    console.log(controlerenGetal + (" is geen priemgetal."));
}
process.exit()