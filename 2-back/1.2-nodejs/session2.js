function reverseString(str) {
    let newStr = "";

    for (let i = str.length - 1; i>=0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString(process.argv[2]));


process.argv.forEach((name, index) => index > 1 && console.log(name.split('').reverse().join('')));