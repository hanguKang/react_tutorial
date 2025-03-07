import { ReactElement, useState } from 'react'
import { EXAMPLES, CORE_CONCEPTS } from '../data'
import TabButton from './Tabbutton'
import Tabs from './Tabs'

export default function Example(){
    const [selectTab, setSelectedTab] = useState('');
    const clickHandler = (onSlcted:string) => {
        const props = onSlcted.toLowerCase();
        //console.log(EXAMPLES[props]);
        setSelectedTab(props);
    }
    let tabConts: ReactElement = <p>Please select Topic</p>;
    if(selectTab) {
        tabConts = (
        <>
        <h3 className="tab-content-h3">{ EXAMPLES[selectTab].title }</h3>
        <p>{EXAMPLES[selectTab].description}</p>
        <code>{EXAMPLES[selectTab].code}</code>
        </>
        )
    }
    return(
        <>
            {/* <Tabs buttonContainer={({children})=>(<menu  className="examples_buttonContainer">{children}</menu>)} buttons={ */}
            <Tabs buttonContainer={({content})=>(<ul  className="examples_menu">{content}</ul>)} buttons={
                <>
                    {
                        CORE_CONCEPTS.map((CORE_CONCEPT,idx)=> 
                            <li  key={`${selectTab}_${idx}`}>
                            <TabButton isSelected={selectTab === CORE_CONCEPT.title.toLowerCase()} onClick={ ()=>clickHandler(CORE_CONCEPT.title) }>{CORE_CONCEPT.title}</TabButton>
                            </li>
                        )
                    }
                </>
            }>
                <div className="tab-content">
                    {tabConts}
                </div> 
            </Tabs>
            {/* <menu className="examples_menu">
                {
                CORE_CONCEPTS.map((CORE_CONCEPT,idx)=> 
                    <li  key={`${selectTab}_${idx}`}>
                    <TabButton isSelected={selectTab === CORE_CONCEPT.title.toLowerCase()} onClick={ ()=>clickHandler(CORE_CONCEPT.title) }>{CORE_CONCEPT.title}</TabButton>
                    </li>
                )
                }
            </menu> */}
            {/* <div className="tab-content">
            { //!selectTab ? tabConts : 
            // (
            // <>
            //   <h3 className="tab-content-h3">{ EXAMPLES[selectTab].title }</h3>
            //   <p>{EXAMPLES[selectTab].description}</p>
            //   <code>{EXAMPLES[selectTab].code}</code>
            // </>
            // )
            }
            </div>
            */
            /*
            <div className="tab-content">
            {tabConts}
            </div> */}
        </>
    )
}