import { CORE_CONCEPTS } from '../data'
import CoreConcept from './Coreconcept'

export default function CoreconepttHeader(){
    return (
        
            <ul className="core-concepts_ul">
            { CORE_CONCEPTS.map((CORE_CONCEPT)=><CoreConcept key={CORE_CONCEPT.title} {...CORE_CONCEPT}/>) }
            </ul>
        
    )
}