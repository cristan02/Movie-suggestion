import Link from "next/link"

export default function Movie({title, id , poster_path , release_date}) {

    const imagePath = 'https://image.tmdb.org/t/p/original/'
    return(
        <div>     
            <Link href={`/${id}`}>
                <h1 className="font-semibold">{title}</h1>
                <h2 className="text-md">{release_date}</h2>
                <img src={imagePath + poster_path} alt={title} />
            </Link>
        </div>
    )
}