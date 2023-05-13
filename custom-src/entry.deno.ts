import { createQwikCity } from "@builder.io/qwik-city/middleware/deno";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";

const port = Number(Deno.env.get("PORT") ?? 3009);

const { router, notFound, staticFile } = createQwikCity({
  render,
  qwikCityPlan,
  manifest,
});

const server = Deno.listen({ port });

console.log(`Server starter: http://localhost:${port}/app/`);

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: any) {
  const httpConn = Deno.serveHttp(conn);

  for await (const requestEvent of httpConn) {
    const staticResponse = await staticFile(requestEvent.request);
    if (staticResponse) {
      requestEvent.respondWith(staticResponse);
      continue;
    }

    const qwikCityResponse = await router(requestEvent.request);
    if (qwikCityResponse) {
      requestEvent.respondWith(qwikCityResponse);
      continue;
    }

    requestEvent.respondWith(notFound(requestEvent.request));
  }
}

declare const Deno: any;
