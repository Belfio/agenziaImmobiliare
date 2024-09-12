import { RetrofitLoanOptions } from "~/@/components/RetrofitLoanOptions";
import { Property } from "~/@/lib/types";

export default function PropertyPage({
  property,
}: {
  property: Property | undefined;
}) {
  return (
    <div className="font-sans p-8 max-w-[1024px] ">
      <h1 className="text-2xl font-bold mb-4">Property information</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>{property?.propertyAttributes.address}</p>
          <p>{property?.propertyAttributes.citytown}</p>
          <p>{property?.propertyAttributes["built form"]}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Latest Valuation</h2>
          <p className="text-2xl font-bold">
            £{property?.valueDetails?.latestValuation || "N/A"}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Customer Insights</h2>
          {/* <p>Purchased {property?.propertyAttributes.purchase_year}</p> */}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">
        Energy efficiency profile
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Current</h3>
          <p>
            Latest Energy Rating:{" "}
            <span
              className={`px-2 py-1 rounded ${
                property?.propertyAttributes.current_epc_rating === "D"
                  ? "bg-yellow-300"
                  : ""
              }`}
            >
              {property?.propertyAttributes.current_epc_rating} (
              {property?.propertyAttributes.potential_eer} EER)
            </span>
          </p>
          <p>
            Virtual Energy Rating:{" "}
            <span className={`px-2 py-1 rounded `}>
              {property?.predictedEfficiency.predicted_eer} (
              {property?.predictedEfficiency.predicted_eer} EER)
            </span>
          </p>
          <p>
            Carbon emissions:{" "}
            {property?.propertyAttributes.current_co2_emissions} tn of CO₂
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Potential</h3>
          <p>
            Energy Rating:{" "}
            <span
              className={`px-2 py-1 rounded ${
                property?.propertyAttributes.potential_epc_band === "B"
                  ? "bg-green-500"
                  : ""
              }`}
            >
              {property?.propertyAttributes.potential_epc_band} (
              {property?.propertyAttributes.potential_eer} EER)
            </span>
          </p>
          <p>
            Carbon emissions:{" "}
            {property?.propertyAttributes.potential_co2_emissions} tn of CO₂ (
            {property?.propertyAttributes.potential_co2_reduction_pc}%)
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Mortgage Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-amber-50 p-4 rounded shadow selection:mb-12">
        <div>
          <h3 className="text-lg font-semibold mb-2">Outstanding Balance</h3>
          <p className="text-xl">
            £{property?.valueDetails?.loanOutstanding || "N/A"}
          </p>
          {/* <p>{property?.valueDetails.ltv}% LTV</p> */}
        </div>
        {/* <div>
          <h3 className="text-lg font-semibold mb-2">Loan</h3>
          <p>APR: {property?.valueDetails.apr}%</p>
          <p>End of loan: {property?.valueDetails.endOfLoan}</p>
          <p>LTV at end of loan: {property?.valueDetails.ltvAtEndOfLoan}%</p>
          <p>Time left: {property?.valueDetails.timeLeft}</p>
        </div> */}
      </div>

      <div className="mt-8">
        <RetrofitLoanOptions />
      </div>
    </div>
  );
}
