import "../App.css";

function ImageContainer({ imageUrl, imageAlt }) {
  return (
    <img
      src={imageUrl}
      alt={imageAlt}
      className="w-full h-full object-cover"
    />
  );
}

export default ImageContainer;
