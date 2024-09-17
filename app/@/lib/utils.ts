import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PropertyTableColumnsType } from "../data/tableData";
import { PropertyData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parsePropertyForTable(
  propertiesData: PropertyData | undefined
): PropertyTableColumnsType[] {
  if (!propertiesData) {
    return [];
  }
  const { properties } = propertiesData;
  return properties.map((property) => ({
    id: property.propertyAttributes.BUILDING_REFERENCE_NUMBER || "id",
    address:
      String(property.propertyAttributes.address).toLowerCase() || "address",
    status:
      String(property.propertyAttributes.current_co2_emissions) || "status",
    label: property.propertyAttributes.built_form || "label",
    priority: property.propertyAttributes.potential_epc_band || "priority",
    epc:
      property.propertyAttributes.current_epc_rating ||
      property.propertyAttributes.potential_epc_band + "*" ||
      "N/A",
    postcode: property.propertyAttributes.postcode || "postcode",
    emission: property.propertyAttributes.current_co2_emissions || "N/A",
    emissionIntensity:
      parseFloat(
        parseFloat(
          String(
            property.propertyAttributes.current_co2_emissions /
              property.propertyAttributes.total_floor_area
          )
        ).toFixed(2)
      ) || "N/A",
  }));
}
