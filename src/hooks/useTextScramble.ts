import { useEffect, useRef, useCallback, createElement } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export function useTextScramble(
  text: string,
  options: {
    duration?: number;
    delay?: number;
    trigger?: 'hover' | 'scroll' | 'immediate';
    scrambleSpeed?: number;
  } = {}
) {
  const {
    duration = 1,
    delay = 0,
    trigger = 'scroll',
    scrambleSpeed = 30,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const scramble = useCallback(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    hasAnimated.current = true;
    const originalText = text;
    const length = originalText.length;
    let iteration = 0;

    const interval = setInterval(() => {
      element.innerText = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      iteration += length / (duration * 1000 / scrambleSpeed);

      if (iteration >= length) {
        clearInterval(interval);
        element.innerText = originalText;
      }
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, duration, scrambleSpeed]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (trigger === 'immediate') {
      const timer = setTimeout(scramble, delay * 1000);
      return () => clearTimeout(timer);
    }

    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              setTimeout(scramble, delay * 1000);
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }

    if (trigger === 'hover') {
      const handleMouseEnter = () => scramble();
      element.addEventListener('mouseenter', handleMouseEnter);
      return () => element.removeEventListener('mouseenter', handleMouseEnter);
    }
  }, [scramble, trigger, delay]);

  return elementRef;
}

// Component version for easier use
interface TextScrambleProps {
  text: string;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  duration?: number;
  delay?: number;
  trigger?: 'hover' | 'scroll' | 'immediate';
  scrambleSpeed?: number;
}

export function TextScramble({
  text,
  className = '',
  as = 'span',
  duration = 1,
  delay = 0,
  trigger = 'scroll',
  scrambleSpeed = 30,
}: TextScrambleProps) {
  const elementRef = useTextScramble(text, {
    duration,
    delay,
    trigger,
    scrambleSpeed,
  });

  return createElement(
    as,
    {
      ref: elementRef,
      className,
      'data-scramble-text': text,
    },
    text
  );
}
