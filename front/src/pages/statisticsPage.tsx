import Container from "../components/container";
import HeaderA from "../components/apporteurs/header";
import StatisticsA from "../components/apporteurs/statistics";
import CommissionsListA from "../components/apporteurs/commissionsList";
import HeaderF from "../components/fournisseurs/header";
import StatisticsF from "../components/fournisseurs/statistics";
import CommissionsListF from "../components/fournisseurs/commissionsList";
import { useUserContext } from "../context/user.context";

export const StatisticsPage = () => {
    const { currentUser } = useUserContext();

    const renderApporteur = () => <Container>
        <HeaderA />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <StatisticsA />
            <CommissionsListA />
        </div>
    </Container>

    const renderFournisseur = () => <Container>
        <HeaderF />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <StatisticsF />
            <CommissionsListF />
        </div>
    </Container>

    return currentUser?.role === 1 ? renderApporteur() : renderFournisseur();
}