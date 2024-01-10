import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl">
        The page you are looking for could not be found 😢
      </h1>
      <button className="text-4xl text-red-500" onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    </div>
  );
}

export default PageNotFound;
