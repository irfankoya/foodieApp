import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
