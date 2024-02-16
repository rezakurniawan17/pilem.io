import MotionPage from "@/components/motion-page";

export const metadata = {
  title: "TV Show | Pilem.Io",
};

interface TVShowLayoutProps {
  children: React.ReactNode;
}

export default function TVShowLayout({ children }: TVShowLayoutProps) {
  return <MotionPage>{children}</MotionPage>;
}
