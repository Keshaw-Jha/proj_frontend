import FormPage from "../Form";
import { Layout } from "../../components/Layout";

export default function Homepage() {
  return (
    <Layout>
      <div className="w-3/5 z-0 max-w-[900px] flex justify-center  rounded-2xl bg-stone-100  bg-opacity-75 shadow-stone-500 shadow-2xl">
        <FormPage />
      </div>
    </Layout>
  );
}
