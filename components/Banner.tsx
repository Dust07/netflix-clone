import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../contants/movie"
import { Movie } from "../typings"
import { FaPlay } from "react-icons/fa"
import { InformationCircleIcon } from "@heroicons/react/solid"

type Props = {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [])

  console.log(movie)
  console.log("Backdrop path " + baseUrl + movie?.backdrop_path)
  console.log("Poster path " + baseUrl + movie?.poster_path)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path} `}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

      <div className="flex space-x-3">
        <button className="banner-btn bg-white text-black"><FaPlay className="h-4 w-4 text-black md:w-7 md:h-7" />Play</button>
        <button className="banner-btn bg-[gray]/70">More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /></button>
      </div>
    </div>
  )
}

export default Banner