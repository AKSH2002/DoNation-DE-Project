import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";

export const useSearchHospitalHook = () => {
  const [searchFor, setSearchFor] = useState({
    state: "",
    district: "",
    pincode: "",
  });
  
  const { data: originalData, isError, error, isLoading, refetch } = useQuery(['hospitals-data'],async () => {
    return fetch('http://localhost:8000/search-for-hospital').then(res => res.json())
  })
  const [data, setData] = useState(originalData?.data ?? [])

      const handleFilter = () => {
        const filteredData = originalData?.data?.filter(item => {
          if (searchFor?.state !== "" && item.State !== searchFor?.state) {
            return false;
          }
          if (searchFor?.district !== "" && item.District !== searchFor?.district) {
            return false;
          }
          if (searchFor?.pincode !== "" && item.Pin_Code !== parseInt(searchFor?.pincode)) {
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
