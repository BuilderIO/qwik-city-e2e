import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";
import { manifest } from "@qwik-client-manifest";
import { createServer } from "node:http";

// Allow for dynamic port
const PORT = process.env.PORT ?? 3004;

// Create the Qwik City express middleware
const { router, notFound, staticFile } = createQwikCity({
  render,
  qwikCityPlan,
  manifest,
});

const server = createServer();

server.on("request", (req, res) => {
  staticFile(req, res, () => {
    router(req, res, () => {
      notFound(req, res, () => {});
    });
  });
});

/* eslint-disable */
console.log(`Server starter: http://localhost:${PORT}/app/`);

server.listen(PORT);
