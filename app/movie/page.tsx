import { getPopularMovie } from "@/actions/getPopularMovie";
import MovieCard from "@/components/card/movie-card";

export default async function MoviePage() {
  const data = await getPopularMovie();
  return (
    <div className="w-full min-h-screen">
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-5">
        {data.map((item: any) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
