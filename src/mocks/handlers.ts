import { rest } from "msw";
import { createCRUDHandlers } from "./utils";

export const handlers = createCRUDHandlers("task", []);
