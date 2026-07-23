# Omegle Video Chat Deployment

## Production Targets

Recommended setup:

- **Frontend**: Vercel, Netlify, or any static hosting provider.
- **Backend**: Render, Railway, Fly.io, or a VPS that supports long-lived Socket.IO connections.
- **Realtime protocol**: HTTPS plus WSS in production.
- **Optional TURN server**: Twilio, Metered, Xirsys, or self-hosted coturn for reliable peer connections.

Before deploying with Vercel CLI, upgrade it:

```bash
npm i -g vercel@latest
```

## Recommended Environment Variables

Frontend:

```bash
VITE_SOCKET_URL=
VITE_STUN_URL=
VITE_TURN_URL=
VITE_TURN_USERNAME=
VITE_TURN_CREDENTIAL=
```

Backend:

```bash
PORT=
CLIENT_ORIGIN=
```

The current code allows all origins. Before production, restrict CORS to the deployed frontend domain.

## Local Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Build locally:

```bash
npm run build
```

## Local Backend Setup

```bash
cd backend
npm install
npm run build
npm run start
```

For development:

```bash
npm run dev
```

The backend currently listens on port `3000`. Move this to `process.env.PORT` before production so hosting providers can assign ports.

## Frontend Deployment On Vercel

1. Import the repository.
2. Set root directory to `frontend`.
3. Install command:

```bash
npm install
```

4. Build command:

```bash
npm run build
```

5. Output directory:

```text
dist
```

6. Add frontend env vars, especially:

```bash
VITE_SOCKET_URL=wss://YOUR_BACKEND_DOMAIN
```

## Backend Deployment

For Render or Railway:

- Root directory: `backend`
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`
- Add `PORT` and `CLIENT_ORIGIN`

Use a host that supports websocket upgrades. Serverless-only static hosting is not enough for this backend.

## WebRTC Deployment Notes

For reliable video chat, add:

- STUN server config for peer discovery.
- TURN server config for users behind strict NATs.
- Signaling events for offer, answer, ICE candidate, leave, and reconnect.
- HTTPS on frontend and backend because browser media APIs require secure origins in production.

## External Services And API Keys

- Socket.IO backend hosting is required for realtime signaling.
- A STUN server is recommended for peer discovery.
- A TURN provider is recommended for reliable production calls.
- Neon, Supabase, Firebase, Google OAuth, Anthropic, and OpenAI are not used by the current code.

## Deployment Checklist

- Frontend build passes.
- Backend TypeScript build passes.
- Backend uses `process.env.PORT`.
- Socket CORS is restricted to the frontend domain.
- Frontend points to `wss://` backend URL.
- Camera and microphone permissions work on production domain.
- Two users can connect, match, leave, and reconnect.
