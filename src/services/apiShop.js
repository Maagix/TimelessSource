import supabase from "./supabase";

export async function getShop() {
  const { data, error } = await supabase.from("shop").select("*");

  if (error) {
    console.error(error);
    throw new Error("Shop could not be loaded");
  }

  return { data };
}
