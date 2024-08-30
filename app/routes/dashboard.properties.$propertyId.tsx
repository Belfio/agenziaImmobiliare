import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RetrofitLoanOptions } from "~/@/components/RetrofitLoanOptions";
import pp from "~/@/lib/propertyProcessing";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Platform" },
    {
      name: "Green Lending 1 - Platform",
      content: "GL1 suppoerts the green transition of your mortgage portfolio.",
    },
  ];
};

export default function Index() {
  const { property } = useLoaderData<typeof loader>();

  return (
    <div className="font-sans p-4 pr-8">
      <h1 className="text-2xl font-bold mb-4">Property Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>{property.address}</p>
          <p>{property.city}</p>
          <p>{property.propertyType}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Latest Valuation</h2>
          <p className="text-2xl font-bold">£{property.latestValuation}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Customer Insights</h2>
          <p>
            {property.firstTimeBuyer ? "First-time buyer" : "Existing owner"}
          </p>
          <p>Purchased {property.purchaseYear}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Property Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Current</h3>
          <p>
            Latest Energy Rating:{" "}
            <span
              className={`px-2 py-1 rounded ${
                property.currentEnergyRating === "D" ? "bg-yellow-300" : ""
              }`}
            >
              {property.currentEnergyRating} ({property.currentEER} EER)
            </span>
          </p>
          <p>
            Virtual Energy Rating:{" "}
            <span
              className={`px-2 py-1 rounded ${
                property.virtualEnergyRating === "C" ? "bg-green-300" : ""
              }`}
            >
              {property.virtualEnergyRating} ({property.virtualEER} EER)
            </span>
          </p>
          <p>Carbon emissions: {property.currentCarbonEmissions} tn of CO₂</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Potential</h3>
          <p>
            Energy Rating:{" "}
            <span
              className={`px-2 py-1 rounded ${
                property.potentialEnergyRating === "B" ? "bg-green-500" : ""
              }`}
            >
              {property.potentialEnergyRating} ({property.potentialEER} EER)
            </span>
          </p>
          <p>
            Carbon emissions: {property.potentialCarbonEmissions} tn of CO₂ (
            {property.carbonReductionPercentage}%)
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Portfolio Impact</h3>
          <p>Impact: {property.portfolioImpact}</p>
          <h4 className="font-semibold mt-2">Customer</h4>
          <p>Savings: up to £{property.customerSavings} per year</p>
          <h4 className="font-semibold mt-2">Bank</h4>
          <p>Savings: {property.bankSavings}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Mortgage Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-amber-50 p-4 rounded">
        <div>
          <h3 className="text-lg font-semibold mb-2">Outstanding Balance</h3>
          <p className="text-xl">£{property.outstandingBalance}</p>
          <p>{property.ltv}% LTV</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Loan</h3>
          <p>APR: {property.apr}%</p>
          <p>End of loan: {property.endOfLoan}</p>
          <p>LTV at end of loan: {property.ltvAtEndOfLoan}%</p>
          <p>Time left: {property.timeLeft}</p>
        </div>
      </div>
      <div className="mt-8">
        <RetrofitLoanOptions />
      </div>
    </div>
  );
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  console.log("loader in the property page");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const propertyId = params.propertyId;
  if (!propertyId) {
    return { property: "no propId" };
  }
  const property = await pp.loadProperty(String(propertyId));
  // if (property) {
  //   pp.postProcessProperty(property);
  // }

  return { property };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
