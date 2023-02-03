import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignOut = () => {
  const { logout } = useAuth0();

  return (
    <button className=" text-white p-2 px-3 rounded-md bg-blue-900" onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173" } })}>
      Log Out
    </button>
  );
};

export default SignOut;