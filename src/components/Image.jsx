// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { FaRegHeart, FaHeart, FaDownload, FaTimes } from "react-icons/fa";
// import { useGlobalContext } from "../hooks/useGlobalContext";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Image({ image }) {
//   if (!image || !image.urls) {
//     return <p>Image not available</p>;
//   }

//   const { dispatch, theme } = useGlobalContext();
//   const { links, urls, alt_description, user, description, created_at } = image;
//   const [isLiked, setIsLiked] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const savedLikes = JSON.parse(localStorage.getItem("likedImages")) || [];
//     setIsLiked(savedLikes.includes(image?.id));
//   }, [image?.id]);

//   const addLikedImage = () => {
//     let updatedLikes = JSON.parse(localStorage.getItem("likedImages")) || [];

//     if (!isLiked) {
//       dispatch({ type: "LIKE", payload: image });
//       updatedLikes.push(image.id);
//       toast.success(`✅👍 Siz "${alt_description || "No description"}" rasmini yoqtirdingiz!`);
//     } else {
//       dispatch({ type: "UNLIKE", payload: image.id });
//       updatedLikes = updatedLikes.filter((id) => id !== image.id);
//       toast.info(`❌👎 Siz "${alt_description || "No description"}" rasmini yoqtirishdan voz kechdingiz!`);
//     }

//     localStorage.setItem("likedImages", JSON.stringify(updatedLikes));
//     setIsLiked(!isLiked);
//   };

//   return (
//     <>
//       <div
//         className={`relative group w-[350px] p-4 rounded-2xl border transition-transform duration-300 hover:scale-105 ${
//           theme === "dark"
//             ? "bg-gray-900 hover:bg-gray-800 text-white border-red-100 shadow-blue-400 shadow-2xl hover:shadow-lg"
//             : "bg-white hover:bg-gray-300 text-gray-900 border-gray-600 shadow-gray-900 shadow-2xl hover:shadow-lg"
//         }`}
//       >
//         <span
//           onClick={addLikedImage}
//           className={`absolute text-2xl cursor-pointer h-9 w-9 border rounded-full flex justify-center items-center right-2 top-2 ${
//             theme === "dark" ? "bg-gray-700" : "bg-white"
//           } transition-all duration-300 ${isLiked ? "opacity-100 visible" : "invisible opacity-0 group-hover:opacity-100 group-hover:visible"}`}
//         >
//           {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-gray-600" />}
//         </span>

//         <img
//           src={urls.regular}
//           alt={alt_description || "No description available"}
//           className="mt-2 w-full cursor-pointer rounded-3xl"
//           onClick={() => setIsModalOpen(true)}
//         />

      
//         <div className="absolute bottom-3 left-3 flex gap-2  right-3 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
//           {user && (
//             <div className="flex items-center left-3">
//               <img src={user.profile_image.large} alt={user.name} className="w-8 h-8 rounded-full" />
//               <p className="ml-2">{user.name}</p>
//             </div>
//           )}
//          {links.download && (
//             <a
//               href={`${links.download}&force=true`}
//               download
//               className="bg-blue-600 text-white p-2 rounded-lg flex items-center gap-2 right-3 hover:bg-blue-700"
//             >
//               <FaDownload /> Yuklab olish
//             </a>
//           )}
//         </div>
//       </div>


//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-[800px] max-w-full relative flex gap-5">
//             {/* Yopish tugmasi */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 text-2xl"
//             >
//               <FaTimes />
//             </button>


//             <div className="w-1/2">
//               <img src={urls.regular} alt={alt_description} className="w-full rounded-lg" />
//             </div>

 
//             <div className="w-1/2">
//               <h2 className="text-lg font-semibold">{alt_description || "No description available"}</h2>
//               <p className="text-sm text-gray-900 mt-2">{description || "Tavsif mavjud emas."}</p>
//               <p className="text-sm text-gray-900 mt-1">Yaratilgan sana: {new Date(created_at).toLocaleDateString()}</p>

//               {/* User ma'lumotlari */}
//               {user && (
//                 <div className="flex items-center mt-4">
//                   <img src={user.profile_image.large} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
//                   <div>
//                     <p className="font-medium">{user.name}</p>
//                     <p className="text-sm text-gray-500">{user.bio || "Bio mavjud emas."}</p>
//                   </div>
//                 </div>
//               )}

