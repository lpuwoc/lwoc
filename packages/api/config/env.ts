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
});

envSchema.parse(process.env);


console.log("Checked env vars !!");