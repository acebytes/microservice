# Example Microservice in Node & Express

Initial code taken from tutorial at https://www.cuelogic.com/blog/microservices-with-node-js

This example app uses a free zip code API. Sign up for your free API key at http://www.zipcodeapi.com/Register


The original tutorial didn't provide routes for the Express app, so I added the routes. Also, the `Request` library has now been depreciated, so I have replaced it with `Got`.

I also have fixed typos from the original code, and added `dotenv` support.

## To Install & Run App:
1. Run `npm install`
2. Rename `.env.test` to `.env`
3. Paste your zip code API key in `.env` (no quotes).
4. Run  `node server`
