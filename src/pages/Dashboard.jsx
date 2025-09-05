import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import KPIOverview from '@/components/KPIOverview';
import TrainingProgress from '@/components/TrainingProgress';
import AlertsTable from '@/components/AlertsTable';
import Chart from '@/components/Chart';
import IdentityStatus from '@/components/IdentityStatus';
import Recommendations from '@/components/Recommendations';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 space-y-6 overflow-y-auto">
          <KPIOverview />
          <TrainingProgress />
          <Chart />
          <AlertsTable />
          <IdentityStatus />
          <Recommendations />
        </main>
      </div>
    </div>
  );
}