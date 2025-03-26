import Masonry from "react-masonry-css";
import ResponsiveMasonry from "react-responsive-masonry";
import PropTypes from "prop-types";
import { Image } from "./";
import { useGlobalContext } from "../hooks/useGlobalContext";

function ImageContainer({ images }) {
  const { LikedImages } = useGlobalContext();

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter="10px" className="masonry-grid">
        {images.map((image) => (
          <Image
            key={image.id}
            image={image}
            added={LikedImages.some((img) => img.id === image.id)}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
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
