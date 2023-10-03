import { z } from 'zod';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  GITHUB_REDIRECT_URI: z.string(),
  FRONTEND_URL: z.string(),
});

envSchema.parse(process.env);
console.log("Checked env vars !!");