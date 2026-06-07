import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const videoRef = useRef(null);
  const [roomCode, setRoomCode] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center', background: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h1>🍿 Better YT - Watch Together</h1>
      <div style={{ margin: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter Room Code" 
          value={roomCode} 
          onChange={(e) => setRoomCode(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: 'none' }}
        />
        <button style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', background: '#0070f3', color: '#fff', cursor: 'pointer' }}>Join Room</button>
      </div>
      <video 
        ref={videoRef} 
        controls 
        src="https://w3schools.com" 
        style={{ width: '80%', maxWidth: '800px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
      />
    </div>
  );
}
