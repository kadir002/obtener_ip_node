import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { LOG_FORMAT, TRUST_PROXY } from "./config/env.js";
import { getClientIp } from "./utils/getClientIp.js";


const basePath = process.env.CONTEXT_PATH ?? "/cfgbuss";
const router = express.Router();

export function buildApp() {
  const app = express();

  app.set("trust proxy", TRUST_PROXY);
  app.disable("x-powered-by");

  app.use(helmet());
  app.use(morgan(LOG_FORMAT));

  router.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  router.get("/ip", (req, res) => {
    const ip = getClientIp(req, TRUST_PROXY);
    res.status(200).json({ ip });
  });

  router.get("/", (req, res) => {
    res.status(200).json({
      name: "obtener-ip-service",
      endpoints: ["/ip", "/health"]
    });
  });

  app.use(basePath, router);

  return app;
}