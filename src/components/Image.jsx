import PropTypes from "prop-types";
import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Image({ image, added }) {
  if (!image || !image.urls) {
    return <p>Image not available</p>;
  }

  const { likedImages, dispatch } = useGlobalContext();
  const { links, urls, alt_description, user } = image;

  const addLikedImage = (image) => {
    const alreadyAdded = likedImages.some((img) => img.id === image.id);

    if (!alreadyAdded) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  };

  return (
    <div className="relative group">
      {!added ? (
        <span
          onClick={() => addLikedImage(image)}
          className="absolute text-2xl cursor-pointer h-9 w-9 border rounded-full flex justify-center items-center right-2 top-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300"
        >
          <FaRegHeart className="text-white" />
        </span>
      ) : (
        <span
          onClick={() => addLikedImage(image)}
          className="absolute text-2xl cursor-pointer bg-white h-9 w-9 border rounded-full flex justify-center items-center right-2 top-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300"
        >
          <FaHeart className="text-red-600" />
        </span>
      )}

      <img
        src={urls.regular}
        alt={alt_description || "No description available"}
        className="mb-5 w-full cursor-pointer rounded-lg"
      />

      <span className="absolute left-2 bottom-2 flex text-white gap-2 justify-center items-center invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <img
          src={user.profile_image.large}
          alt={`${user.name} avatar`}
          className="w-8 h-8 rounded-full"
        />
        <p>{user.name}</p>
      </span>

      <span className="absolute text-2xl cursor-pointer h-9 w-9 rounded-full flex justify-center items-center right-2 bottom-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <a download href={`${links.download}&force=true`}>
          <FaDownload className="text-white" />
        </a>
      </span>
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    links: PropTypes.shape({
      download: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.shape({
        large: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  added: PropTypes.bool.isRequired,
};

export default Image;
