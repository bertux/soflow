import CommissionsList from "../components/apporteurs/commissionsList";
import Container from "../components/container";
import Header from "../components/apporteurs/header";
import Statistics from "../components/apporteurs/statistics";

export const StatisticsPage = () => <Container>
    <Header />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Statistics />
        <CommissionsList />
    </div>
</Container>