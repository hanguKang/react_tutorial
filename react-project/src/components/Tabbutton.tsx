import React from 'react'
// export default function TabButton({children, onSelected, isSelected }:{children:string, onSelected:(e:React.MouseEvent<HTMLElement, MouseEvent>)=>void, isSelected:boolean}){
export default function TabButton({children, isSelected, ...props }:{children:string, isSelected:boolean} & React.HTMLAttributes<HTMLButtonElement>){

    return(
        <>
            <button type="button" {...props} className={isSelected?"active examples_menu_button":"examples_menu_button"}>{children}</button>
        </>
    )
}