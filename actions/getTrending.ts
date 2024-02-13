import { options } from "@/tmdb/config";

export async function getTrending(time: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/${time}?language=en-US`,
    options
  );
  const data = await res.json();
  return data.results;
}
