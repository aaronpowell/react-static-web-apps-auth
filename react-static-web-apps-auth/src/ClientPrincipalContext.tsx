import React, { useContext, useEffect, useState } from "react";
import { AuthProviders } from "./types";

export type ClientPrincipal = {
  identityProvider: AuthProviders;
  userId: string;
  userDetails: string;
  userRoles: string[];
};

export type ClientPrincipalContext = {
  loaded: boolean;
  clientPrincipal: ClientPrincipal | null;
};

const ClientPrincipalContext = React.createContext<ClientPrincipalContext>({
  loaded: false,
  clientPrincipal: null,
});

const ClientPrincipalContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [
    clientPrincipal,
    setClientPrincipal,
  ] = useState<ClientPrincipal | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/.auth/me");
        const json: {
          clientPrincipal: ClientPrincipal | null;
        } = await res.json();
        if (json.clientPrincipal) {
          setClientPrincipal(json.clientPrincipal);
        }
      } catch (e) {
        if (window.location.hostname === "localhost") {
          console.warn(
            "Can't access the auth endpoint. For local development, please use the Static Web Apps CLI to emulate authentication: https://github.com/azure/static-web-apps-cli"
          );
        } else {
          console.error(`Failed to unpack JSON.`, e);
        }
      }

      setLoaded(true);
    };

    run();
  }, []);

  return (
    <ClientPrincipalContext.Provider value={{ loaded, clientPrincipal }}>
      {children}
    </ClientPrincipalContext.Provider>
  );
};

const useClientPrincipal = () => useContext(ClientPrincipalContext);

export { ClientPrincipalContextProvider, useClientPrincipal };
