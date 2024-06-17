import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
      ButtonsContainer="menu"
      buttons=
      {
        <> 
        <TabButton 
        isSelected={selectedTopic === 'animation'}
        onClick={() => handleSelect('animation')}>Animation</TabButton>
        <TabButton 
        isSelected={selectedTopic === 'camera'}
        onClick={() => handleSelect('camera')}>Camera</TabButton>
        <TabButton 
        isSelected={selectedTopic === 'materials'}
        onClick={() => handleSelect('materials')}>Materials</TabButton>
        <TabButton 
        isSelected={selectedTopic === 'object3D'}
        onClick={() => handleSelect('object3D')}>Object3D</TabButton>
        </>
      }  >
      { !selectedTopic && <p>Please select a topic</p>  }

      { 
      selectedTopic && ( <div id="tab-content"> 
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div> 

      )
      }  
        
      </Tabs>
    </Section>
  );
};

export default Examples;