import * as readline from "readline";
import process from 'process';
import { promisify } from 'util';
import { rmSync } from 'fs';

// https://ko.javascript.info/promisify
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = promisify(rl.question).bind(rl);

(async function () {
    try {
        const answer = await question('What is your name? ');
        console.log(`Hello, ${answer}!`);
        rl.close();
    } catch (error) {
        console.error(error);
    }
})();

