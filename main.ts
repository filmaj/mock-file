import { serve } from "https://deno.land/std@0.144.0/http/mod.ts";
import { DB } from "https://deno.land/x/sqlite@v3.4.0/mod.ts";

import { prepareLocalFile, prepareVirtualFile } from "./mod.ts";

await prepareLocalFile("./db.sqlite");
prepareVirtualFile("./db.sqlite-journal");

// read db
const db = new DB("./db.sqlite", { mode: "read" });

// very simple server
serve(() => Response.json(db.query("SELECT * FROM people")));
