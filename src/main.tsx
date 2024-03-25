import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { worker } from "./mocks/api/browser.ts";

async function enableMocking() {
  if (process.env.API_URL == "") return worker.start();
  return;
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
});
