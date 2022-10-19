import { App } from "./config/index";

async function main() {
  const app = new App(3001);
  await app.listen();
}

main();
