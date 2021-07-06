import { useState, useEffect, useContext } from "react";
import { useSession } from "next-auth/client";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";
import App from "../components/app";
import { StocksContext, DispatchContext } from "../contexts";

export default function Page() {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout>
      <p>Welcome {session.user.name} !</p>
      <App />
    </Layout>
  );
}
