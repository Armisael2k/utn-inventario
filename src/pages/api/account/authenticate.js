import { auth } from "@/services/account";
import { clientError, ok } from "@/services/httpResponses";
import response from "@/services/response";

export default async function handler(req, res) {
  try {
    const { username, password } = req.body;
    const result = await auth(res, username, password);
    if (result.statusCode !== 200)
      return response(res, result);
    else
      return response(res, ok({
        token: result.body.token,
        message: "Logeo exitoso"
      }));
  } catch (err) {
    console.log(err.message);
    return response(res, clientError(err));
  }
}