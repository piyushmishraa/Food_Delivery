import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const[OnlineStatus,setOnlinestatus]=useState(true);
    useEffect(()=>{
      
        window.addEventListener("online", () => {
              setOnlinestatus(true);
          });

          window.addEventListener("offline", () => {
            setOnlinestatus(false);
        });
      

    },[])


    return OnlineStatus;
};

export default useOnlineStatus;
