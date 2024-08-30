import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";

interface LoanOption {
  id: number;
  loanAmount: number;
  apr: number;
  cashback: number;
  retrofitItems: string[];
  monthlyPayment: number;
  duration: string;
  customerSavings: number;
  customerValueUplift: number;
  bankPredictedEPC: string;
  bankFutureLTV: number;
  bankCarbonReduction: number;
}

const loanOptions: LoanOption[] = [
  {
    id: 1,
    loanAmount: 1400,
    apr: 15.3,
    cashback: 0,
    retrofitItems: [
      "Roof insulation: 270mm loft insulation",
      "Wall insulation: Filled cavity",
    ],
    monthlyPayment: 24.97,
    duration: "8y 3m",
    customerSavings: 82,
    customerValueUplift: 3140,
    bankPredictedEPC: "C",
    bankFutureLTV: 54,
    bankCarbonReduction: 0.4,
  },
  {
    id: 2,
    loanAmount: 16955,
    apr: 7.0,
    cashback: 0,
    retrofitItems: [
      "Roof insulation: 270mm loft insulation",
      "Wall insulation: Filled cavity",
      "Energy efficiency rating of main heating: Very Good",
      "Floor insulation: Insulated",
      "Heat recovery waste water system: Waste water heat recovery",
      "Area with thermostat control: More than 1 room thermostat",
      "Solar panels: 50%",
    ],
    monthlyPayment: 225.93,
    duration: "8y 3m",
    customerSavings: 257,
    customerValueUplift: 27940,
    bankPredictedEPC: "B",
    bankFutureLTV: 54,
    bankCarbonReduction: 1.3,
  },
  {
    id: 3,
    loanAmount: 400,
    apr: 7.0,
    cashback: 0,
    retrofitItems: ["Roof insulation: 270mm loft insulation"],
    monthlyPayment: 5.33,
    duration: "8y 3m",
    customerSavings: 65,
    customerValueUplift: 740,
    bankPredictedEPC: "C",
    bankFutureLTV: 54,
    bankCarbonReduction: 0.3,
  },
];

export function RetrofitLoanProposals() {
  return (
    <div className="space-y-6">
      {loanOptions.map((option) => (
        <Card key={option.id} className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg">Option {option.id}</CardTitle>
            <div className="flex justify-between items-center">
              <div>Loan amount: £{option.loanAmount.toLocaleString()}</div>
              <div className="flex items-center space-x-4">
                <div>APR: {option.apr}%</div>
                <Slider
                  defaultValue={[option.apr]}
                  max={20}
                  step={0.1}
                  className="w-[100px]"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div>Cashback: £{option.cashback}</div>
                <Slider
                  defaultValue={[option.cashback]}
                  max={1000}
                  step={10}
                  className="w-[100px]"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Retrofit items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm">
                    {option.retrofitItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Loan details</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Monthly payment: £{option.monthlyPayment}</p>
                  <p>Cashback: £{option.cashback}</p>
                  <p>Duration: {option.duration}</p>
                  <p className="text-xs text-gray-500">(same as mortgage)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Loan impact</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <h4 className="font-semibold">Customer</h4>
                  <p>
                    Predicted energy savings: £{option.customerSavings} per year
                    🟠
                  </p>
                  <p>
                    Predicted value uplift: £{option.customerValueUplift} 🟠
                  </p>
                  <h4 className="font-semibold mt-2">Bank</h4>
                  <p>
                    Predicted EPC: {option.bankPredictedEPC} →{" "}
                    {option.bankPredictedEPC}
                  </p>
                  <p>Predicted future LTV: {option.bankFutureLTV}% 🟠</p>
                  <p>
                    Carbon emissions reduction: {option.bankCarbonReduction} tn
                    CO₂e/year 🟠
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 flex justify-end">
              <Button>APPLY</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
