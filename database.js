{
    "version": 2,
    "builds": [
      { "src": "index.js", "use": "@vercel/node" }
    ],
    "env": {
      "DATABASE_URL": "postgresql://cins_owner:******@ep-holy-dawn-a5rmvw2m-pooler.us-east-2.aws.neon.tech/cins?sslmode=require",
      "DATABASE_URL_UNPOOLED": "postgresql://cins_owner:******@ep-holy-dawn-a5rmvw2m.us-east-2.aws.neon.tech/cins?sslmode=require"
    }
  }
  