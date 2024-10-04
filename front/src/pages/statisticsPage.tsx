import CommissionsList from "../components/commissionsList";
import Container from "../components/container";
import Header from "../components/header";
import Statistics from "../components/statistics";

export const StatisticsPage = () => <Container>
    <Header />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Statistics />
        <CommissionsList />
    </div>
</Container>