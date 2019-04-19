import React from 'react';
import TechSpecChoices from './TechSpecChoices';

export default function TechSpecs(props) {
  const features = Object.keys(props.features).map(key => {
    const options = props.features[key].map((item, index) => {
      const selectedClass =
        item.name === props.selected[key].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      return (
        <TechSpecChoices
          key={index}
          id={index}
          tracker={key}
          addClass={featureClass}
          updateFeature={props.updateFeature}
          item={item}
        />
      );
    });

    return (
      <div className='feature' key={key}>
        <div className='feature__name'>{key}</div>
        <ul className='feature__list'>{options}</ul>
      </div>
    );
  });
  return (
    <section className='main__form'>
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {features}
    </section>
  );
}
