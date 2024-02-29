import { setupWorker } from "msw";

import { handlers as otpHandlers } from "./otpHandlers";
import { handlers as formHandlers } from "./formHandlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...otpHandlers, ...formHandlers);
