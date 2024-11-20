import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts (){
    return (

    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
    {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title} {...conceptItem} />))}
    {/*        <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
    /> */}
    {/* The below option is for shorter version, if the prop attributes names are same as the properties 
        name of the object then this option can be used */}
    {/*  <CoreConcept {...CORE_CONCEPTS[1]} />
    <CoreConcept {...CORE_CONCEPTS[2]} />
    <CoreConcept {...CORE_CONCEPTS[3]} /> */}
    </ul>
    </section>
    );
}
