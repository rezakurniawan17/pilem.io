"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { links } from "@/config/nav";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
    router.refresh();
    setSearch("");
  };
  return (
    <div className="w-full py-4 border-b">
      <div className="px-4 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center justify-between w-full shrink-0 md:w-fit">
            <Link href="/" className="inline-flex items-center flex-shrink-0">
              <icons.clapperboard className="w-6 h-6 mr-2 " />
              <h6 className="text-xl font-bold">Pilem.io</h6>
            </Link>
            <div className="flex md:hidden">
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <icons.close /> : <icons.menu />}
              </Button>
            </div>
          </div>

          {/* Nav Links  - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {links.map((link) => (
              <ListItem key={link.name} href={link.href} title={link.name} />
            ))}
            <Suspense>
              <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-[300px]"
                  placeholder="Search Movie, TV Show, People"
                  type="text"
                />
              </form>
            </Suspense>
          </div>
        </nav>

        {/* Nav Links - Desktop */}
        {isOpen && (
          <div className="relative z-40 my-3 md:hidden">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <ListItem key={link.name} href={link.href} title={link.name} />
              ))}
            </div>
            <Suspense>
              <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="mt-4"
                  placeholder="Search Movie, TV Show, People"
                  type="text"
                />
              </form>
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, title, children, ...props }, ref) => {
  return (
    <li className="list-none">
      <Link
        href={`${href}`}
        ref={ref}
        className={cn(
          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-base font-medium leading-none">{title}</div>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
