"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MovieCard from "../card/movie-card";
export default function ListCarousel({
  data,
  header,
}: {
  data: any;
  header?: string;
}) {
  return (
    <div className="my-3">
      <div className="text-2xl font-bold">{header}</div>
      <div className="mt-2">
        <Carousel>
          <CarouselContent>
            {data.map((item: any) => (
              <CarouselItem
                key={item.id}
                className="md:basis-1/4 lg:basis-1/6 basis-1/2"
              >
                <MovieCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
