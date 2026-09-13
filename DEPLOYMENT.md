# Deployment checklist

## Backend (Render or Railway)

1. Create a web service from the `Backend` directory.
2. Use `npm install` as the build command and `npm start` as the start command.
3. Add the values from `Backend/.env.example` in the host's environment-variable settings.
4. Set `CLIENT_URL` to the exact frontend URL. Multiple URLs can be comma-separated.
5. Confirm `https://your-backend-domain/health` returns `{ "status": "ok" }`.

## Frontend (Vercel or Netlify)

1. Deploy the `Frontend` directory.
2. Use `npm run build`; publish the `dist` directory if your host asks for it.
3. Set `VITE_BACKEND_URL` to the backend's public HTTPS URL, without a trailing slash.
4. The repository includes both `vercel.json` and `public/_redirects`, so direct links such as `/projects` resolve correctly on Vercel and Netlify.

## Before sharing

- Create a Gmail App Password for `EMAIL_PASS`; do not use your normal Gmail password.
- Ensure MongoDB Atlas allows connections from the backend host.
- Never commit `.env` files. Copy the provided `.env.example` files locally and fill in real values.
