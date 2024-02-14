import { options } from "@/tmdb/config";
export async function getDetailPeople(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US`,
    options
  );
  const json = await res.json();
  return json;
}
