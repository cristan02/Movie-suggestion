import Image from 'next/image'
import Movie from './Movie'

export default async function Home() {

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}` , {next: {revalidate: 0}}
  )

  const res = await data.json()

  console.log(res.results)

  return (
    <main className="flex min-h-screen flex-col ">
      <div className='w-full flex justify-center'>
        <h1 className='text-2xl font-bold mb-8'>Top Movies Suggesions</h1>
      </div>
      <div className='grid gap-16 grid-cols-fluid'>
        {res.results.map((movie) => (
          <Movie 
            key={movie.id}
            id={movie.id}  
            title={movie.title}
            poster_path={movie.poster_path}  
            release_date={movie.release_date} 
          />
        ))}
      </div>
    </main>
  )
}
