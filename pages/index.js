import Layout from "../components/layout";
import Select from "react-select";
const data = require("../stock_data/test.json");

export default function Page() {
  return (
    <Layout>
      <h1>Stock Health</h1>
      <Select options={data} instanceId='some random ID' isMulti />
    </Layout>
  );
}
