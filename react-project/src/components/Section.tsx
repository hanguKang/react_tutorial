import { ReactNode } from 'react';


interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{ 
    //<HTMLElement> generic 으로 htmlElemnt 모든 요소들 input, select, form 등의 속성들을 모두 사용하게 되면 너무 넓어져서 <HTMLSectionElemnt>로 사용하는 것(요소 명을 직접 입력하는 것)이 좋을 수 있다. 또는 상속받지 않고 명시적으로 꼭 필요한 것들을 사용하는 것이 좋을 수 있다. ex> id와 className은 있을 수 있고 없을 수도 있지만, 있을 가능성이 높다면, extends React.HTMLAttributes<T> 이렇게 속성을 상속받는 것보다는 title: string / children: ReactNode; / id?:string; / className?:string; 이런 방식으로 지정하고 또 다른 속성들이 파라미터로 올 여지가 있다면  ...rest를 정의한 곳에서 다음과 같은 타입을 지정해줄 수 있을 것 같다. interface 정의 이후에 function Section({ title, children, id, className, ...rest }: SectionProps & React.HTMLAttributes<HTMLSectionElement>)

    //만약 children으로 항상 string만 오게 하고 싶다면, Omit<interface, interface가 갖고 있는 속성 중에서 생략하고싶은속성>을 사용하면 된다. Omit<React.HTMLAttributes<HTMLSectionElement>, 'children'> children 속성에서 section의 컴포넌트로 가져야할 것들을 제거하겠다는 의미이다. 
  title: string;
  children: ReactNode;
}
export default function Section({title, children, ...props}:SectionProps){
    return (
        <section {...props} >
            <h2 className={`mb-4 ${props.id? 'text-3xl text-red-200' : 'text-red-800'}`}>{title}</h2>
            {children}
        </section>
    )
}