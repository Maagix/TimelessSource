import supabase from "./supabase";

export async function getLookbook() {
  const { data, error } = await supabase.from("lookbook").select("*");

  if (error) {
    console.error(error);
    throw new Error("Lookbook could not be loaded");
  }

  return data;
}
