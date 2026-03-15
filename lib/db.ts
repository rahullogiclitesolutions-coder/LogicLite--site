import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "auth-db1404.hstgr.io",
  user: "u279145993_LogicLite",
  password: "Logiclite123",
  database: "u279145993_LjGoN",
});