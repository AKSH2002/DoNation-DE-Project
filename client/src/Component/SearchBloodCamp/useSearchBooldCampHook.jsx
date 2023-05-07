import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";

export const useSearchBooldCampHook = () => {
  const [searchFor, setSearchFor] = useState({
    state: "",
    city: "",
    pincode: "",
    dateOfCamp:"",
  });
  
  const { data: originalData, isError, error, isLoading, refetch } = useQuery(['blood-camps-data'],async () => {
    return fetch('http://localhost:8000/search-for-blood-camp').then(res => res.json())
  })
  const [data, setData] = useState(originalData?.data ?? [])

      const handleFilter = () => {
        const filteredData = originalData?.data?.filter(item => {
          if (searchFor?.state !== "" && item.State !== searchFor?.state) {
            return false;
          }
          if (searchFor?.city !== "" && item.City !== searchFor?.city) {
            return false;
          }
          if (searchFor?.pincode !== "" && item.Pincode !== parseInt(searchFor?.pincode)) {
            return false;
          }
          if (searchFor?.dateOfCamp !== "" && item.dateOfCamp !== parseInt(searchFor?.dateOfCamp)) {
            return false;
          }
          return true;
        });
        setData(filteredData);
      }

  return {
    data,
    isError,
    error,
    isLoading,
    refetch,
    handleFilter,
    searchFor,
    setSearchFor
  }
}
