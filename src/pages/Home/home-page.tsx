import React from "react";
import FormPage from "../Form";
import { DialogTitle } from "@mui/material";

export default function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-1/4 text-center">
        <DialogTitle className="text-2xl font-bold mb-4">PRAVESH</DialogTitle>
        <FormPage />
      </div>
    </div>
  );
}
