interface INavLinks {
  name: string;
  href: string;
}

export const moviesLinks: INavLinks[] = [
  {
    name: "Popular",
    href: "/movie",
  },
  {
    name: "Now Playing",
    href: "/movie/now-playing",
  },
  {
    name: "Upcoming",
    href: "/movie/upcoming",
  },
  {
    name: "Top Rated",
    href: "/movie/top-rated",
  },
];

export const tvShowLinks: INavLinks[] = [
  {
    name: "Popular",
    href: "/tv",
  },
  {
    name: "Airing Today",
    href: "/tv/airing-today",
  },
  {
    name: "On TV",
    href: "/tv/on-the-air",
  },
  {
    name: "Top Rated",
    href: "/tv/top-rated",
  },
];

export const links: INavLinks[] = [
  {
    name: "Movies",
    href: "/movie",
  },
  {
    name: "TV Shows",
    href: "/tv",
  },
  {
    name: "People",
    href: "/people",
  },
];
