
// 정규표현식의 맨 뒤에 붙는 플래그 옵션(?)을 부여함으로써 regex를 좀더 유연하게 사용하는 장치로 받아들여짐

// ignore case -> i
// 알파벳의 경우, 대 소문자를 구분하지 않고 정규표현식에 적용시키는 플래그

// global search -> g
// 마지막 인덱스를 유지하여 이전 매칭의 끝에서 후속 검색을 할 수 있다고 하는데 맥락 없이 설명만 나와있어 예제로 보아야 함.
// 무한 일치 오류를 방지하기 위해 전역 플래그를 비활성화 해서 단일 일치 항목만 검색한다.?
// 우선 이해한 바는 전역 플래그가 존재하면 입력 문자열을 모두 검사해서 정규표현식을 적용한다 라고 이해함 (물어봐서 다시 확인해보기)

// multi lime -> m
// 해당 플래그가 활성화 되면 문자열이 여러줄이고 시작과 종료 anchor (^ and $)가 존재할 경우,
// 여러 줄의 문자열 전체의 시작과 종료를 잡는게 아니라. 각 줄의 시작과 종료 바운더리를 지정하게 된다.

// unicode -> u
// 유니코드 플래그가 활성화 된 경우, unicode escapes를 사용할 수 있다. 

// sticky -> y
// 마지막 인덱스 위치의 매치만 매치한다. 전역플래그(g)가 활성화 돼있다 해도 무시가 된다.
// 왜나하면 각각의 정규표현식 탐색은 이산적이기때문? 별개의 것이기 때문? (이해가 잘 가질 않는다.)
// 위의 특성 이외에 결과에 추가적인 영향은 없다. (마지막 인덱스의 매치만 반환하는것 말고)

// dotall -> .
// 모든 문자를 매칭하는 플래그, 개행문자도 포함한다.