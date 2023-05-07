import { useQuery } from "@tanstack/react-query"

export const useSearchBooldHook = () => {
    const { data, isError, error, isLoading, refetch } = useQuery(['blood-doners-data'],async () => {
        const res = await fetch('http://localhost:8000/blood-bank-signup').then(res => res.json())
        return res.json();
      })
  return {
    data,
    isError,
    error,
    isLoading,
    refetch
  }
}
