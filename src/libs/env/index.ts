import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const env = createEnv({
  server: {},
  client: {
    /** 環境 */
    VITE_APP_ENV: z.string(),
  },
  runtimeEnv: import.meta.env,
  clientPrefix: "VITE_",
});
