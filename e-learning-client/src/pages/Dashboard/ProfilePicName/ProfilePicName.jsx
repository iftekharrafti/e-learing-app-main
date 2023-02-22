import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProfilePicName = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`https://e-learning-app-i5dn.onrender.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user.email]);

  let userName = userInfo.name;
  let firstChars;
  if (userName) {
    firstChars = userName
      ?.split(" ")
      ?.map((word) => word.charAt(0).toUpperCase());
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
  }
  return (
    <div className="mb-5 d-flex align-items-center">
      <div
        className="d-flex justify-content-center align-items-center text-white"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "#3E64DE",
        }}
      >
        {firstChars ? (
          firstChars?.map((char, index) => <span>{char}</span>)
        ) : (
          <span> </span>
        )}
      </div>
      <div className="ms-4">
        <h4>Hello,</h4>
        <h5>{userName}</h5>
      </div>
    </div>
  );
};

export default ProfilePicName;
