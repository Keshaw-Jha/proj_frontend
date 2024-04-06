import { HttpStatusCode } from "axios";
import { rest } from "msw";
import { HomeFormData } from "../../model/HomeformData";
// import { config } from "@/utils/app-config";

// const baseURL = config.env.API_BASE_URL;

export const handlers = [
  rest.post(`/submitForm`, async (req, res, ctx) => {
    const resObj: HomeFormData = await req.json();
    resObj.ticketId = "1234";
    return res(ctx.status(HttpStatusCode.Ok), ctx.json(resObj));
  }),
  rest.get(`/`, async (req, res, ctx) => {
    return res(ctx.status(HttpStatusCode.Ok));
  }),
];
