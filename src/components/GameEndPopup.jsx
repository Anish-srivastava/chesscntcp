import React from 'react'

export default function GameEndPopup({ open, message, onClose, onNewGame }) {
  if (!open) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      <div style={{
        background: '#fff',
        padding: '32px',
        borderRadius: '16px',
        maxWidth: '420px',
        width: '90%',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        animation: 'popup-appear 0.3s ease-out'
      }}>
        <h1 style={{ 
          marginTop: 0,
          fontSize: '28px',
          color: '#333',
          marginBottom: '8px'
        }}>
          🎉 Congratulations!
        </h1>
        <h2 style={{
          fontSize: '20px',
          color: '#666',
          fontWeight: 500,
          marginBottom: '24px',
          marginTop: 0
        }}>
          {message}
        </h2>
        <div style={{ 
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
          <button onClick={onClose} style={{
            padding: '12px 24px',
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            background: '#fff',
            color: '#666',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minWidth: '140px'
          }}>
            GAME OVER
          </button>
          <button onClick={onNewGame} style={{
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            background: '#4CAF50',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minWidth: '140px',
            boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)'
          }}>
            NEW GAME
          </button>
        </div>
      </div>
      <style>
        {`
          @keyframes popup-appear {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          button:hover {
            transform: translateY(-1px);
          }
          button:active {
            transform: translateY(1px);
          }
        `}
      </style>
    </div>
  )
}
