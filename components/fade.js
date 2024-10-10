// Adapted from https://github.com/WoshuaJolk/text-fade-in/blob/main/.yalc/text-fade-in/dist/index.esm.js
import React from 'react'

const FadeIn = ({
  children,
  lines = false,
  className = '',
  style = {},
  blur = '10px',
  distance = '20px',
  duration = '0.5s'
}) => {
  React.useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in .fade-in-element')
    fadeElements.forEach((element, index) => {
      element.style.setProperty('--delay', `${1 + index * 0.05}s`)
    })
  }, [children])

  const fullText = React.Children.toArray(children)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
  const fadeContainerStyle = {
    // display: 'inline-block',
    '--blur': blur,
    '--distance': distance,
    '--duration': duration,
    ...style
  }

  const keyframesStyle = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
        filter: blur(var(--blur));
        transform: translateY(var(--distance));
      }
      100% {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      .fade-in-element {
        animation-name: fadeIn;
        animation-duration: var(--duration);
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
        animation-delay: var(--delay);
        display: inline-block;
        --delay: 0.125s;
      }
    }
  `

  const splitText = () => {
    if (lines) {
      const lineElements = React.Children.toArray(children)
      return lineElements.map((line, index) => (
        <span key={index} className="fade-in-element" role="text">
          {line}
          <br />
        </span>
      ))
    } else {
      const text = React.Children.toArray(children).join('')
      const words = text.split(' ').filter((word) => word !== '')
      return words.map((word, index) => (
        <span key={index} className="fade-in-element" role="text">
          {word}&nbsp;
        </span>
      ))
    }
  }

  return (
    <div
      className={`fade-in ${className}`}
      style={fadeContainerStyle}
      aria-label={fullText}
    >
      <style>{keyframesStyle}</style>
      {splitText()}
    </div>
  )
}

export default FadeIn
