import Image from "next/image";
import { format } from "date-fns";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getDetailMovie } from "@/actions/getDetailMovie";
import { getMovieCredit } from "@/actions/getMovieCredit";
import Link from "next/link";
import { icons } from "@/components/icons";
export default async function DetailMoviePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDetailMovie(params.slug);
  const credit = await getMovieCredit(params.slug);
  return (
    <div className=" w-full my-4">
      <div className="mb-3">
        <Link className="text-lg inline-flex items-center font-medium" href="/">
          <icons.arrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="w-full flex flex-col md:space-x-6 lg:space-x-10 md:flex-row">
        <div className="relative aspect-auto md:w-6/12 lg:w-5/12">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="py-6 sm:py-3 md:w-6/12 lg:w-7/12">
          <h3 className="text-3xl mb-1 font-bold">
            {data.title}{" "}
            <span className="font-normal">
              ({new Date(data.release_date).getFullYear()})
            </span>
          </h3>
          <span className="block text-sm text-muted-foreground">
            <span className="inline-flex space-x-2">
              {data.genres.map((g: any) => (
                <span key={g.id}>{g.name}</span>
              ))}
            </span>
          </span>
          <div className="my-4">
            <span className="text-lg block font-bold">Overview</span>
            <span className="text-muted-foreground sm:text-base text-sm">
              {data.overview}
            </span>
          </div>
          <div className="">
            <span className="text-lg block font-bold">Top Billed Cast</span>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full mt-1"
            >
              <CarouselContent>
                {credit.cast.map((c: any) => (
                  <CarouselItem
                    key={c.id}
                    className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
                  >
                    <div className="relative aspect-[9/16]">
                      <Image
                        fill
                        className="object-cover rounded-xl"
                        src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                        alt={c.name}
                      />
                    </div>
                    <span className="font-medium mt-1 block">{c.name}</span>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
