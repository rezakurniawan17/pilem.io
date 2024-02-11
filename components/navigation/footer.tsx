"use client";

import { useTheme } from "next-themes";
import { icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
export default function Footer() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="w-full py-3 border-t bg-background">
      <footer className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pilem.io. | All Rights Reserved
          </p>
          <div>
            <Button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              size={"icon"}
              variant={"ghost"}
            >
              <icons.sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
