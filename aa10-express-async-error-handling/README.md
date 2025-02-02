# Practice: Express Async Error Handling

In this practice, you will explore two ways to handle errors from Promises in
order to handle asynchronous errors without locking the browser indefinitely.

## Getting started

Download starter. `cd` into __server__ folder, and install dependencies using
`npm install`.

Start the Express server in development mode using `npm run dev`.

Open your browser (e.g. Google Chrome), and go to
[http://localhost:5000][localhost].

You should see this response:

```json
{"message":"API server is running"}
```

## Explore existing code

Open and explore __server/app.js__. Notice the error handling middleware has
been coded to return a JSON response to any error. Also, there are two route
handlers

* Asynchronous route handler `/wait1sec` (`async`/`await` keywords)
* Route handler `/wait4me` utilizing the **Promise API** (`.then()`)

## Step 1: Experience the problem

In the browser, go to the address [http://localhost:5000/wait1sec][wait1sec].
Reload several times and watch what is happening both in the browser and the
terminal. There are two possible outcomes

* Spinner shows on the browser tab for 1 second, and the response in the browser
  is `{"message":"Wait complete"}`
* An error shows in the terminal (some lines omitted), and the loading spinner 
  shows indefinitely on the tab in the browser
```plaintext
(node:23117) UnhandledPromiseRejectionWarning: Error: A delay error has occurred!
    at Timeout._onTimeout (/express-async-error-handling-starter/server/modules/delay.js:12:20)
    at listOnTimeout (internal/timers.js:549:17)
    at processTimers (internal/timers.js:492:7)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:23117) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:23117) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

## Step 2: Solve the problem 

Stop the server (Control+c). Run the appropriate `npm` command to install the
package for handling Express asynchronous errors. Restart the server.

In __server/app.js__, require the package near the top of the file (before any
of the Express middleware functions).

Verify by refreshing the browser several more times until you see both possible 
responses (after a one-second wait each time).

* Success: `{"message":"Wait complete"}`
* Error: `{"error":"A delay error has occurred!"}`

## Step 3: Experience the problem again

Change the path in the browser to [http://localhost:5000/wait4me][wait4me].
Retry several times and watch what is happening both in the browser and the
terminal. Again, there are the same two outcomes.

* Spinner shows on the browser tab for 4 seconds and the response in the browser
  is `{"message":"I am here!"}`
* After 4 seconds, an error shows in the terminal (same as above), and the
  loading spinner on the browser tab shows indefinitely.

## Step 4: Solve the problem for the Promise API

...

In __server/app.js__, find the route handler for `/wait4me`.

Notice the use of the Promise API (`.then(...)`). Because the Promise API is in
use, a different approach is needed to catch the error.

Go ahead and add `.catch(next)` immediately after the closing parenthesis (`)`)
for `.then(...)`.

Back in your browser, refresh [http://localhost:5000/wait1sec][wait1sec] several
more times until you see both possible responses (after a four-second wait each
time).

* Success: `{"message":"I am here!"}`
* Error: `{"error":"A delay error has occurred!"}`

## The end

Congratulations! You have successfully handled asynchronous errors in two ways.


[localhost]: http://localhost:5000
[wait1sec]: http://localhost:5000/wait1sec
[wait4me]: http://localhost:5000/wait4me
