import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { LOG_FORMAT, TRUST_PROXY } from "./config/env.js";
import { getClientIp } from "./utils/getClientIp.js";

export function buildApp() {
  const app = express();

  app.set("trust proxy", TRUST_PROXY);
  app.disable("x-powered-by");

  app.use(helmet());
  app.use(morgan(LOG_FORMAT));

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.get("/ip", (req, res) => {
    const ip = getClientIp(req, TRUST_PROXY);
    res.status(200).json({ ip });
  });

  app.get("/", (req, res) => {
    res.status(200).json({
      name: "obtener-ip-service",
      endpoints: ["/ip", "/health"]
    });
  });

  return app;
}