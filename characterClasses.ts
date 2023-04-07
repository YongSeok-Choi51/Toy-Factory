// Character classes

// 대괄호 안에 포함되는 특정 문자열을 매칭
const characterSet = /^[가나다]$/;


/**
 * 안녕하세요 저는 최용석입
    가나다와 함께해서 좋네요!
    집으로 가면 나비가 있을까요?
    
    에서 가, 나, 다 에 전부다 매칭
 */

const result = characterSet.exec("안녕하세요 저는 최용석입 가나다와 함께해서 좋네요! 집으로 가면 나비가 있을까요?");

const negatedSet = /^[^가나다]$/; // 대괄호 안에 포함되는 특정 문자열을 제외한 모든문자열을 매칭 (위의 결과의 NOT인 개념)

const range = /^[a-zA-Z가-힣]/; // 영어 대/소문자, 한글 한 글자를 모두 식별

const dot = /./; // dot -> 개행을 재외한 모든 문자를 매칭.

const matchAny = /^[\s\S]$/; // dotall flag를 제외하고 개행을 포함한 모든 문자열을 매치.

const word = /\w/; // 언더스코어 기호를 포함한 영어 + 숫자를 맵핑

const notWord = /\W/; //위의 정규식의 결괏값에 반대

const digit = /\d/; // 숫자만 매칭

const notDigit = /\D/; // 숫자를 제외한 매칭

const whiteSpace = /\s/; // 공백, 탭과 같은 공백 문자를 매치

const notWhiteSpace = /\S/; // 위의 반대 결괏값