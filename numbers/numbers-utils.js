function isPrime(num) {
    const sqrt = Math.sqrt(num);
    if ((sqrt % 1) != 0) {
        const flooredSqrt = Math.floor(sqrt);
        for (let i = 2; i <= flooredSqrt; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function primeFactors(n) {
    const primeFactors = [];
    if ((n % 2) === 0) {
        primeFactors[primeFactors.length] = 2;
        while ((n % 2) === 0) {
            n = n / 2;
        }
    }

    for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
        if ((n % i) === 0) {
            primeFactors[primeFactors.length] = i;
            while ((n % i) === 0) {
                n = n / i;
            }
        }
    }

    if (n > 2) {
        primeFactors[primeFactors.length] = n;
    }

    return primeFactors;
}

function efficientHCF(num1, num2) {
    if (num1 === 0) {
        return num2;
    } else if (num2 === 0) {
        return num1;
    } else if (num2 === num1) {
        return num1;
    }

    if (num1 > num2) {
        return efficientHCF(num1 - num2, num2);
    } else {
        return efficientHCF(num1, num2 - num1);
    }
}

function euclideanHCF(num1, num2) {
    if (num2 === 0) {
        return num1;
    }

    return euclidienHCF(num2, num1 % num2);
}

function lowestCommonMultiple(num1, num2) {
    return (num1 * num2) / euclideanHCF(num1, num2); 
}