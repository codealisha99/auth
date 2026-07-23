# Omegle Video Chat

A realtime random video chat app with a Vite React frontend and Socket.IO signaling backend.

![React](https://img.shields.io/badge/React-18-61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101)
![WebRTC](https://img.shields.io/badge/WebRTC-video-4B5563)

## Project Preview

The project includes a landing screen, room screen, Socket.IO frontend client, and backend managers for users and rooms.

Screenshots can be added in a future `screenshots/` folder:

- Landing page
- Waiting room
- Video chat room

## Features

- Vite React frontend.
- Socket.IO realtime backend.
- Room and user manager classes.
- Landing and room UI.
- TypeScript setup for frontend and backend.
- Foundation for WebRTC signaling and random matching.

## Tech Stack

- React
- Vite
- TypeScript
- Socket.IO
- Node.js
- WebRTC browser APIs

## Repository Structure

```text
frontend/   Vite React frontend
backend/    Socket.IO signaling backend
```

## Getting Started

Install and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

Install and run the backend:

```bash
cd backend
npm install
npm run build
npm run start
```

## Environment Variables

Recommended frontend variables:

```bash
VITE_SOCKET_URL=
VITE_STUN_URL=
VITE_TURN_URL=
VITE_TURN_USERNAME=
VITE_TURN_CREDENTIAL=
```

Recommended backend variables:

```bash
PORT=
CLIENT_ORIGIN=
```

## Documentation

- [Project Overview](./OVERVIEW.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Improvement Roadmap](./ROADMAP.md)

## Status

The frontend/backend split and Socket.IO foundation are in place. The next major step is completing WebRTC signaling, random matching, device controls, moderation, and production websocket deployment.
