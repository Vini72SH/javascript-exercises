const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

const palindromes = function(words) {
    let i, j;
    let s = words.toLowerCase()
                .split('')
                .filter((character) => alphanumerical.includes(character))
                .join('');
    let palindrome = true;

    for (i = 0; i < s.length / 2; ++i) {
        j = s.length - (i + 1);
        if (s[i] !== s[j]) {
            palindrome = false;
            break;
        }
    }

    return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
