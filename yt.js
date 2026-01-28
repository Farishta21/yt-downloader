export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "YouTube URL missing" });
  }

  const API_KEY = "9f90690fbecea81b3e3b9fd2b8e7b53c571c121df4eba253b1b1a2ada30d49ed";

  const apiUrl =
    "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/ytapi" +
    `?url=${encodeURIComponent(url)}&fo=1&qu=360&apiKey=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API fetch failed" });
  }
}