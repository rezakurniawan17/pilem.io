import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";

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
        <Link href="/">
          <h1 className="text-base font-semibold">
            {item.media_type === "movie" ? `${item.title}` : `${item.name}`}
          </h1>
        </Link>
        {item.media_type && (
          <p className="text-xs opacity-60">
            {item.media_type === "movie"
              ? `${formatDate(item.release_date)}`
              : `${formatDate(item.first_air_date)}`}
          </p>
        )}
      </div>
    </>
  );
}
