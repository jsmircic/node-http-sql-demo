# Node http server connection to SQL Server DB

For testing docker compose and deploy to Azure App Service

## Getting started

1. Installed [nodeJS](https://nodejs.org/en/download/) on your machine (min ver 14 LTS or just use latest version)
2. Installed [git](https://git-scm.com/downloads) on your machine
3. Clone this repo

```bash
git clone https://github.com/jsmircic/node-http-sql-demo
```

4. Install dependencies

```bash
cd node-http-sql-demo
npm install
```

5. Setup SQL Server connection string
   open `.env` file and change `DATABASE_URL`, most likely you only need to set your sql server password

6. Create SQL Server database using prima CLI

```bash
npx prisma migrate dev
```

6. Build the project

```bash
npm run build
```

this will create `dist` folder with compiled javascript that is executed in node

7. Start the server

```bash
node ./dist/main.js
```

you should see message "Server is running on http://localhost:4000

```

```
