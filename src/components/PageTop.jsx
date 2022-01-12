import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default PageTop;