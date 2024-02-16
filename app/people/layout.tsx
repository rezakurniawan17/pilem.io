import MotionPage from "@/components/motion-page";

export const metadata = {
  title: "People | Pilem.Io",
};

interface PeopleLayoutProps {
  children: React.ReactNode;
}
export default function PeopleLayout({ children }: PeopleLayoutProps) {
  return <MotionPage>{children}</MotionPage>;
}
