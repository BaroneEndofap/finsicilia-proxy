import fetch from "node-fetch";

export default async function handler(req, res) {
  const id = req.query.id;

  if (!id) {
    return res.status(400).send("Missing id");
  }

  const url = `https://www.finsicilia.it/schedaMan.php?id=${id}&sport=nuoto`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const html = await response.text();

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).send(html);

  } catch (err) {
    console.error(err);
    return res.status(500).send("Proxy error");
  }
}
