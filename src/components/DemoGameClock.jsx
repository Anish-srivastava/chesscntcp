import React, { useState } from 'react'
import ChessClock from '../ChessClock'

// Simple demo wrapper for the ChessClock component.
// Use this to quickly test timer behavior and perspective switching.
export default function DemoGameClock() {
  const [currentPlayer, setCurrentPlayer] = useState('w')
  const [gameStarted, setGameStarted] = useState(false)
  const [perspective, setPerspective] = useState('white')
  const [initialMinutes, setInitialMinutes] = useState(0.1) // quick demo: 6 seconds
  const [message, setMessage] = useState('')

  function toggleStart() {
    setMessage('')
    setGameStarted((s) => !s)
  }

  function makeMove() {
    // flip turn
    const next = currentPlayer === 'w' ? 'b' : 'w'
    setCurrentPlayer(next)
    // optimistic event so ChessClock can react immediately
    window.dispatchEvent(new CustomEvent('move-made', { detail: { currentPlayer: next } }))
  }

  function handleTimeout(loser) {
    setMessage(`${loser === 'w' ? 'White' : 'Black'} ran out of time`)
    setGameStarted(false)
  }

  return (
    <div style={{ padding: 16 }}>
      <h3>Demo Chess Clock</h3>
      <div style={{ marginBottom: 8 }}>
        <label>
          Initial minutes:&nbsp;
          <input
            type="number"
            step="0.1"
            min="0.01"
            value={initialMinutes}
            onChange={(e) => setInitialMinutes(Math.max(0.01, parseFloat(e.target.value) || 0.01))}
            style={{ width: 80 }}
          />
        </label>
        <label style={{ marginLeft: 16 }}>
          Perspective:&nbsp;
          <select value={perspective} onChange={(e) => setPerspective(e.target.value)}>
            <option value="white">White (bottom)</option>
            <option value="black">Black (bottom)</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: 8 }}>
        <button onClick={toggleStart}>{gameStarted ? 'Stop' : 'Start'}</button>
        <button onClick={makeMove} style={{ marginLeft: 8 }}>Make Move (flip turn)</button>
        <button
          onClick={() => {
            setCurrentPlayer('w')
            window.dispatchEvent(new CustomEvent('move-made', { detail: { currentPlayer: 'w' } }))
          }}
          style={{ marginLeft: 8 }}
        >
          Set White to move
        </button>
        <button
          onClick={() => {
            setCurrentPlayer('b')
            window.dispatchEvent(new CustomEvent('move-made', { detail: { currentPlayer: 'b' } }))
          }}
          style={{ marginLeft: 8 }}
        >
          Set Black to move
        </button>
      </div>

      <div style={{ border: '1px solid #ddd', padding: 12, display: 'inline-block' }}>
        <ChessClock
          gameStarted={gameStarted}
          currentPlayer={currentPlayer}
          isGameOver={false}
          onTimeOut={handleTimeout}
          isLocal={true}
          localPlayer={currentPlayer}
          initialTimeMinutes={initialMinutes}
          gameId={`demo-${String(initialMinutes)}`}
          perspective={perspective}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        <strong>Current player:</strong> {currentPlayer === 'w' ? 'White' : 'Black'}<br />
        <strong>Message:</strong> {message}
      </div>
    </div>
  )
}
