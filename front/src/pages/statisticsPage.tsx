import CommissionsList from "../components/commissionsList";
import Statistics from "../components/statistics";

export const StatisticsPage = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Statistics />
        <CommissionsList />
    </div>
)