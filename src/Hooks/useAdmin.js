import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [userInfo, setUserInfo] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setUserInfo(data);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [userInfo, isAdminLoading];
};

export default useAdmin;
