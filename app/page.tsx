import ChartsSection from "@/components/dashboard/charts-section";
import RecentPosts from "@/components/dashboard/recent-posts";
import RecentUsers from "@/components/dashboard/recent-users";
import StatsSection from "@/components/dashboard/stats-section";
import WelcomeHeader from "@/components/dashboard/welcome-header";

export default function DashboardPage() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto space-y-8">
      <WelcomeHeader />

      <StatsSection />

      <ChartsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentPosts />
        <RecentUsers />
      </div>
    </div>
  );
}
