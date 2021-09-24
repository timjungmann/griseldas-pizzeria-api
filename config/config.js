import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { env } from 'process';
import { fileURLToPath } from 'url';

// * CHECK ENVIRONMENT

const __dirname = dirname(fileURLToPath(import.meta.url))

// on PROD always load .env
if(process.env.NODE_ENV == 'production'){
  dotenv.config(); //* => loads regular .env file
}
// on DEV load .development.env
else {
  let envPath = path.join(__dirname, '..', '.development.env');
  if(fs.existsSync(envPath)){
    dotenv.config({path: envPath}) //* => loads .development.env file
  } else dotenv.config();
}

const config = {
  env: env.NODE_ENV || 'development',
  frontendOrigin: env.FRONTEND_ORIGIN_DEV || env.FRONTEND_ORIGIN_PROD,
  mongooseUrl: env.MONGOOSE_DB_DEV || env.MONGOOSE_DB_PROD
}

export default config;