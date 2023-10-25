document.getElementById("findPrimesButton").addEventListener("click", findPrimeNumbers);

function findPrimeNumbers() {
    let inputElement = prompt("Enter an integer: ");
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = ""; // Clear previous results

    if (isNaN(inputElement)) {
        resultElement.innerHTML = "Please enter a valid integer.";
        return;
    }

    if (inputElement < 2) {
        resultElement.innerHTML = "No prime numbers to display.";
        return;
    }

    const primes = [];

    for (let num = 2; num <= inputElement; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
            isPrime = false;
            break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    if (primes.length > 0) {
        resultElement.innerHTML = "Prime numbers less than or equal to " + inputElement + ": " + primes.join(", ");
        } else {
        resultElement.innerHTML = "No prime numbers found.";
    }
}