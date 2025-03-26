import PropTypes from "prop-types";
import Image from "./Image";
import { useGlobalContext } from "../hooks/useGlobalContext";

function ImageContainer({ images }) {
  const { LikedImages } = useGlobalContext();

  return (
    <div className="flex flex-wrap gap-4 justify-center p-5">
      {images.map((image) => (
        <Image
          key={image.id}
          image={image}
          added={LikedImages.some((img) => img.id === image.id)}
        />
      ))}
    </div>
  );
}

ImageContainer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageContainer;
