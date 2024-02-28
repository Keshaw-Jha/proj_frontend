import React from "react";
import FormPage from "../Form";
import { Layout } from "../../components/Layout";

export default function Homepage() {
  return (
    <Layout>
      <div className="w-3/4 flex justify-center">
        <FormPage />
      </div>
    </Layout>
  );
}
