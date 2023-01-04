import { NextApiRequest, NextApiResponse } from "next";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  // beenden des aktuellen benutzers aus dem vorschaumodus
  res.clearPreviewData({});
  // leiten den benutzer zur homepage
  // weiterleitung zu einer vorschaufähigen route
  res.writeHead(307, { Location: "/" });
  res.end();
}
