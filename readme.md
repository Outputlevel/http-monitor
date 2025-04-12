# HTTP Monitor

A simple server for monitoring HTTP requests via the terminal. It also sends a response back to the client.

## Endpoints

- `GET /`  
  Returns a friendly "Hello" message to confirm the server is running.

- `POST /api/monitor`  
  Logs the incoming HTTP request and responds with the request data.
