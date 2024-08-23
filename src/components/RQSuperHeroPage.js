import { useParams, useNavigate } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1)
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data.name} - {data?.data.alterego}
      </div>
      <button onClick={handleReturn}>Return</button>
    </>
  );
};

export default RQSuperHeroPage;
