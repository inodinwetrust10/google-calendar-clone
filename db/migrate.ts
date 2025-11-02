import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const sqlite = new Database("./db/sqlite.db");
const db = drizzle(sqlite);

async function main() {
  console.log("Running migrations...");
  migrate(db, { migrationsFolder: "./db/migrations" });
  console.log("Migrations completed!");
  sqlite.close();
}

main().catch((err) => {
  console.error("Migration failed!");
  console.error(err);
  process.exit(1);
});
