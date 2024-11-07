import React, { createContext, useContext } from 'react';

/* Context 객체 생성(createContext) */
const TestContext =  createContext();



// 후손 컴포넌트
const GrandChild = () => {

    // TestContext에서 제공하는 값(value)을 얻어와 
    // text 변수에 저장

  const text = useContext(TestContext);
  return (
   
    <>
    <h3>GrandChild</h3>
    <em>{text}</em>
    </>


  );

}


// 자식 컴포넌트
const Child = () => {


  return (

    <>
      <h3>Child Component</h3>
      <GrandChild/>
    </>
  );



}

const Parent = () => {

  return (

    /* Context 객체를 이용해서 하위 모든 컴포넌트에 value 제공 */
    <TestContext.Provider value = 'parent에서 전달한 값'>
      <h3>Parent Component</h3>
      {/* <Child text='Parent에서 전달한 값' /> */}
      <Child/>
    </TestContext.Provider>

  );

}

export default Parent;