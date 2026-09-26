const express = require("express");
const app = express();
const PORT = process.env.PORT || 4080;

const startedAt = new Date().toISOString();

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "docker-mini-stack",
    startedAt,
    uptimeSec: Math.round(process.uptime()),
  });
});

app.get("/", (_req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Mini Stack</title>
<style>body{font-family:system-ui;background:#0b1220;color:#e8eefc;display:grid;place-items:center;min-height:100vh;margin:0}
main{max-width:420px;padding:2rem;border:1px solid #24314d;background:#121a2e}
h1{margin:0 0 .5rem;letter-spacing:-.03em}p{color:#9bb0d0;line-height:1.5}
code{background:#1a243c;padding:.15rem .4rem}</style></head>
<body><main>
<h1>Docker Mini Stack</h1>
<p>API en contenedor + Postgres en Compose. Health: <code>/health</code></p>
</main></body></html>`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
