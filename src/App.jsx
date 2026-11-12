
import LiquidGlass from 'simple-liquid-glass';
import { LiquidGlassScene } from 'simple-liquid-glass/backdrop';
import './App.css';

export default function App() {
  return (
    <LiquidGlassScene>
      <main className="page-content">
        <h1>Liquid Glass</h1>
        <p>Move the glass panel over the content.</p>

        <div className="demo-cards">
          {Array.from({ length: 12 }, (_, i) => (
            <div className="demo-card" key={i}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h2>Explore the effect</h2>
              <p>Background details should remain visible.</p>
            </div>
          ))}
        </div>
      </main>

      <LiquidGlass
        radius={28}
        lensProfile="track"
        lensOptions={{ strength: 0.1 }}
        style={{
          position: 'fixed',
          top: 24,
          left: 20,
          right: 20,
          height: 76,
          zIndex: 10,
        }}
      >
        <nav className="glass-nav">
          <strong>Liquid</strong>
          <span>Home</span>
          <span>Projects</span>
          <span>About</span>
        </nav>
      </LiquidGlass>
    </LiquidGlassScene>
  );
}
