
// + 앞선 정규표현식 토큰과 일치하는 1개 이상의 문자를 매칭
const plus = /용[가-힣]+/; // 용 뒤에 어떤 한글 문자를 매칭 (+) + 기호 가없다면 뒤에 오는 한 개만 매칭

// * 앞선 정규표현식 토큰과 일치하는 토큰이 없거나 여러개 있어도 모두 매칭
const start = /용[가-힣]*/;  //  '용' 만 존재하여도 해당 정규식이 매칭. + 보다 넓은 스코프

// {1,3} 명시된 수량만큼만 인식한다 1~3개 까지만 인식한다는 의미
// {3} 딱 3개만 인식한다는의미
// {3, } 3개 이상만 인식한다는 의미
const quantifier = /용[a-zA-Z]{3}/; // 용 뒤에 알파벳 대 소문자 상관없이 3개개까지만 인식한다.

// 0개 혹은 1개만 인식한다. 선택적인 경우 효율적이다
const optional = /용[가-힣]?/; // 용 뒤에 아무것도 없거나, 한개만 있을때 매칭, '용석이입니다' 인 경우 용석 까지만 매칭

// lazy에 대한 개념을 정확하게 모르곘다.
/** (MDM 문서 발췌)
 * By default quantifiers like * and + are "greedy",
 * meaning that they try to match as much of the string as possible.
 * The ? character after the quantifier makes the quantifier "non-greedy": meaning
 * that it will stop as soon as it finds a match. For example, 
 * given a string like "some <foo> <bar> new </bar> </foo> thing":
 */
// 기본값으로 모든 값을 찾으려는 수량자 (* 이나 +)를 한 개만 찾고 바로 끝내게 하도록 동작시키는걸 말하는 듯 하다.

const lazy = /용[a-zA-Z]*?/; // *의 조건이 되는 없거나, 여러 개인 경우가 있을때 가장 먼저 매칭되는 문자열을 찾고, 그 이후로는 탐색을 하지 않는다.


const alternation = /용(석|민|준|용석)/; // 그룹핑 내에서 or 조건으로 많이 사용됨. 용 뒤에 석 민 준 용석 문자열이 붙는 문자열이 매칭!