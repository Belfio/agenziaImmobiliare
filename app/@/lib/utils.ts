import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PropertyTableColumnsType } from "../data/tableData";
import { PropertyData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parsePropertyForTable(
  propertiesData: PropertyData
): PropertyTableColumnsType[] {
  const { properties } = propertiesData;
  return properties.map((property) => {
    return {
      id: property.propertyAttributes.BUILDING_REFERENCE_NUMBER || "id",
      address: property.propertyAttributes.address || "address",
      status:
        String(property.propertyAttributes.current_co2_emissions) || "status",
      label: property.propertyAttributes.built_form || "label",
      priority: property.propertyAttributes.potential_epc_band || "priority",
      EPC: property.propertyAttributes.current_epc_rating || "EPC",
    };
  });
}
