# Qwik City E2E Test App 🌃

![Qwik Logo](https://user-images.githubusercontent.com/452425/215131129-0ae8d7d8-3612-4fca-bdba-42137d8da75c.png)

Commits to this repo will trigger each [workflow](https://github.com/BuilderIO/qwik-city-e2e/tree/main/.github/workflows), which will build and test on each server. The Node workflow tests the `dev`, `preview` and `express` Nodejs servers.

The [package.json](https://github.com/BuilderIO/qwik-city-e2e/blob/main/package.json) npm installs the build artifacts committed to [qwik-build](https://github.com/BuilderIO/qwik-build) and [qwik-city-build](https://github.com/BuilderIO/qwik-city-build). Update the commit hash in version for the `dependencies` of `@builder.io/qwik` and `@builder.io/qwik-city`.

## External Servers

### Azure SWA

https://blue-smoke-0a7cdfe10.2.azurestaticapps.net/app/

### Cloudflare Pages

https://qwik-city-e2e.pages.dev/app/

### Netlify Edge

https://qwik-city-e2e.netlify.app/app/

### Vercel Edge

https://qwik-city-e2e.vercel.app/app/

## Node Servers

### Dev

    npm run dev
    http://127.0.0.1:3000/app/

### Preview

    npm run build.preview
    npm run serve.preview
    http://127.0.0.1:3001/app/

### Express

    npm run build.express
    npm run serve.express
    http://127.0.0.1:3002/app/
