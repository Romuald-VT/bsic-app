import postgres from "postgres";

const url = process.env.DB_URL || 'postgresql://neondb_owner:npg_VWEum7yJ9qvz@ep-hidden-haze-adqai7l8-pooler.c-2.us-east-1.aws.neon.tech/bsic-db?sslmode=require&channel_binding=require'
if (!url) {
  throw new Error("DATABASE_URL environment variable is not set");
}
const sql = postgres(url,{
    port:5432,
    host:process.env.DB_HOST,
});

export default sql;