// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { signInWithEmailPassword } from "@core/user/sign-in-with-email-password";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await signInWithEmailPassword(req.body.email, req.body.password);
  res.status(200).json(user);
}
