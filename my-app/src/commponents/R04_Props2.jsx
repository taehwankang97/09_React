import React from 'react';
import '../css/Props.css';
// css를 해당 jsx 파일에 inport 했다고 해서 
// 해당 파일에만 적용되는 것이 아닌
// 출력된 화면에 모두 적용 된다
const PropsEx2 = (props) => {

  // 구조분해 할당(객체{})
  let { name, age, address, gender } = props;

  return (
    <>
    {/* React에서 class 속성은 clasaName으로 해야함 */}
      <ul className='info'>

        <li>
          이름 : {name}
        </li>
        <li>
          주소 : {address}
        </li>
        <li>
          성별 : {gender}
        </li>
        <li>
          나이 : {age}세,
           {age < 20 ? 
           <span className='red'>미성년자 입니다</span>
           : 
           <span className='blue'>성인 입니다</span>
           }
        </li>
        

      </ul>
    </>

  );


}
 export default PropsEx2;