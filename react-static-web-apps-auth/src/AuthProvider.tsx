import React from "react";

const AuthProvider = ({ name, id }: { name: string; id: string }) => {
  return (
    <a href={`/.auth/login/${id}`} className={`${id} azure-swa-auth`}>
      Sign in using {name}
    </a>
  );
};

export default AuthProvider;
