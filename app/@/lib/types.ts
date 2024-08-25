export type User = {
  id: string;
  email: string;
  roles: string[];
  createdAt: string;
  name: string;
  avatar: string;
  surname: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type Cred = {
  email: string;
  passwordHash: string;
  createdAt: string;
  userId: string;
};
export type Intervention = {
  key: string;
  value: string;
};
export type Property = {
  propertyAttributes: {
    address: string;
    potential_eer: number;
    potential_co2_emissions: number;
    current_co2_emissions: number;
    potential_co2_reduction_pc: number;
    potential_savings: number;
    number_of_habitable_rooms: number;
    built_form: string;
    "number of habitable rooms": number;
    "built form": string;
    local_authority_area: string;
    total_floor_area: number;
    citytown: string;
  };
  valueDetails: {
    latestValuation: number;
    dateOfLatestValuation: string;
    yearOfLatestValuation: string;
    loanOutstanding: number;
    portfolioImpact: string;
  };
  predictedEfficiency: {
    predicted_eer: number;
  };
  potentialSavingsFromEPC: {
    "total potential savings": number;
    total_potential_savings: number;
  };
  landRegistryData: {
    price_paid: number;
    date_of_transfer: string;
  }[];
  maxCashback: number;
  maxAPR: number;
  retrofitVariables:
    | {
        option: string;
        currentValue: number;
        checked: boolean;
        retrofittable: boolean;
      }[]
    | 0;
  retrofitOptions: {
    option_num: number;
    expectedNewEER: number;
    expectedNewEPCBand: string;
    indicativeCosts: number;
    predictedValueUplift: number;
    predictedFutureValuation: number;
    interventions: Intervention[];
    indicative_costs: string;
  }[];
  originalRetrofitVariables: {
    option: string;
    currentValue: number;
    checked: boolean;
    retrofittable: boolean;
  }[];
  originalRetrofitOptions: {
    option: string;
    currentValue: number;
    checked: boolean;
    retrofittable: boolean;
  }[];
  formatted: boolean;
  LandRegistry: {
    price_paid: number;
    date_of_transfer: string;
  }[];
};
export type PropertyData = {
  properties: Property[];
  addressOptions: string[];
  propertiesWithLandRegistryData: Property[];
};
