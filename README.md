# Docker Mini Stack

![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)

Stack mínimo **producción-ready** para demos:
- API Node/Express en imagen Docker
- Postgres 16 con healthchecks
- Compose con volúmenes y restart policy

## Arranque
```bash
docker compose up --build
```
- API: http://localhost:4080  
- Health: http://localhost:4080/health  
- Postgres: `localhost:5433` (user `juliana` / db `ministack`)

## Autora
**Juliana Chantre Astudillo** · [GitHub](https://github.com/jchantre-jpg)
