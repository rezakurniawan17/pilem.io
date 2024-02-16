import { getTrending } from "@/actions/getTrending";
import { getPopularMovie } from "@/actions/getPopularMovie";
import ListCarousel from "@/components/carousel/list-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import Loading from "./loading";

export default async function App() {
  const trendingTodayData = await getTrending("day");
  const trendingThisWeekData = await getTrending("week");
  const popularData = await getPopularMovie();
  const [trendingToday, trendingThisWeek, popular] = await Promise.all([
    trendingThisWeekData,
    trendingTodayData,
    popularData,
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <Tabs defaultValue="today" className="w-full">
        <div className="flex space-x-4 items-center">
          <span className="text-3xl font-semibold">Trending</span>
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="today">
          <ListCarousel data={trendingToday} />
        </TabsContent>
        <TabsContent value="week">
          <ListCarousel data={trendingThisWeek} />
        </TabsContent>
      </Tabs>
      <div>
        <ListCarousel header="Popular Movie" data={popular} />
      </div>
    </Suspense>
  );
}
