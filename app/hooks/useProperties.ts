import { useEffect, useState } from "react";
import { PropertyData } from "~/@/lib/types";
import localforage from "localforage";

export function useProperties() {
  const [isLoading, setIsLoading] = useState(true);
  const [propertyData, setPropertyData] = useState<PropertyData | null>(null);
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
  return { propertyData, isLoading, loadPropsAsync };
}
