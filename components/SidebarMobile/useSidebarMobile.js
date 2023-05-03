import React from "react";

const variantOptions = {
  CollapsableClose: "CollapsableClose",
  CollapsableOpen: "CollapsableOpen",
};

const useSidebarMobile = () => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions["CollapsableClose"]
  );

  const data = { currentVariant };
  const toggleDialog = () => {};

  const fns = { toggleDialog, setCurrentVariant };
  return { data, fns };
};

export default useSidebarMobile;
