import Image from "next/image";
import { getDetailPeople } from "@/actions/getDetailPeople";
import { formatDate } from "@/lib/date";
export default async function PersonPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDetailPeople(params.slug);
  return (
    <div className="w-full">
      <div className="flex space-x-0 md:space-x-10 flex-col md:flex-row">
        <div className="relative aspect-[9/16] w-[320px] lg:w-4/12">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt=""
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="py-6 flex flex-col space-y-4 lg:w-8/12">
          <div className="flex flex-col">
            <span className="font-bold text-lg">Name</span>
            <span className="text-muted-foreground">{data.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Birthday</span>
            <span className="text-muted-foreground">
              {formatDate(data.birthday)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Place of Birth</span>
            <span className="text-muted-foreground">{data.place_of_birth}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Biography</span>
            <span className="text-muted-foreground">{data.biography}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
