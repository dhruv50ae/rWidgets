import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const onLocationChange = () => {
    console.log("first");
  };
  useEffect(() => {
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  });
  return window.location.pathname === path ? children : null;
};

export default Route;
