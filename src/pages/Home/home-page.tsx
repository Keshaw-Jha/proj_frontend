import React from "react";
import FormPage from "../Form";
import { Layout } from "../../components/Layout";

export default function Homepage() {
  return (
    <Layout>
      <div className="sp:w-1/4 flex justify-center bg-white p-4 rounded-lg">
        <FormPage />
      </div>
    </Layout>
  );
}
