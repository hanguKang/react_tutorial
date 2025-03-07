import reactImg from '../assets/react-core-concepts.png';
const reactDescription:Array<string> = ['Fundamental', 'Crucial','Core']
function getRandomIng(max:number):number{
    return Math.floor(Math.random()*(max+1))
}

export default function Header (){
    const description:string = reactDescription[getRandomIng(2)]
    return (
        <>
        <header className="[&>*]:header_img header_center">
            <img src={reactImg} alt="Stylized atom" />
            <h1 className="my_heading">React essentials</h1>
            <p>
                {description} React concepts you yill need for almost any app you are going to build!
            </p>
        </header>
        </>
    )
}