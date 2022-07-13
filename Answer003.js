// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// BRUTE FORCE
// DONE 1 divide by different numbers to see if they work
// 600851475143 % i === 0 
// to check if prime
// i % 2 -> sqrt(i)

// const number = 10017
const number = 600851475143


let Divisors = []
for (let i = 2; i < Math.sqrt(number); i = i + 1) {
    if (number % i === 0) {
        // console.log(number,'=',i,'x',number/i,'works')
        Divisors.push(i, number / i)
    }
}
Divisors = Divisors.sort((a, b) => b - a)

// console.log('the divisors are',Divisors)

for (let i = 0; i < Divisors.length; i = i + 1) {
    // console.log('Divisors[i]', isPrime(Divisors[i]))
    if (isPrime(Divisors[i])) {
        console.log('largest divisor is ', Divisors[i])
        break;
    }
}



function isPrime(r) {
    if (r % 2 === 0) {
        return false;
    }
    for (let i = 3; i < Math.sqrt(r); i += 2) {
        if (r % i === 0) {
            return false;
        }
    }
    return true;
}