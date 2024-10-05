
export interface CommissionPlan {
    commissionRate: number; // % de commission
    duration: string; // Durée (par exemple : "1 mois", "6 mois")
    frequency: string; // Fréquence (par exemple : "mensuel", "hebdomadaire")
    affiliate: {
      _id: string; // ID de l'affilié
      name: string; // Nom de l'affilié
    };
  }
  
