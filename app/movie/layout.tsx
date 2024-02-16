import MotionPage from "@/components/motion-page";

export const metadata = {
  title: "Movie | Pilem.Io",
};

interface MovieLayoutProps {
  children: React.ReactNode;
}
export default function MovieLayout({ children }: MovieLayoutProps) {
  return <MotionPage>{children}</MotionPage>;
}
