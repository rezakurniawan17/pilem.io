import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export default function MovieCard({ item }: any) {
  return (
    <>
      <div className="aspect-[9/16] relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="my-1">
        {item.media_type && (
          <Link href={`/${item.media_type}/${item.id}`}>
            {item.media_type && (
              <h6 className="text-base font-semibold">
                {item.media_type === "movie" ? `${item.title}` : `${item.name}`}
              </h6>
            )}
            {!item.media_type && (
              <h6 className="text-base font-semibold">{item.title}</h6>
            )}
          </Link>
        )}
        {!item.media_type && (
          <Link href={`/movie/${item.id}`}>
            <h6 className="text-base font-semibold">{item.title}</h6>
          </Link>
        )}
        {item.media_type && (
          <p className="text-xs opacity-60">
            {item.media_type === "movie"
              ? `${format(new Date(item.release_date), "d MMMM yyyy")}`
              : `${format(new Date(item.first_air_date), "d MMMM yyyy")}`}
          </p>
        )}
        {!item.media_type && (
          <p className="text-xs opacity-60">
            {format(new Date(item.release_date), "d MMMM yyyy")}
          </p>
        )}
      </div>
    </>
  );
}
