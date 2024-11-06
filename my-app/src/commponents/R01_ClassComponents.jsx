import React,{Component} from 'react';
// -> node_modules 폴더에서 'react' 관련 모듈 중
// React, Commponent를 얻어와 사용 
// 사용 시 이름도 React, Commponent

/*[클래스형 컴포넌트 만들기] 
1. extends Component (inport 받은 Component 상속 하기)
2. render() 함수 작성하기 (필수)
3. 만든 클래스를 export default 지정하기
*/
class ComponentEx extends Component{

  // 생성자 함수
  constructor(props){
    super(props);

    this.state = {count:0};
  }

  /*이벤트 핸들러*/
  clickHandler = () => {
    this.setState({ count : this.state.count + 1 })
  }
  clickHandler2 = () => {
    this.setState({ count : this.state.count - 1 })
  }
  clickHandler3 = () => {
    this.setState({ count : this.state.count * 3.14 })
  }
  // render() 함수
  // return되는 HTML 코드를 화면에 출력하는 함수
  render(){
    return(
      <>
        {/* <></> == fragment (해석되면 사라짐, 묶음 용도) */}
        <h2> &nbsp;클래스형 컴포넌트 입니다</h2>
        <h2> &nbsp;{this.state.count}</h2>
       <label> &nbsp; <button onClick={this.clickHandler}>1 증가</button></label>
       <label> &nbsp; <button onClick={this.clickHandler2}>1 감소</button></label>
       <label> &nbsp; <button onClick={this.clickHandler3}> 원주율</button></label>
      </>
    );
  }

}

export default ComponentEx;
// 다른 js/jsx에서 import해서 사용가능