//               {links.download && (
//                 <a
//                   href={`${links.download}&force=true`}
//                   download
//                   className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                 >
//                   <FaDownload className="inline mr-2" /> Rasmni yuklab olish
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// Image.propTypes = {
//   image: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     urls: PropTypes.shape({
//       regular: PropTypes.string.isRequired,
//     }).isRequired,
//     alt_description: PropTypes.string,
//     description: PropTypes.string,
//     created_at: PropTypes.string,
//     links: PropTypes.shape({
//       download: PropTypes.string,
//     }).isRequired,
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       bio: PropTypes.string,
//       profile_image: PropTypes.shape({
//         large: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// export default Image;



import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaRegHeart, FaHeart, FaDownload, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Image({ image }) {
  if (!image || !image.urls) {
    return <p>Image not available</p>;
  }

  const { dispatch, theme } = useGlobalContext();
  const { links, urls, alt_description, user, description, created_at } = image;
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedImages")) || [];
    setIsLiked(savedLikes.includes(image?.id));
  }, [image?.id]);

  const addLikedImage = () => {
    let updatedLikes = JSON.parse(localStorage.getItem("likedImages")) || [];

    if (!isLiked) {
      dispatch({ type: "LIKE", payload: image });
      dispatch({ type: "INCREMENT_LIKES" }); // Like sonini oshirish
      updatedLikes.push(image.id);
      toast.success(`✅👍 Siz "${alt_description || "No description"}" rasmini yoqtirdingiz!`);
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
      dispatch({ type: "DECREMENT_LIKES" }); // Like sonini kamaytirish
      updatedLikes = updatedLikes.filter((id) => id !== image.id);
      toast.info(`❌👎 Siz "${alt_description || "No description"}" rasmini yoqtirishdan voz kechdingiz!`);
    }

    localStorage.setItem("likedImages", JSON.stringify(updatedLikes));
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div
        className={`relative group w-[350px] p-4 rounded-2xl border transition-transform duration-300 hover:scale-105 ${
          theme === "dark"
            ? "bg-gray-900 hover:bg-gray-800 text-white border-red-100 shadow-blue-400 shadow-2xl hover:shadow-lg"
            : "bg-white hover:bg-gray-300 text-gray-900 border-gray-600 shadow-gray-900 shadow-2xl hover:shadow-lg"
        }`}
      >
        <span
          onClick={addLikedImage}
          className={`absolute text-2xl cursor-pointer h-9 w-9 border rounded-full flex justify-center items-center right-2 top-2 ${
            theme === "dark" ? "bg-gray-700" : "bg-white"
          } transition-all duration-300 ${isLiked ? "opacity-100 visible" : "invisible opacity-0 group-hover:opacity-100 group-hover:visible"}`}
        >
          {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart className="text-gray-600" />}
        </span>

        <img
          src={urls.regular}
          alt={alt_description || "No description available"}
          className="mt-2 w-full cursor-pointer rounded-3xl"
          onClick={() => setIsModalOpen(true)}
        />

        <div className="absolute bottom-3 left-3 flex gap-2  right-3 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {user && (
            <div className="flex items-center left-3">
              <img src={user.profile_image.large} alt={user.name} className="w-8 h-8 rounded-full" />
              <p className="ml-2">{user.name}</p>
            </div>
          )}
          {links.download && (
            <a
              href={`${links.download}&force=true`}
              download
              className="bg-blue-600 text-white p-2 rounded-lg flex items-center gap-2 right-3 hover:bg-blue-700"
            >
              <FaDownload /> Yuklab olish
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-[800px] max-w-full relative flex gap-5">
            {/* Yopish tugmasi */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 text-2xl"
            >
              <FaTimes />
            </button>

            <div className="w-1/2">
              <img src={urls.regular} alt={alt_description} className="w-full rounded-lg" />
            </div>

            <div className="w-1/2">
              <h2 className="text-lg font-semibold">{alt_description || "No description available"}</h2>
              <p className="text-sm text-gray-900 mt-2">{description || "Tavsif mavjud emas."}</p>
              <p className="text-sm text-gray-900 mt-1">Yaratilgan sana: {new Date(created_at).toLocaleDateString()}</p>

              {user && (
                <div className="flex items-center mt-4">
                  <img src={user.profile_image.large} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.bio || "Bio mavjud emas."}</p>
                  </div>
                </div>
              )}

              {links.download && (
                <a
                  href={`${links.download}&force=true`}
                  download
                  className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  <FaDownload className="inline mr-2" /> Rasmni yuklab olish
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    description: PropTypes.string,
    created_at: PropTypes.string,
    links: PropTypes.shape({
      download: PropTypes.string,
    }).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string,
      profile_image: PropTypes.shape({
        large: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Image;
