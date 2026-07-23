# Omegle Video Chat Roadmap

## Immediate Polish

- Fix backend server creation so it attaches Express correctly.
- Move backend port and CORS origin into environment variables.
- Add frontend `.env.example` and backend `.env.example`.
- Add visible socket connection states: connecting, connected, disconnected, reconnecting.
- Add camera and microphone permission handling.
- Add loading and error states for joining a room.

## Product Features

- Add one-click random matching.
- Add next, leave, mute, camera off, and report controls.
- Add room IDs for private chats.
- Add text chat alongside video.
- Add waiting room state while searching for a partner.
- Add user count and queue count.
- Add moderation and report handling.
- Add blocklist or cooldown for abusive users.

## WebRTC Completion

- Add signaling events for offer, answer, ICE candidate, and peer disconnect.
- Add frontend peer connection setup.
- Add STUN and TURN server configuration.
- Add reconnection handling when socket or peer connection drops.
- Add cleanup for media tracks when leaving a room.
- Add fallback messages for browser incompatibility.

## Production Readiness

- Add tests for room manager and user manager behavior.
- Add backend logs for connect, match, disconnect, and error events.
- Add rate limits for reconnect and match requests.
- Add health check endpoint for hosting platforms.
- Add monitoring for active sockets and failed matches.
- Add CI for frontend build and backend build.
- Add security review for CORS, room events, and user input.

## UI/UX Improvements

- Make the landing page focused on one clear action: start chat.
- Add permission preview before asking for camera and microphone access.
- Show local video before matching.
- Use clear controls with labels and disabled states.
- Add mobile layout that keeps video visible above controls.
- Add friendly empty states when no partner is available.

## Step-by-Step Priority

1. Fix backend server startup and env configuration.
2. Add real WebRTC signaling events.
3. Build random matching and leave/next flow.
4. Add media permission and device controls.
5. Add TURN support for reliable production calls.
6. Add moderation and reporting.
7. Add tests, logs, and deployment health checks.
