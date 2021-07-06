import { getProviders, signIn, getCsrfToken } from "next-auth/client";

export default function SignIn({ providers, csrfToken }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          {provider.name !== "Credentials" && (
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          )}
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers, csrfToken: await getCsrfToken(context) },
  };
}
