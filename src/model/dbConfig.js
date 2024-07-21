import { JsonDB, Config } from "node-json-db";

export default db = new JsonDB(new Config("marcaPontoDB", true, false, "/"));

