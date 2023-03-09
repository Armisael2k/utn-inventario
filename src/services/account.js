import pool from "./pool";
import { sign } from "./user";
import { clientError, notFound, ok } from "./httpResponses";
import bcrypt from "bcryptjs";

const defaultPermissons = { //Permisos provicionales
  create_user: true,
  view_logs: true,
};

export async function get(username) {
  try {
    const [rows] = await pool.execute("SELECT * FROM users WHERE username = ? LIMIT 1", [username]);

    if ( !rows[0] )
      return notFound({
        message: "La cuenta no existe"
      });
    else
      return ok({
        account: rows[0]
      });
  } catch (err) {
    return clientError(err);
  }
}

export async function auth(username, password) {
  try {
    const result = await get(username);
    if ( result.statusCode !== 200 )
      return result;
    else if ( await bcrypt.compare(password, result.body.account.password) )
      return ok({
        token:  sign({...result.body.account, defaultPermissons}) //Permisos provicionales
      });
    else
      return notFound({
        message: "Credenciales invalidas"
      });
  } catch (err) {
    console.log(err.message);
    return clientError(err);
  }
}