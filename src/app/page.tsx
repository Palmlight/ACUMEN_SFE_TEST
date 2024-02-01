import DashboardDetails from "./_components/DashboardDetails";
import DashboardGraphs from "./_components/DashboardGraphs";

export default function Home() {
  return (
    <div className="mt-6 mx-auto max-w-[950px] h-full">
      <DashboardDetails />
      <div className="my-6 border-b border-[#535F8910]"></div>
      <DashboardGraphs />
    </div>
  );
}
