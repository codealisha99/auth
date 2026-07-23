# Omegle Video Chat Overview

## What This Project Does

Omegle Video Chat is a realtime video chat project with a Vite React frontend and a Socket.IO backend. The goal is to let users land on the app, enter a room or matching flow, connect through realtime signaling, and hold a browser-based video chat session.

## Main Features

- Landing page for starting a chat.
- Room screen for realtime interaction.
- Socket.IO client on the frontend.
- Socket.IO server on the backend.
- User manager and room manager classes.
- Backend connection and disconnect handling.
- TypeScript setup for both frontend and backend.

## Technology Stack

- **React 18**: Frontend UI.
- **Vite**: Frontend dev server and build tool.
- **TypeScript**: Typed frontend and backend code.
- **Socket.IO Client**: Browser realtime connection.
- **Socket.IO Server**: Backend signaling service.
- **Node.js**: Backend runtime.
- **CSS**: Project styling.

## Project Structure

- `frontend`: Vite React frontend.
- `frontend/src/components/Landing.tsx`: Start screen.
- `frontend/src/components/Room.tsx`: Chat room UI.
- `frontend/src/App.tsx`: Main app routing and composition.
- `backend`: Socket.IO backend.
- `backend/src/index.ts`: Backend entry point.
- `backend/src/managers/RoomManager.ts`: Room coordination.
- `backend/src/managers/UserManger.ts`: User tracking.

## Data Flow

1. A user opens the frontend.
2. The frontend connects to the Socket.IO backend.
3. The backend registers the user connection.
4. User and room manager classes track connected sockets.
5. Room events can be used to match users and exchange signaling data.
6. The frontend room screen presents the video chat experience.

## Current State

The project has a clean frontend/backend split and the beginning of the signaling server. To become a finished video chat app, it needs full WebRTC signaling events, matching logic, media permissions, reconnection behavior, moderation tools, and a deployment setup that supports persistent socket connections.
