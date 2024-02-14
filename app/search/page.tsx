"use client";
import { Suspense, useEffect, useState } from "react";
import { options } from "@/tmdb/config";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function SeachPageFallback() {
  return <div>Loading</div>;
}

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState([]);
  const search = searchParams.get("query");
  useEffect(() => {
    async function getMultiSearch(query: string) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US`,
        options
      );
      const json = await res.json();
      return setResult(json.results);
    }

    getMultiSearch(search as string);
  }, [search]);
  return (
    <Suspense fallback={<SeachPageFallback />}>
      <div className="min-h-screen w-full">
        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-5">
          {result?.map((item: any) => (
            <div key={item.id} className="flex flex-col space-y-1">
              <div className="relative aspect-[9/16]">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={`${item.title} Poster`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div>
                <Link href={`/${item.media_type}/${item.id}`}>
                  {item.name ? item.name : item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
