# Obtener IP Service

Servicio HTTP en Node.js para obtener la IP del cliente.

## Requisitos
- Node.js 18+

## Configuracion
Copia el archivo `.env.example` a `.env` y ajusta los valores.

- `PORT`: Puerto de escucha (default 3000)
- `TRUST_PROXY`: `true` si estas detras de un proxy/reverse proxy
- `LOG_FORMAT`: formato de logs para morgan (default `combined`)

## Uso

```bash
npm install
npm run dev
```

### Endpoints
- `GET /ip` -> `{ "ip": "x.x.x.x" }`
- `GET /health` -> `{ "status": "ok" }`

## Produccion

```bash
npm start
```