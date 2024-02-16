import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import { MotionDiv } from "@/components/motion-div";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default function MovieCard({ item }: any) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      viewport={{ amount: 0 }}
    >
      <div className="aspect-[9/16] relative">
        <Image
          loading="lazy"
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
          <Link
            href={`${
              item.first_air_date ? `tv/${item.id}` : `movie/${item.id}`
            }`}
          >
            <h6 className="text-base font-semibold">
              {item.title ? `${item.title}` : `${item.name}`}
            </h6>
          </Link>
        )}
        {item.media_type && (
          <p className="text-xs opacity-60">
            {item.media_type === "movie"
              ? `${formatDate(item.release_date)}`
              : `${formatDate(item.first_air_date)}`}
          </p>
        )}
        {!item.media_type && (
          <p className="text-xs opacity-60">
            {item.release_date ? formatDate(item.release_date) : ""}{" "}
            {item.first_air_date ? formatDate(item.first_air_date) : ""}
          </p>
        )}
      </div>
    </MotionDiv>
  );
}
