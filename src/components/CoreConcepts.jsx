

import { CORE_CONCEPTS } from "../data";
import CorePrinciple from "./CorePrincipal";

export default function CoreConcepts() {

    return (
        <> 
        <h2> Core Principle</h2>
        <section id="core-concepts">
          <ul>

            {CORE_CONCEPTS.map((core) => (
              <CorePrinciple key={core.title} {...core} />
            ))}
            
            
          </ul>
        </section>
         </>
    )
}