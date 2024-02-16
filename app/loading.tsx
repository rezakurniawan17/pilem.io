import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full h-screen">
      <div>
        {...Array(10)
          .fill(1)
          .map((_, index) => <Skeleton key={index} />)}
        <Skeleton />
      </div>
    </div>
  );
}
