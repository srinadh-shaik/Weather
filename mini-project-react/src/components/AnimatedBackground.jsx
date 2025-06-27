
import '../styles/AnimatedBackground.css';

export default function AnimatedBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}
    />
  ));
  
  return <div className="particles">{particles}</div>;
}
