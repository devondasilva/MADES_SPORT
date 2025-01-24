
interface BannerProps {
  title: string;
  content?: string;
  imageLink: string;
  children?: React.ReactNode;
}

const Board: React.FC<BannerProps> = ({ title, content, imageLink, children }) => {
  return (
    <div className="board-container">+
      {/* Image de fond */}
      <img
        src={imageLink}
        alt={`Image illustrant ${title}`}
        className="board-image"
      />
      {/* Overlay */}
      <div className="board-overlay"></div>

      {/* Contenu */}
      <div className="stat board-content">
        <h1 className="board-title">{title}</h1>
        {(children || content) && (
          <p className="board-text">
            {children} {content}
            
          </p>
        )}
      </div>
    </div>
  );
};

export default Board;
