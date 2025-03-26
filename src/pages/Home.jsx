import { useActionData } from "react-router-dom";
import { ImageContainer, Search } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search")?.trim() || "all"; 
  console.log("Action ishladi, search:", search); 
  return { search }; 
};

function Home() {
  const actionData = useActionData();
  const searchParamFromAction = actionData?.search || "all";
  const [allImages, setAllImages] = useState([]);
  const [pageParam, setPageParam] = useState(1);
  const prevSearchParam = useRef(searchParamFromAction);

  console.log("Search param:", searchParamFromAction); 

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=TfijlH2P6tfgB_kzepCuV_-ji3Pd7waZSo1Gx4SDBbE&query=${searchParamFromAction}&page=${pageParam}`
  );

  useEffect(() => {
    if (data?.results) {
      setAllImages((prevImage) => (pageParam === 1 ? data.results : [...prevImage, ...data.results]));
    }
  }, [data, pageParam]);

  useEffect(() => {
    if (searchParamFromAction !== prevSearchParam.current) {
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = searchParamFromAction;
    }
  }, [searchParamFromAction]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="align-elements">
      <div className="my-10 mb-5 mt-5 flex items-center justify-center gap-2">
        <Search />
      </div> 
      {isPending && <h1 className="text-center mt-20 mb-20 bg-gray-400 p-20">Yuklanmoqda ...</h1>}
      {allImages.length > 0 && <ImageContainer images={allImages} />}
      <div className="my-10 text-center">
        <button
          onClick={() => setPageParam(pageParam + 1)}
          className="btn bg-green-500 p-7 rounded-full text-white text-2xl"
        >
          Yana qo‘shish...
        </button>
      </div>
    </div>
  );
}

export default Home;
