import { options } from "@/tmdb/config";

export async function getMultiSearch(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US`,
    options
  );
  const json = await res.json();
  return json;
}
