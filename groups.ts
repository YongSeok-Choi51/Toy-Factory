


const capturingGroup = /(가나다)/; // 가나다 가 포함된 문자열을 매칭

const namedCapturingGroup = /(?<ys>ABC)/; // 그룹의 개념을 naming 

const nonCapturingGroup = /(?:ABC)/; // 매칭은 되지만, 그룹의 조건에서는 제외

const numericReference = /\1/; // 그룹의 순서를 정의,  첫 번째 그룹을 지정, \2는 두번째 그룹을 의미함

console.log(nonCapturingGroup.exec('BBBBBABC'));
const groups = namedCapturingGroup.exec('ABC');
console.log(groups?.groups?.ys);


// group표현이 잘 이해가 가지 않음. 추가적인 학습 필요함..
// 대괄호와의 차이는 세 개가 전부 연속적으로 붙어있어야 하는 조건의 차이


