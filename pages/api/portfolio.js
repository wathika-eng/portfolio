import fs from "fs";
import { join } from "path";

export default function handler(req, res) {
  const portfolioData = join(process.cwd(), "/data/portfolio.json");

  // Disallow non-localhost requests for write operations
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  const isLocalhost = (h) => {
    if (!h) return false;
    return h.includes('localhost') || h.startsWith('127.') || h === '::1';
  };

  if (!isLocalhost(host)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (process.env.NODE_ENV === "development") {
    if (req.method === "POST") {
      fs.writeFileSync(
        portfolioData,
        JSON.stringify(req.body),
        "utf-8",
        (err) => console.log(err)
      );
    } else {
      res
        .status(200)
        .json({ name: "This route works in development mode only" });
    }
  }
}
