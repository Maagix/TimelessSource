export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function capitalizeWord(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const rest = word.slice(1).toLowerCase();

  return firstLetter + rest;
}

export const MEN_LOOKBOOK_COVER =
  "https://res.cloudinary.com/brunellocucinelli/image/upload/dpr_auto,f_auto,q_auto/v1/homepage-2023/time-out/07-11-2023_riga_3_style_06_HP_B_Brunello_Cucinelli";

export const WOMEN_LOOKBOOK_COVER =
  "https://res.cloudinary.com/brunellocucinelli/image/upload/dpr_auto,f_auto,q_auto/v1/homepage-2023/time-out/07-11-2023_riga_3_style_06_HP_A_Brunello_Cucinelli";

export const LANDING_PAGE_MAIN_IMAGE =
  "https://res.cloudinary.com/brunellocucinelli/image/upload/dpr_auto,f_auto,q_auto/v1/homepage-2023/time-out/07-11-2023_riga_4_style_01_HP_Brunello_Cucinelli";
