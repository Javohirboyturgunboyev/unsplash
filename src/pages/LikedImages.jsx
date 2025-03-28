import { useGlobalContext } from "../hooks/useGlobalContext";

import { ImageContainer } from "../components";



function LikedImages() {
  const {LikedImages} = useGlobalContext();


  if (LikedImages.length == 0) {
    return <h1> You don`t choose andy images yet !</h1>
  }
  return (
    <div className="align-elements ">
    {LikedImages.length > 0 && <ImageContainer images = {LikedImages}/>}
  </div>

  )
}

export default LikedImages;
