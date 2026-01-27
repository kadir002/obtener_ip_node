import { buildApp } from "./app.js";
import { PORT } from "./config/env.js";

const app = buildApp();

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function shutdown(signal) {
  console.log(`Received ${signal}, shutting down.`);
  server.close((err) => {
    if (err) {
      console.error("Error closing server", err);
      process.exitCode = 1;
    }
    process.exit();
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));