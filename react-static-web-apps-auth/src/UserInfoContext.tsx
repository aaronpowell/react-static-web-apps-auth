import React, { useContext, useEffect, useState } from "react";
import { AuthProviders } from "./types";

export type UserInfo = {
  identityProvider: undefined | AuthProviders;
  userId: string | undefined;
  userDetails: string | undefined;
  userRoles: string[];
};

const defaultUserInfo = {
  identityProvider: undefined,
  userId: undefined,
  userDetails: undefined,
  userRoles: [],
};

const UserInfoContext = React.createContext<UserInfo>(defaultUserInfo);

const UserInfoContextProvider = ({ children }: { children: JSX.Element }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);

  useEffect(() => {
    const run = async () => {
      const res = await fetch("/.auth/me");
      const json: { clientPrincipal: UserInfo | null } = await res.json();
      if (json.clientPrincipal) {
        setUserInfo(json.clientPrincipal);
      }
    };

    run();
  }, []);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};

const useUserInfo = () => useContext(UserInfoContext);

export { UserInfoContextProvider, useUserInfo };
