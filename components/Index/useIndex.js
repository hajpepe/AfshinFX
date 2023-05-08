import  { useState, useEffect } from 'react';
import useIndexResponsiveSize from './useIndexResponsiveSize';

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = {
  IndexDesktop1080: 'IndexDesktop1080',
  Indextablet1024: 'Indextablet1024',
  Indextablet720: 'Indextablet720',
  IndexMobile390: 'IndexMobile390',
  Indexmobile375: 'Indexmobile375',
};

const useIndex = () => {
  const [currentVariant, setCurrentVariant] = useState(
    variantOptions['IndexDesktop1080']
  );

  const breakpointsVariant = useIndexResponsiveSize();

  useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  }, [breakpointsVariant]);

  const data = { currentVariant };

  const fns = { setCurrentVariant };
  return { data, fns };
};

export default useIndex;
