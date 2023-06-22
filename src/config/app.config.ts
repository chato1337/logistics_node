require('dotenv').config();

export const config = {
    dbName: process.env.DATABASE_NAME || 'env_error',
    dbUser: process.env.DATABASE_USER || 'env_error',
    dbHost: process.env.DATABASE_HOST || 'env_error',
    dbPassword: process.env.DATABASE_PASS || 'env_error',
    port: process.env.APP_PORT || 'env_error',
}
