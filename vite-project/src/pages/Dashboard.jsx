import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import StatsCards from "../components/StatsCards";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <WelcomeCard />
          <StatsCards />
        </main>
      </div>
    </div>
  );
}
