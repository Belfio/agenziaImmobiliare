import { useEffect, useState } from "react";
import { OverviewPropertiesType, PropertyData } from "~/@/lib/types";
import localforage from "localforage";

export function useProperties(): {
  propertyData: PropertyData | null;
  isLoading: boolean;
  loadPropsAsync: () => void;
  propertyOverview: OverviewPropertiesType | null;
} {
  const [isLoading, setIsLoading] = useState(true);
  const [propertyData, setPropertyData] = useState<PropertyData | null>(null);
  const [propertyOverview, setPropertyOverview] =
    useState<OverviewPropertiesType | null>(null);
  useEffect(() => {
    const load = async () => {
      const cachedPropertyData = await localforage.getItem("propertyData");
      if (cachedPropertyData) {
        setPropertyData(cachedPropertyData as PropertyData);
      } else {
        console.log("Fetching....");
        fetch("/api/properties").then((res) =>
          res.json().then((data) => {
            setPropertyData(data);
            localforage.setItem("propertyData", data);
          })
        );
      }
      setIsLoading(false);
    };
    console.log();
    load();
  }, []);

  const loadPropsAsync = async () => {
    console.log("Fetching....");
    fetch("/api/properties").then((res) =>
      res.json().then((data) => {
        setPropertyData(data);
        localforage.setItem("propertyData", data);
      })
    );
  };
  useEffect(() => {
    const loadPropsOverviewAsync = async () => {
      console.log("Fetching....");
      const cachedPropertyData = await localforage.getItem("propertyOverview");
      if (cachedPropertyData) {
        setPropertyOverview(cachedPropertyData as OverviewPropertiesType);
      } else {
        fetch("/api/propertiesOverview").then((res) =>
          res.json().then((data) => {
            setPropertyOverview(data);
            localforage.setItem("propertyOverview", data);
          })
        );
      }
    };

    loadPropsOverviewAsync();
  }, []);

  return {
    propertyData,
    isLoading,
    loadPropsAsync,
    propertyOverview,
  };
}
