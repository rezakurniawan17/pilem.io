import { options } from "@/tmdb/config";

export async function getDetailTVShow(slug: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${slug}?language=en-US`,
    options
  );
  const json = await res.json();
  return json;
}
