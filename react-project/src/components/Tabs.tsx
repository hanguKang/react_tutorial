
interface TabBtn {
    children: React.ReactElement;
    buttons: React.ReactNode;
    //buttonContainer: React.ComponentType<{children: React.ReactNode}>;
    buttonContainer: React.ComponentType<{content: React.ReactNode}>;
}
export default function Tabs({children, buttons, buttonContainer:ButtonContainer = ({content})=>(<menu  className="examples_menu">{content}</menu>)}:TabBtn){
    return (
        <>
            {/* <ButtonContainer>
                {buttons}
            </ButtonContainer> */}
            <ButtonContainer content={buttons}/>
            {children}
        </>
    );
}