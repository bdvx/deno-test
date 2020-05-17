// @deno-types= "https://deno.land/x/types/react/v16.13.1/react.d.ts";
import React from "https://cdn.pika.dev/@pika/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";

const Books = () => (
    <>
        <ul>
            <li>DDD</li>
            <li>Clean Architecture</li>
        </ul>
    </>
)

export const page = ({}) =>{
    return `<!DOCTYPE html>
    ${ReactDOMServer.renderToString((
        <Books />
    ))}`

}

