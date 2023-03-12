import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

  /*This function takes three arguments: the token to be verified, 
  the secret key used to sign the token, and a callback function that will be called with an error or a decoded token.*/
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Invalid Token"));
    req.user = user;
    next();
  });
};
