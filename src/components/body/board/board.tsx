interface BannerProps {
  title: string;
  content?: string;
  imageLink: string;
  children?: React.ReactNode;
}

const Board: React.FC<BannerProps> = ({ title, content, imageLink, children }) => {
  return (
    <div
      className="board-container"
      style={{
        backgroundImage: `url(${imageLink})`,
        backgroundAttachment: "fixed", // Image fixe lors du défilement
        backgroundSize: "cover", // L'image couvre tout le conteneur
        backgroundPosition: "center", // L'image est centrée
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        className="board-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Sombre pour le contraste
        }}
      ></div>

      {/* Contenu */}
      <div
        className="board-content"
        style={{
          position: "relative", // Assurez-vous que le contenu reste au-dessus de l'overlay
          color: "#fff", // Texte en blanc pour être visible
          padding: "2rem",
          textAlign: "center",
        }}
      >
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
 