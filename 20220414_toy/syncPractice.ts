
import process from 'process';
import * as readline from "readline";

// https://ko.javascript.info/promisify
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let outer: number | string;
// 함수 시작이 안된다..! 
(async () => {
    console.log("hi");
    const result = rl.question("동기화 입력", async (result: string) => {
        const promise = new Promise((res, reg) => {
            if (result.length == 0) {
                outer = "Zero";
                reg(result);
            } else {
                outer = result;
                res(result);
            }

        });
        const message = await promise;
        return console.log(message);
    });

    console.log("result", result);
})();