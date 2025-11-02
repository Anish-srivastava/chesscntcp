ChessClock integration notes

This file summarizes how to integrate the new `ChessClock` component into your existing game.

Props summary
- gameStarted (bool): when true, clocks will run if this client owns the active side.
- currentPlayer ('w'|'b'): authoritative side to show as active (passed from Game.js / Firestore).
- isGameOver (bool): when true the ticking loop stops.
- onTimeOut (fn): called with 'w' or 'b' when a clock hits zero. Your game should handle result recording.
- isLocal (bool): enable local multi-tab mode (uses localStorage)
- localPlayer ('w'|'b' or null): which color this client controls; if provided, only this client will decrement its side when active.
- initialTimeMinutes (number): initial minutes per player.
- gameId (string): used as localStorage key prefix when isLocal=true.
- gameRef (Firestore doc ref): optional; if provided the clock listens to snapshots and periodically writes times.
- perspective ('white'|'black'): controls which color is rendered at the bottom for the local UI.

Integration tips
1. Pass `currentPlayer` from your game state (GameApp already does this). The clock will switch active side automatically.
2. Pass `localPlayer` set to the user's color (your code uses `position` for this). This ensures only that client ticks its side.
3. Provide an `onTimeOut` callback that calls your existing `endGameByTimeout` or `updateGame` logic to mark the result in Firestore.
4. For correct top/bottom layout per your requirements (white bottom on White's tab, black bottom on Black's tab), pass `perspective={'white'}` for local White player and `perspective={'black'}` for local Black player. `GameApp.jsx` has been updated to pass this automatically.

Testing
- Use the included `src/components/DemoGameClock.jsx` to exercise the clock locally without Firebase. It supports starting/stopping the clock, flipping turns, and switching perspectives.
- For multi-tab local testing, open two windows, set `isLocal=true` and ensure one tab owns ticking. The basic owner election ensures only a single tab will drive ticks.

Notes about robustness
- Browser background tabs may throttle requestAnimationFrame and cause delayed UI updates. For stronger guarantees, use server-authoritative timing (persist lastTick timestamps and reconcile elapsed time on snapshot arrival). I can help add that if you want.

