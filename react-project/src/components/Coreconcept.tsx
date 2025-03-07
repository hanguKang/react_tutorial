interface CoreConceptProps {
    title: string;
    description: string;
    image: string;
  }
export default function CoreConcept({title, description, image}:CoreConceptProps){
    return(
        <>
            <li className="core-concepts_list">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
            </li>
        </>
    )
}