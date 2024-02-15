import { getPopularPeople } from "@/actions/getPopularPeople";
import Link from "next/link";
import Image from "next/image";
export default async function PersonPage() {
  const data = await getPopularPeople();
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-5">
        {data.map((item: any) => (
          <div key={item.id} className="basis-">
            <div className="relative aspect-[9/16]">
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="my-1">
              <Link href={`/people/${item.id}`}>
                <h1 className="text-sm font-semibold">{item.name}</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
