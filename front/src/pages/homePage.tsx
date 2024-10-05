import Container from "../components/container";

export const HomePage = () => (
  <Container>
  {/* Section de la bannière d'accueil */}
  <section className="bg-[#1E1F21] text-white py-16">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue chez So Flow</h1>
      <p className="text-lg mb-6">
        Le logiciel SaaS qui simplifie la gestion des commissions de vos apporteurs d'affaires, tout en permettant un suivi en temps réel et des paiements instantanés.
      </p>
      <a
        href="#features"
        className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-indigo-50"
      >
        Découvrir nos fonctionnalités
      </a>
    </div>
  </section>

  {/* Section À propos de So Flow */}
  <section id="about" className="py-16 bg-[#141414]">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-6">À propos de So Flow</h2>
      <p className="text-white text-xl text-center max-w-2xl mx-auto mb-12">
        So Flow est la solution idéale pour les entreprises souhaitant optimiser et automatiser la gestion des commissions de leurs apporteurs d'affaires. Grâce à notre plateforme, vous pouvez suivre en temps réel les commissions générées et les payer instantanément, sans effort administratif supplémentaire.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <img src="/1.webp" alt="Gestion des commissions" className="mx-auto w-96 mb-4" />
          <h3 className="text-xl font-semibold">Gestion des Commissions</h3>
          <p className="text-white mt-2">
            Automatisez et gérez facilement toutes les commissions de vos apporteurs d'affaires, sans erreurs.
          </p>
        </div>

        <div className="text-center">
          <img src="/2.webp" alt="Suivi en temps réel" className="mx-auto w-96 mb-4" />
          <h3 className="text-xl font-semibold">Suivi en Temps Réel</h3>
          <p className="text-white mt-2">
            Consultez les commissions en temps réel et restez informé des paiements à venir et des performances.
          </p>
        </div>

        <div className="text-center">
          <img src="/3.webp" alt="Paiements instantanés" className="mx-auto w-96 mb-4" />
          <h3 className="text-xl font-semibold">Paiements Instantanés</h3>
          <p className="text-white mt-2">
            Effectuez des paiements immédiats, rapides et sécurisés, directement depuis So Flow.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Section Fonctionnalités */}
  <section id="features" className="py-16 bg-[#141414]">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Nos Fonctionnalités</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Fonctionnalité 1 */}
        <div className="bg-[#1E1F21] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Suivi des Commissions</h3>
          <p className="text-gray-600">
            Suivez facilement toutes les commissions de vos apporteurs d'affaires en un seul endroit.
          </p>
        </div>
        {/* Fonctionnalité 2 */}
        <div className="bg-[#1E1F21] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Rapports et Analyses</h3>
          <p className="text-gray-600">
            Recevez des rapports détaillés sur les performances de vos apporteurs et optimisez vos stratégies.
          </p>
        </div>
        {/* Fonctionnalité 3 */}
        <div className="bg-[#1E1F21] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Paiements Automatisés</h3>
          <p className="text-gray-600">
            Gagnez du temps avec les paiements automatisés, sans aucun effort administratif.
          </p>
        </div>
        {/* Fonctionnalité 4 */}
        <div className="bg-[#1E1F21] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sécurité des Transactions</h3>
          <p className="text-gray-600">
            Bénéficiez d'une sécurité renforcée pour tous les paiements, avec une protection avancée des données.
          </p>
        </div>
        {/* Fonctionnalité 5 */}
        <div className="bg-[#1E1F21] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Interface Intuitive</h3>
          <p className="text-gray-600">
            Profitez d'une interface utilisateur simple et intuitive, facile à prendre en main.
          </p>
        </div>
        {/* Fonctionnalité 6 */}
        <div className="bg-[#1E1F21] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Support Client Dédié</h3>
          <p className="text-gray-600">
            Une équipe de support dédiée est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Section CTA */}
  <section className="bg-[#1E1F21] text-white py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Prêt à optimiser la gestion de vos commissions ?</h2>
      <p className="text-lg mb-6">
        Rejoignez So Flow dès aujourd'hui et découvrez comment notre solution peut transformer votre processus de gestion des commissions.
      </p>
      <a
        href="/signup"
        className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-indigo-50"
      >
        Commencer maintenant
      </a>
    </div>
  </section>
</Container>
)