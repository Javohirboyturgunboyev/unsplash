// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa";
// import { useGlobalContext } from "../hooks/useGlobalContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Image({ image }) {
//   if (!image || !image.urls) {
//     return <p>Image not available</p>;
//   }

//   const { likedImages, dispatch, theme } = useGlobalContext();
//   const { links, urls, alt_description, user } = image;

//   const [isLiked, setIsLiked] = useState(false);

//   useEffect(() => {
//     if (Array.isArray(likedImages)) {
//       setIsLiked(likedImages.some((img) => img?.id === image?.id));
//     }
//   }, [likedImages, image?.id]);

//   const addLikedImage = () => {
//     if (!isLiked) {
//       dispatch({ type: "LIKE", payload: image });
//       toast.success(`✅ Siz "${alt_description || "No description"}" rasmini yoqtirdingiz!`);
//     } else {
//       dispatch({ type: "UNLIKE", payload: image.id });
//       toast.info(`❌ Siz "${alt_description || "No description"}" rasmini yoqtirishdan voz kechdingiz!`);
//     }
//     setIsLiked(!isLiked);
//   };

//   return (
//     <div
//       className={`relative group w-[350px] p-4 pl-5 pr-5 rounded-2xl border transition-transform duration-300 hover:scale-105
//         ${theme === "dark" 
//           ? "bg-gray-900 hover:bg-gray-800 text-white border-red-100 shadow-blue-400 shadow-2xl hover:shadow-2lg" 
//           : "bg-white hover:bg-gray-300 text-gray-900 border-gray-600 shadow-gray-900 shadow-2xl hover:shadow-2lg"}`}
//     >
//       {/* Like Button */}
//       <span
//         onClick={addLikedImage}
//         className={`absolute text-2xl cursor-pointer h-9 w-9 border rounded-full flex justify-center items-center right-2 top-2 
//           ${theme === "dark" ? "bg-gray-700" : "bg-white"} 
//           invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300`}
//       >
//         {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-gray-600" />}
//       </span>

//       {/* Image */}
//       <img
//         src={urls.regular}
//         alt={alt_description || "No description available"}
//         className="mt-2 w-full cursor-pointer rounded-3xl"
//         onLoad={() => toast.success(`🖼️ "${alt_description || "No description"}" rasm yuklandi!`)}
//         onError={() => toast.error(`⚠️ "${alt_description || "No description"}" rasm yuklanmadi!`)}
//       />

//       {/* User Info */}
//       {user && (
//         <span className={`absolute left-2 bottom-2 flex gap-2 justify-center items-center invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 
//           ${theme === "dark" ? "text-white" : "text-gray-900"}`}
//         >
//           <img
//             src={user.profile_image.large}
//             alt={`${user.name} avatar`}
//             className="w-8 h-8 rounded-full"
//           />
//           <p>{user.name}</p>
//         </span>
//       )}

//       {/* Download Button */}
//       {links.download && (
//         <span className="absolute text-2xl cursor-pointer h-9 w-9 rounded-full flex justify-center items-center right-2 bottom-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
//           <a
//             download
//             href={`${links.download}&force=true`}
//             onClick={() => toast.success(`⬇️ "${alt_description || "No description"}" rasm yuklandi!`)}
//           >
//             <FaDownload className={`${theme === "dark" ? "text-white" : "text-gray-800"}`} />
//           </a>
//         </span>
//       )}
//     </div>
//   );
// }

// Image.propTypes = {
//   image: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     urls: PropTypes.shape({
//       regular: PropTypes.string.isRequired,
//     }).isRequired,
//     alt_description: PropTypes.string,
//     links: PropTypes.shape({
//       download: PropTypes.string,
//     }).isRequired,
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       profile_image: PropTypes.shape({
//         large: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// export default Image;









import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Image({ image }) {
  if (!image || !image.urls) {
    return <p>Image not available</p>;
  }

  const { dispatch, theme } = useGlobalContext();
  const { links, urls, alt_description, user } = image;

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedImages")) || [];
    setIsLiked(savedLikes.includes(image?.id));
  }, [image?.id]);

  const addLikedImage = () => {
    let updatedLikes = JSON.parse(localStorage.getItem("likedImages")) || [];

    if (!isLiked) {
      dispatch({ type: "LIKE", payload: image });
      updatedLikes.push(image.id);
      toast.success(`✅👍 Siz "${alt_description || "No description"}" rasmini yoqtirdingiz!`);
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
      updatedLikes = updatedLikes.filter((id) => id !== image.id);
      toast.info(`❌👎 Siz "${alt_description || "No description"}" rasmini yoqtirishdan voz kechdingiz!`);
    }

    localStorage.setItem("likedImages", JSON.stringify(updatedLikes));
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`relative group w-[350px] p-4 pl-5 pr-5 rounded-2xl border transition-transform duration-300 hover:scale-105
        ${theme === "dark" 
          ? "bg-gray-900 hover:bg-gray-800 text-white border-red-100 shadow-blue-400 shadow-2xl hover:shadow-2lg" 
          : "bg-white hover:bg-gray-300 text-gray-900 border-gray-600 shadow-gray-900 shadow-2xl hover:shadow-2lg"}`}
    >
      {/* Like Button */}
      <span
        onClick={addLikedImage}
        className={`absolute text-2xl cursor-pointer h-9 w-9 border rounded-full flex justify-center items-center right-2 top-2 
          ${theme === "dark" ? "bg-gray-700" : "bg-white"} 
          transition-all duration-300 ${isLiked ? "opacity-100 visible" : "invisible opacity-0 group-hover:opacity-100 group-hover:visible"}`}
      >
        {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-gray-600" />}
      </span>

      {/* Image */}
      <img
        src={urls.regular}
        alt={alt_description || "No description available"}
        className="mt-2 w-full cursor-pointer rounded-3xl"
        onLoad={() => toast.success(`🖼️ "${alt_description || "No description"}" rasm yuklandi!`)}
        onError={() => toast.error(`⚠️ "${alt_description || "No description"}" rasm yuklanmadi!`)}
      />

      {/* User Info */}
      {user && (
        <span className={`absolute left-2 bottom-2 flex gap-2 justify-center items-center invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 
          ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          <img
            src={user.profile_image.large}
            alt={`${user.name} avatar`}
            className="w-8 h-8 rounded-full"
          />
          <p>{user.name}</p>
        </span>
      )}

      {/* Download Button */}
      {links.download && (
        <span className="absolute text-2xl cursor-pointer h-9 w-9 rounded-full flex justify-center items-center right-2 bottom-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a
            download
            href={`${links.download}&force=true`}
            onClick={() => toast.success(`⬇️ "${alt_description || "No description"}" rasm yuklandi!`)}
          >
            <FaDownload className={`${theme === "dark" ? "text-white" : "text-gray-800"}`} />
          </a>
        </span>
      )}
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
      download: PropTypes.string,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.shape({
        large: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Image;
