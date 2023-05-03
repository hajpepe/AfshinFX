/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = { tagnormal: 'tagnormal', tagHover: 'tagHover' };

const useTag = (props) => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions['tagnormal']
  );
  const [previousVariant, setPreviousVariant] = React.useState('');
  const data = { currentVariant, previousVariant };

  const fns = { setCurrentVariant, setPreviousVariant };
  return { data, fns };
};

export default useTag;
