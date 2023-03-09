import { sign as JWTSign } from "jsonwebtoken";
import auth from "@/configs/auth";

export function sign(account) {
  return JWTSign(
    { id: account.id, username: account.username, permissions: account.permissions },
    auth.secretKey,
    {
      subject: account.username,
      expiresIn: auth.expiresIn,
    }
  );
}