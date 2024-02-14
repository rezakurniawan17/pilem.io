import { getTrending } from "@/actions/getTrending";
import { getPopularMovie } from "@/actions/getPopularMovie";
import ListCarousel from "@/components/carousel/list-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function App() {
  const trendingToday = await getTrending("day");
  const trendingThisWeek = await getTrending("week");
  const popular = await getPopularMovie();
  return (
    <div className="h-full">
      <Tabs defaultValue="today" className="w-full">
        <span className="mr-3 text-2xl font-bold">Trending</span>
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
        </TabsList>
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
    </div>
  );
}
