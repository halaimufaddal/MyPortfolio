# Mufaddal Halai – Portfolio (MERN)

React (Vite) frontend + Express/MongoDB backend for the contact form.

## Run locally
```bash
# backend
cd backend
cp .env.example .env      # then fill in MONGODB_URI
npm install
npm run dev               # http://localhost:5300

# frontend (new terminal)
cd frontend
npm install
npm run dev               # http://localhost:5173
```

## Environment variables
| Where | Name | Purpose |
|-------|------|---------|
| backend | `MONGODB_URI` | MongoDB Atlas connection string |
| backend | `CLIENT_URL` | Deployed frontend URL(s) allowed by CORS (comma-separated) |
| backend | `PORT` | Set automatically by most hosts |
| frontend | `VITE_API_URL` | Deployed backend URL (no trailing slash) |

## Customise
- Add your photo as `frontend/public/profile.jpg`
- Add project screenshots in `frontend/public/images/` and set `image`, `github`, `live` in `Project.jsx`
- Set `INSTAGRAM_URL` in `Home.jsx` and `Footer.jsx` (or leave empty to hide it)
