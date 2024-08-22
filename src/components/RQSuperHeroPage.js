import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

const RQSuperHeroPage = () => {
  const { heroId } = useParams()
  const { isLoading, data, isError, error} = useSuperHeroData(heroId)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>{data?.data.name} - {data?.data.alterego}</div>
  )
}

export default RQSuperHeroPage
