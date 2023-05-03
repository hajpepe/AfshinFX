import { useState } from "react";

const useMenuDesktop = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  let data = { isDialogOpen };
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  let fns = { toggleDialog };
  return { data, fns };
};

export default useMenuDesktop;
