import React, { useState } from "react";

// 함수형 컴포넌트
// 1 함수 생성
// 2. return구문에 출력하고자 하는 HTML 코드 작성
// 3. 만든 함수를 export default 저장하기

function FunctionEx() {

  //  구조 분해 할당
  // - 배열, 객체에 저장된 값을 각각의 변수에 꺼내서 할당하는 기술
  // ex) 객체 
  // const obj = {a:10, b:20};
  // const {a,b} = obj;

  //ex) 배열 
  // const arr = [100, 200];
  // const [first, second] = arr;
  const [count, setCount] = useState(0);
  //[ 0 , count값을 바꿀수 있는 함수 ]

  // 클릭시 1 감소
  const clickHandler = () => {
    setCount(() => { return count + 1 })
  }
  const clickHandler2 = () => {
    setCount(() => { return count - 1 })
  }
  const clickHandler3 = () => {
    setCount(() => { return count * 3.14 })
  }

  return (
    <>
      <h2>  &nbsp; 함수형 컴포넌트 입니다</h2>
      <h2>  &nbsp; {count}</h2>
      <label>  &nbsp;  <button onClick={clickHandler}> + 1 증가</button></label>
      <label>  &nbsp; <button onClick={clickHandler2}> - 1 감소</button></label>
      <label> &nbsp; <button onClick={clickHandler3}> 원주율 </button></label>
    </>
  )
}
export default FunctionEx;