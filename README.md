<<<<<<< HEAD
# Basic Phase 1: Initialize an Express Application

In this phase, you will create a new Express project and initialize an Express
application to listen for requests on a port. You will also return a simple
text response on the `/status` route.

## Create a new Express project

`cd` into the __server__ directory after creating it.

Add a `package.json` file by running the following command:

```shell
npm init -y
```

Install the following dependencies using the command `npm install`:

- `express`

Install the following development dependencies using the command
`npm install -D`:

- `nodemon`

## Create an Express application

Create a file called __app.js__ inside of your __server__ folder.

Initialize an Express application inside that file.

## Establish listener

Create a `port` variable and set it to a desired port for your Express
application like `5000`.

Allow the initialized Express application to listen for requests at the port
you set to the `port` variable. Your application should log something like
`"Server is listening on port <port number>"` when the server successfully
connects to the port.

## Add scripts to start the server

Create a script in the __package.json__ file to start the server in production
using `node`. The script can be named "start".

Create another script to start the server in development using the `nodemon`
package. `nodemon` allows the server to automatically restart whenever any
server files get updated. This script can be called "dev".

## Test your server

Start your server in development using one of the _package.json_ scripts.

Check to see if you set things up correctly by navigating to the appropriate
URL for accessing the root URL for the Express server in the browser.

You should see the generic Express error message of `Cannot GET /` because you
have not created a route handler for `GET /` yet.

## Make route with text response

Create a route handler for the GET protocol at the route `/status`. Send a plain
text response using `res.send()` with text like "The server is alive!".

Test your new route in the browser by adding `/status` after the port number in
the address bar.

If all is working properly, your browser will show

```plaintext
The server is alive!
```
=======
# Practice: Express Route Handlers

In this practice, you will create an Express server with basic Express routes.

Follow the steps outlined below to complete both phases:

- Handle JSON In Request (Basic)
- Create Route Handlers (Basic)

## Getting started

Download the starter. When you open it, you'll find there is a very simple
__app.js__ file that is only the setup of an Express application.

Also, there is a folder, __seeds__ that contain seed data for three entities:
artists, albums, and songs. You will be creating API endpoints for these
entities later in this practice.

The __data.js__ file exports multiple functions that execute different
actions on the three entities with varying parameters. You will use these
functions in the route handlers that you will create later in this practice
(phase 2).

## Basic Phase 1: Handle JSON In Request

In this phase, you will take a plain-text server and enhance it to an API 
server which can send and receive JSON-formatted content.

### Parse the JSON body of a request

There's one more piece of boilerplate code necessary to finish the setup of
your Express API server.

Your Express API server should expect to accept requests with bodies with a
`Content-Type` of `application/json`. When it does, it should deserialize the
JSON in the request body. To do this, add this one line of code right **after
the code that initializes the Express application**.

```js
app.use(express.json());
```

Now, any body in a request that is made with a `Content-Type` header of
`application/json` will be deserialized and saved to the `body` property on the
request object, `req.body`.

For example, if the server accepts a request with a JSON body of:

```json
{
  "hello": "world"
}
```

the request object generated by the Express server will have the deserialized
body saved to the `body` property.

```js
// req.body = {
//   hello: "world"
// };
```

### Test a JSON request

To test this set up, add these lines of code right after
`app.use(express.json())`.

```js
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});
```

Then start the server and use Postman to make a request to `POST /` with any
JSON body. You should see the body contents logged to the server console. If you
see `Request Body: undefined`, then you set the boilerplate code incorrectly.
Please review the setup.

## Basic Phase 2: Create Route Handlers

In this phase, you will create endpoints in the Express server.

Using the following API documentation, create Express route handlers in the
__app.js__ file. Use Postman to test each route as you write it.

The actions that need to be executed in the endpoints are all exported from the
__data.js__ file. In a route handler specific to each endpoint, you should send
a JSON response of the serialized data returned from the referenced function.
For example, to return a JSON array of all artists in the server data for a
request to `GET /artists`, you should use the data from `getAllArtists()`
function exported from the __data.js__ file.

### Get all the artists

Request components:

- Method: GET
- URL: /artists
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the artists
  (returned from `getAllArtists()` function exported from __data.js__)

  ```json
  [
    {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  ]
  ```

Run `npm test test/01-specs.js` to make sure you set this endpoint correctly.

### Add an artist

Request components:

- Method: POST
- URL: /artists
- Headers:
  - Content-Type: application/json
- Body: information about the artist to be created

  ```json
  {
    "name": "Led Zeppelin"
  }
  ```

Response components:

For setting the status code to `201` instead of the default `200`, call
`res.status(201)` in the route handler before you send the response.

- Status Code: 201
- Headers:
  - Content-Type: application/json
- Body: information about the newly created artist
  (returned from `addArtist(data)` function exported from __data.js__)

  ```json
  {
    "artistId": 2,
    "name": "Led Zeppelin"
  }
  ```

Run `npm test test/02-specs.js` to make sure you set this endpoint correctly.
>>>>>>> 9b464b8 (Initial commit)
