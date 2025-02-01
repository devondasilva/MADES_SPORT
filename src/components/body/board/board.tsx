import React, { useState, useEffect, useRef } from 'react';

interface BannerProps {
  title: string;
  content?: string;
  imageLink: string;
  children?: React.ReactNode;
}

const Board: React.FC<BannerProps> = ({ title, content, imageLink, children }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [truncatedContent, setTruncatedContent] = useState<string | React.ReactNode>(children || content || "");

  useEffect(() => {
    const adjustText = () => {
      if (textRef.current) {
        const maxWidth = textRef.current.offsetWidth;
        const text = children || content || "";

        // More robust truncation logic (adjust as needed)
        let truncated = text;
        if (typeof text === 'string') {
          const words = text.split(" ");
          let wordCount = words.length;
          while (textRef.current.offsetWidth > maxWidth && wordCount > 0) {
            truncated = words.slice(0, wordCount).join(" ") + "...";
            textRef.current.textContent = typeof truncated === 'string' ? truncated : ''; // Update DOM for accurate width measurement
            wordCount--;
          }
        }
        setTruncatedContent(truncated);
      }
    };

    adjustText();
    window.addEventListener('resize', adjustText);
    return () => window.removeEventListener('resize', adjustText);
  }, [children, content]);

  return (
    <div
      className="board-container"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={imageLink}
        alt={title}
        className="board-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
      />

      <div
        className="board-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        }}
      ></div>

      <div
        className="board-content"
        style={{
          position: "relative",
          color: "#fff",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1
          className="board-title"
          style={{
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
            fontSize: "2rem", // Taille de la police de base
          }}
        >
          {title}
        </h1>
        {(children || content) && (
          <p
            className="board-text"
            ref={textRef}
            style={{
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
              fontSize: "1rem", // Taille de la police de base
            }}
          >
            {truncatedContent} {/* Display the truncated content */}
          </p>
        )}
      </div>
    </div>
  );
};

export default Board;