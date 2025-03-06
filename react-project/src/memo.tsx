//import React from "react";
import { useState, useCallback, useEffect } from "react"; //ver1
//import { useState, useCallback } from "react"; //ver2


//ver2.
// type Props = {
//   onClick: () => void;
// };
// const Child = React.memo<Props>(({ onClick }) => { // Typescript generic 관점에서 React.memo는 Props에 정의된 onClick함수의 타입으로 지정된다. 또한, argument인 onClick callback역시 저런 방식으로 void를 return한다는 뜻이다. 여기서는 handleClick을 참조(Child DOM 생성할 때 )한다.
//   console.log("✅ Child 컴포넌트 렌더링");
//   return <button onClick={onClick}>Child Click Me</button>;
// });

function Parent() {
  const [count, setCount] = useState(0);

  //ver 1. 
  const logMessage = useCallback(()=>{ //useCallback을 사용하지 않았고 일반 함수를 할당했다면 state가 변경될 때마다 새로 할당해야 한다. 같은 일을 하는데 매번 그 함수를 새로 할당한다면 메모리 낭비가 된다. 게다가 useCallback함수가 아닌, 일반 함수를 할당하고 이를 useEffect의 의존성에 연결하면, 값 변화가 없어도 새로 렌더링할 때마다 같은 일을 하는 함수를 새로 할당해야하고 그 때마다 useEffect가 실행되어야 한다. 
    console.log("Current count:", count);
  },[count]); //A-1. - count가 변경되면, logMessage의 참조값(useCallback에 의해서 참조된 callback함수)이 변경된다(재 사용한다 : 재 성생인가?). 

  useEffect(()=>{
    console.log("useEffect 실행");//mount할 때 처음 실행 순서-1 || rendering ( dom update나 dom 생성, 구독설정, ajax데이터 가져오기 등) 할 때 cleanup보다 나중에 실행 순서-5
    logMessage(); //mount할 때 처음 실행 순서-2  ||  rendering ( dom update나 dom 생성, 구독설정, ajax데이터 가져오기 등) 할 때 cleanup보다 나중에 실행 useCallback의 callback 함수가 이 실행된다. 순서-6
    return () => { //mount할 때 처음 실행 순서-3  ||  rendering ( dom update나 dom 생성, 구독설정, ajax데이터 가져오기 등) 할 때 먼저 실행한다. 순서-4
      console.log("useEffect Cleanup 실행!");
    };
  },[logMessage]); //A-2. mount될때 순서 -1, -2(useCallback의 참조된 callback함수 실행 ), -3의 순서로 실행 dependency의 변경된 것을 감지하고 useEffect를 실행하는데 dom update나 dom 생성 이며. 순서는 -4, -5, -6으로 진행된다.  

  //ver 2.
  //🔥 Parent가 리렌더링될 때마다 새로운 함수가 생성됨
  //  ✅ useCallback을 사용하여 함수를 메모이제이션 (count가 변하지 않으면 다른 이유로 리렌더링될 때 재사용됨)
  // const handleClick = useCallback(() => {
  //   console.log("Child Button clicked!");
  // },[]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}> Parent Increase</button>
      {//<Child onClick={handleClick} />
      }
      
    </div>
  );
}

export { Parent }