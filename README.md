# 자바스크립트 언어 학습 및 리액트의 원리 이해해보기 

### 리액트를 순수 자바스크립트로 구현하려면 어떻게 해야할까?
 - 리액트가 지원하는 함수형 컴포넌트에서 사용하는 훅(Hook)은 자바스크립트로 어떻게 동작하는걸까? 
 - 리액트의 useState가 왜 비동기로 동작할까? 동기적으로 동작하게 하려면 어떻게 해야할까?


#### Reference
 - https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Make-useSate-hook/#_2-bottom-up-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8
 - https://velog.io/@aborile/React-Hooks-with-Vanilla-JavaScript
 
# Vanila-React (Part II)

### 함수형 컴포넌트와 클래스형 컴포넌트의 차이 알아보기
 - 리액트 컴포넌트를 자바스크립트로 구현했을때, 두 개의 차이는 어떻게 될까?
 - useEffect를 자바스크립트로 구현해보기!

### 궁금한 점 / 궁금했던점(이해한점).
 - JSX 문법은 어떻게 사용 가능한걸까? html `<script>`태그 안에서는 사용할 수 없는걸까?
    - 순수 자바스크립트에서는 JSX문법을 사용할 수 없다. ReactJs가 바벨 등을 사용해서 자바스크립트 코드로 변환함.
    - JSX 코드는 Babel과 같은 트랜스파일러를 통해 JavaScript 코드로 변환됩니다. 변환 과정에서 JSX 태그는 React.createElement() 함수 호출로 변환됩니다. (from chatGpt)
    - JSX를 사용하려면 React를 사용하는 프로젝트에서만 사용할 수 있습니다. 하지만, React를 사용하지 않고 순수 JavaScript로 UI를 작성할 수 있는 다른 방법들도 있습니다.
    - 예를 들면, Vanilla JS, jQuery, Vue.js, Angular 등의 프레임워크와 라이브러리들이 있습니다. 
 - UseEffect는 내부적으로 어떻게 동작을 할까?
  - 이펙트 함수는 함수나 상태값을 반환하는 useState와는 별개로, 의존성 배열을 비교하고, 변경 감지시에 콜백 함수를 실행하는 부분에서 차이가 있엇다. 
  - useState 함수에서, 반환값이 되는 setState함수가 실행이 될 때, 상수값이 기억된 채로 반환이 돼서, 여러개의 상태값으 관리하더라도 자신이 참조하는 값의 위치를 기억한다. (중요!)
  - render함수가 실행이 되면, 컴포넌트도 다시한번 실행이 된다 라는걸 외우듯이 알아두자

#### Reference 
 - https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Make-useSate-hook/


# Vanilla-React (Part III)


### UseMemo 함수를 javascript로만 구현해보기
 - 계산된 값을 의존성에 따라서 재계산하는 useMemo 컨셉을 어떻게 구현할지? 고민해보기
 

#### 느낀 점
 - 어제자 공부하였던 useEffect함수를 다른 인터넷에서 모범사례 코드를 찾아보니 전체적인 골격은 같았지만 세부적인 방법에서 차이가 났었다.
 - useState때 처럼 특정 인덱스를 직접적으로 비교하는 클로저 함수를 사용해 이펙트 함수도 구현하는듯 해 보여서, 추후에 다시 구현해보면 좋을듯 하다.
 - useState, useEffect, useMemo 와 같은 리액트 훅 들을 자바스크립트로 구현해 보았는데, 함수형 프로그래밍을 정말 유연하게 사용하는걸 느꼈다.
 - 특히 인덱스 상수를 기억하는 클로저 함수를 반환해서 상태값이 여러개를 관리하더라도, 반환된 함수는 항상 자신이 바라보고 있는 상태를 갱신하는 부분에서 
 - 자바스크립트의 강력함을 느꼈다!, 자바나 c 같은 절차형이자 선언형 프로그래밍 언어에서는 생각해보기 어려운 방식으로 문제를 해결해 나가는 것 같다.