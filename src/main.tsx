import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Animation observer for scrolling elements into view
function AnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    // Observe all achievement and skill cards
    document.querySelectorAll('.achievement-card, .skill-card').forEach(card => {
      observer.observe(card);
    });

    return () => {
      // Clean up
      document.querySelectorAll('.achievement-card, .skill-card').forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AnimationObserver />
  </StrictMode>
);