import { HttpStatusCode } from "axios";
import { rest } from "msw";


// import { config } from "@/utils/app-config";

// const baseURL = config.env.API_BASE_URL;
const baseURL = "www";

export const handlers = [
  rest.post(`${baseURL}/otp`, async (req, res, ctx) => {
    return res(
      ctx.status(HttpStatusCode.Ok),
      ctx.json({
        otp: "1234",
      })
    );
  }),
];
