// dev: Francesco Cimino;
// proj: Simon Says;
// lang: js;

const numsContainer = document.getElementById("nums");
const verdict = document.getElementById("result");

// empty-arrays
const RndNumbersArray = [];
const userNumbersArray = [];
const guessedNumber = [];

// numbers generator
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

const result = () => {

    for (let i = 0; i < RndNumbersArray.length; i++) {
        const firstElement = RndNumbersArray[i];

        for (let j = 0; j < userNumbersArray.length; j++) {
            const secondElement = userNumbersArray[j];

            if (secondElement === firstElement){
                guessedNumber.push(secondElement)
            };
        }
    }

    verdict.innerHTML += `Amount of numbers that you guessed: ${guessedNumber.length}...  The numbers are: ${guessedNumber}... Bye!!! `;
};

// loop 
while (RndNumbersArray.length < 5) {
    const element = getRndInteger(1, 100);

    if (!RndNumbersArray.includes(element)){
        numsContainer.innerHTML +=` ${element}`;
        RndNumbersArray.push(element);
    } 
}

// countdown
setTimeout( () => {
    numsContainer.classList.add("hidden");
}, 30000);

// to ask user the numbers 
setTimeout( () => {
    for (let i = 0; i < 5; i++) {
        let userImput = parseInt(prompt("Guess a number:"));

        // check-for-correct-input-data
        if (isNaN(userImput)) {
            userImput = parseInt(prompt("Only numbers please..."));
        }      

        userNumbersArray.push(userImput)
    }
    result();
}, 31000);

setTimeout( () => {
    numsContainer.classList.remove("hidden");
}, 32000);