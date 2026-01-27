import dotenv from "dotenv";

dotenv.config();

const portRaw = process.env.PORT ?? "3000";
const PORT = Number.parseInt(portRaw, 10);
if (!Number.isInteger(PORT) || PORT <= 0) {
  throw new Error(`Invalid PORT: ${portRaw}`);
}

const TRUST_PROXY = (process.env.TRUST_PROXY ?? "false").toLowerCase() === "true";
const LOG_FORMAT = process.env.LOG_FORMAT ?? "combined";

export { PORT, TRUST_PROXY, LOG_FORMAT };