import { useQuery } from "@tanstack/react-query";
import { getLookbook } from "../services/apiLookbook";

function useLookbook() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["lookbook"],
    queryFn: getLookbook,
  });

  return { data, isLoading, error };
}

export default useLookbook;
