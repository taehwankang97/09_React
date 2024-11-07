import './App.css';
import ClassComponent from './commponents/R01_ClassComponents';
// -> R01_ClassComponent에서 export된 HTML 요소를 
// ClassComponent라고 부르겠다 
// -> 
import FuntionComponent from './commponents/R02_FunctionComponetns';
// 기본벅으로 //, /**/ 주석 사용가능 
// 단 HTML 코드가 작성되는 영역에서는 {/**/} 주석 사용

import Props1 from './commponents/R03_Props1';

import Props2 from './commponents/R04_Props2';

import Props3 from './commponents/R05_Props3';

import State1 from './commponents/R06_State1'

import State2 from './commponents/R07_State2'

import State3 from './commponents/R08_State3'

import StateReview1 from './review/State_Review';

import StateReview2 from './review/State_Review2';

import Context1 from './commponents/R09_Context1';

import Context2 from './commponents/R10_Context2';

import Context3 from './R11_Context3/Parent';


function App() {
  return (
   <>
  {/* JSX(JSdptj HTML 코드 포함) 주석  */}
{/* 클래스 컴포넌트
   <ClassComponent/>

   함수 컴포넌트
  <FuntionComponent/> */}

  {/* Props */}
{/*   <Props1 num='1' name ='홍길동'/>
  <Props1 num='2' name ='김미영' />
  <Props1/>  */} {/* undifind는 출력이 안됨 */}

{/*  <hr/>

<Props2 name = '강감찬'
        age = '72'
        address = '낙성대'
        gender = '남자' />

<Props2 name = '김대현'
        age = '7'
        address = '일산'
        gender = '남자' />


  <hr/>
  <Props3 productName='김밥' price='3000'/>

 <hr/>

  <State1/>

<hr/>

<State2 init='0'/>

<hr/>

<State3/>


<StateReview1/>

<hr/>

<StateReview2/>

<Context1/> */}

{/* <Context2/> */}

<Context3/>

   </>
  );
}

export default App;
