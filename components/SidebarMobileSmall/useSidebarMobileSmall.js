import React from "react";

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = {
  CollapsableClose: "CollapsableClose",
  CollapsableOpen: "CollapsableOpen",
};

const useSidebarMobileSmall = () => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions["CollapsableClose"]
  );
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const data = { currentVariant, isDialogOpen };
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const fns = { toggleDialog, setCurrentVariant };
  return { data, fns };
};

export default useSidebarMobileSmall;
