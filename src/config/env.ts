import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });
// Define env vars schema
const envVarsSchema = z.object({
  DATABASE_URL: z.coerce.string().describe('DATABASE_URL is required'),
});

// Validate env vars
const envVars = envVarsSchema.safeParse(process.env);

if (!envVars.success) {
  throw new Error(`Config validation error: ${envVars.error.message}`);
}
export default {
  DATABASE_URL: envVars.data.DATABASE_URL,
};
