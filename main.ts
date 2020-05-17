import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { page } from "./page.tsx";
const app = new Application();
const router = new Router();
app.addEventListener("error", (evt) => {
    // Will log the thrown error to the console.
    console.log(evt.error);
  });

router.get('/books', (ctx) => {
ctx.response.body = page({});

})
app.use(router.routes());

app.use((ctx)=>{
    ctx.response.status = 404 
    ctx.response.body = 'Page not found';
})
const controller = new AbortController();
const { signal } = controller;
// Add some middleware using `app.use()`
const listenPromise = app.listen({ port: 8000, signal });
// In order to close the sever...
//controller.abort();
// Listen will stop listening for requests and the promise will resolve...
await listenPromise;
// and you can do something after the close to shutdown