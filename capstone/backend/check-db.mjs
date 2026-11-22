import { pool } from "./src/db.js";

const [info] = await pool.query(
  "SELECT DATABASE() AS db, @@port AS port, @@hostname AS host, @@version AS version",
);
console.log(info[0]);
const [tables] = await pool.query("SHOW TABLES");
console.log(
  tables.length + " tables:",
  tables.map((t) => Object.values(t)[0]).join(", "),
);
process.exit();
