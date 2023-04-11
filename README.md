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
