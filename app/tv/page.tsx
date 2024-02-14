import { getPopularTVShow } from "@/actions/getPopularTVShow";
import MovieCard from "@/components/card/movie-card";
export default async function TVShowPage() {
  const data = await getPopularTVShow();
  console.log(data);
  return (
    <div className="min-h-screen w-full">
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-5">
        {data.map((item: any) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
