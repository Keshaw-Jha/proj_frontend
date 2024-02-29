import { HttpStatusCode } from "axios";
import { rest } from "msw";

// import { config } from "@/utils/app-config";

// const baseURL = config.env.API_BASE_URL;

export const handlers = [
  rest.post(`/submitForm`, async (req, res, ctx) => {
    console.log("req - ", req);
    return res(
      ctx.status(HttpStatusCode.Ok),
      ctx.json({
        data: {
          message: "form submit api received",
        },
      })
    );
  }),
];
