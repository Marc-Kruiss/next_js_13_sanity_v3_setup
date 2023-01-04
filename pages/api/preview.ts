import { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  // wir setzen unsere preview daten auf ein leeres objekt
  // aktivieren sie den vorschaumodus durch setzen der cookies
  res.setPreviewData({});
  // leiten den benutzer zur homepage
  // weiterleitung zu einer vorschaufähigen route
  res.writeHead(307, { Location: "/" });
  res.end();
}
