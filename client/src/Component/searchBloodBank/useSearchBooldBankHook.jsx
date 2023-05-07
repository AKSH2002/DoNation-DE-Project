import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";

export const useSearchBooldBankHook = () => {
  const [searchFor, setSearchFor] = useState({
    state: "",
    city: "",
    pincode: "",
  });
  
  const { data: originalData, isError, error, isLoading, refetch } = useQuery(['blood-banks-data'],async () => {
    return fetch('http://localhost:8000/search-for-blood-bank').then(res => res.json())
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
