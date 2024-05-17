# Leonardo.ai Challenge

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/garthtrickett/leonardo-test.git
2. Add in .env (In real project this would not be here)
   ````sh
    TZ=UTC
    PORT=3333
    HOST=0.0.0.0
    LOG_LEVEL=info
    APP_KEY=2sfVe4L3PYsbnGd3t4WaCL5wXPvJCX7Y
    NODE_ENV=development
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=postgres
    DB_DATABASE=postgres
    SESSION_DRIVER=cookie

3. Build the docker images
   ```sh
   docker-compose build
   
4. Start the docker containers
   ```sh
   docker compose up

Run tests and endpoints
    ```sh
   docker exec -it leonardo-test-api-1 node ace test
   Available endpoints and how to call them are in the curls.txt file. Usually I would use an OPEN API documentation generator for this.






    


