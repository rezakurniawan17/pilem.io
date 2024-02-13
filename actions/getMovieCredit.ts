import { options } from "@/tmdb/config";

export async function getMovieCredit(slug: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}/credits?language=en-US`,
    options
  );

  const json = await res.json();
  return json;
}
