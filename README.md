# Installation Commands

```bash
npm run install
```

After installing the dependencies, you should set the .env variables.

Sample structure for the `.env` file:

```
NEXT_PUBLIC_API_URL=""
NEXT_AUTH_SECRET=insights!@#site_Cookie12345
NEXT_PUBLIC_HOME_URL= (destination url for the website for instance https://beta.insights-dashboard.com)
```

You should create `.env.production` in the root directory of project:

`.env.production`

```
NEXT_PUBLIC_API_URL=""
NEXT_AUTH_SECRET=insights!@#site_Cookie12345
NEXT_PUBLIC_HOME_URL=""
```

## Running on the 3000 port!

By default project will be run on the `3000` port, you can change it with adding `NEXT_RUNNING_PORT` property in .env file.

```bash
npm run build
npm run start
```

After using these commands, project will be available on the `3000` port, you can serve it by pm2 or any tools you want.
