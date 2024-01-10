import { useQuery } from "@tanstack/react-query";
import { getShop } from "../services/apiShop";

function useShop() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["shop"],
    queryFn: getShop,
  });

  return { data, isLoading, error };
}

export default useShop;
