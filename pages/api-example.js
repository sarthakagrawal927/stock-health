import Layout from "../components/layout";

export default function Page() {
  return (
    <Layout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src='/api/examples/session' />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src='/api/examples/jwt' />

      <div className='bg-white dark:bg-gray-800'>
        <h1 className='text-gray-900 dark:text-white'>Dark mode is here!</h1>
        <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum...</p>
      </div>
    </Layout>
  );
}
