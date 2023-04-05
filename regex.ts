import * as readline from 'readline';
import process from "process";
import { rmSync } from 'fs';


const isAllDigit = (input: string) => {
    return /^\d+$/.test(input);
};

const isAllAlphabet = (input: string) => {
    return /^[a-zA-Z]+$/.test(input);
};

const isContainAt = (input: string) => {
    return /@/.test(input);
};

const isValidEmailAddress = (input: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter the string to check regex Exp.');
console.log('The Functions check whether string is All Digit/Number or Not');

const result = rl.on("line", (line) => {
    if (line.trim().toLowerCase() === 'x') {
        rl.close();
        return;
    }

    console.log("================");
    console.log(line, " is All Digit? -> ", isAllDigit(line.trim()));
    console.log("================");
    console.log(line, " is All Alphabet? -> ", isAllAlphabet(line.trim()));
    console.log("================");
    console.log(line, " contains '@' character? -> ", isContainAt(line.trim()));
    console.log("================");
    console.log(line, " is valid Email Address format? -> ", isValidEmailAddress(line.trim()));
    console.log("================");
    console.log("Enter 'x' to Exit");
    console.log("================");
}).on('close', () => {
    console.log("Good Bye");
});
