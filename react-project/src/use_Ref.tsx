import { useState, useRef, useEffect } from "react";

function ShowRef() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0); //
  let prevNum :number = 0; 

  useEffect(() => {//useEffect는 화면 리렌더링 이후 실행된다. 
    prevCountRef.current = count; // count 값이 모두 반영된 리렌더링 이후에 저장된다. 
    console.log('prevCountRef.current', prevCountRef.current)

    prevNum = count; //count변화 후 useEffect 사용할 때 prevNum = count;가 실행되지만 리렌더링을 할 때 let prevNum :number = 0; 정의부분에 의해서 0으로 초기화 되고 DOM 업데이트 때에는 그 값을 보여준다. react에서는 정의된 useState, useEffect, useRef등 정의된 것들을 제외하고는 컴포넌트들 내부가 모두 다시 초기화 되는거구나 클로저를 사용했기 때문에 당연히 prevNum의 값을 계속 끌고 들어오는 거라고 생각했어. javascript하고는 또 문법적으로 다르네. 
    console.log('prevNum',prevNum)

  }, [count]);

  return (
    <div>
      <p>현재 값: {count}</p>
      <p>이전 값: {prevCountRef.current}</p>
      <p>이전 지역변수 값: {prevNum}</p> {/*prevNum은 어떻게 확인할 수 있을까?*/}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export { ShowRef }