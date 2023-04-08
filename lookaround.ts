// 전 / 후방 탐색
// 작성한 패턴에 일치하는 영역이 존재하여도 그 값이 제외돼서 나오는 패턴이다.
// 전방탐색의 기호는 ?=
// 후방탐색의 기호는 ?<= 이다.
// 패턴에 매칭되는 문자열을 detect하는 positive, 매칭된 패턴을 제외하는 negative로 분류가 된다

// 바로 예제로 고고!
/**
 * /.+(?=:)/ 의 뜻은 무엇일까?
 * 바로 콜론 앞의 모든(any) 문자열을 매칭하는 정규표현식
 * 여기서 기준값이 되는 콜론 자체는 제외되고 매칭이 된다.
 * 
 * [http]:www.~~
 * http / https 와 같은 url의 프로토콜 필드를 뽑아내는 용도로 사용할 수 있을 듯 하다
 */

/**
 * 쉽고 빠르게 이해하자면 
 * 전방 탐색 ?=
 * 후방 탐색 ?<=
 * 
 * negative의 경우, 위의 positive를 나타내는 equal 표시가 ! 로 바꾸면 된다
 * 
 */

const positiveLookAhead = /(?=가나다)/;
const negativeLookAhead = /(?!aeiou)/;
const positiveLookBehind = /(?<=anystring)/;
const negativeLookBehind = /(?<!somestring)/;