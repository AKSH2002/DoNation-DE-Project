import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";

export const useSearchBloodHook = () => {
  const [searchFor, setSearchFor] = useState({
    // bloodGroup: "",
    city: "",
    pincode: "",
  });
  
  const { data: originalData, isError, error, isLoading, refetch } = useQuery(['blood-camps-data'],async () => {
    return fetch('http://localhost:8000/search-for-user').then(res => res.json())
  })
  const [data, setData] = useState(originalData?.data ?? [])

      const handleFilter = () => {
        const filteredData = originalData?.data?.filter(item => {
          // if (searchFor?.bloodGroup !== "" && item.BloodGroup !== searchFor?.bloodGroup) {
          //   return false;
          // }
          if (searchFor?.city !== "" && item.City !== searchFor?.city) {
            return false;
          }
          if (searchFor?.pincode !== "" && item.Pincode !== parseInt(searchFor?.pincode)) {
            return false;
          }
          // if (searchFor?.dateOfCamp !== "" && item.dateOfCamp !== parseInt(searchFor?.dateOfCamp)) {
          //   return false;
          // }
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



// import { useQuery } from "@tanstack/react-query"
// import { useState } from "react";

// export const useSearchBooldHook = () => {
//   const [searchFor, setSearchFor] = useState({
//     bloodGroup: "",
//     city: "",
//     pincode: "",
//   });

//     const { data, isError, error, isLoading, refetch } = useQuery(['blood-doners-data'],async () => {
//         return fetch('http://localhost:8000/search-for-blood').then(res => res.json())
//       })
//   return {
//     data,
//     isError,
//     error,
//     isLoading,
//     refetch,
//     searchFor,
//     setSearchFor
//   }
// }
