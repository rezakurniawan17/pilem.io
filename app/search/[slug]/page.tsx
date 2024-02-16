"use client";
import MotionPage from "@/components/motion-page";
import { useEffect, useState } from "react";
import { options } from "@/tmdb/config";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
export default function SearchBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function getMultiSearch(query: string) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US`,
        options
      );
      const json = await res.json();
      return setResult(json.results);
    }

    getMultiSearch(pathname.slice(8, pathname.length) as string);
  }, [pathname, searchParams]);
  return (
    <MotionPage className="min-h-screen w-full">
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-5">
        {result?.map((item: any, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            key={item.id}
            className="flex flex-col space-y-1"
          >
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
          </motion.div>
        ))}
      </div>
    </MotionPage>
  );
}
