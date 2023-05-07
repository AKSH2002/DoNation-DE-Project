import { useQuery } from "@tanstack/react-query"
import { useState } from "react";

export const useSearchBooldHook = () => {
  const [searchFor, setSearchFor] = useState({
    bloodGroup: "",
    city: "",
    pincode: "",
  });

    const { data, isError, error, isLoading, refetch } = useQuery(['blood-doners-data'],async () => {
        return fetch('http://localhost:8000/search-for-blood').then(res => res.json())
      })
  return {
    data,
    isError,
    error,
    isLoading,
    refetch,
    searchFor,
    setSearchFor
  }
}
