import { options } from "@/tmdb/config";
export async function getPopularPeople() {
  const res = await fetch(
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
    options
  );
  const data = await res.json();
  return data.results;
}
