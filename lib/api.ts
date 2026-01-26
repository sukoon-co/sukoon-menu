const BASE_URL =
  "https://script.google.com/macros/s/AKfycbxJyAswXTE3PrRB1_5TMosNcmnZNp-XfWj6v7ufx8kwlsRlM_O56kbrycwAxXPR1_Di/exec";

export interface ApiResponse<T> {
  data: T[];
  status: string;
}

export interface ApiCategory {
  id: number;
  name: string;
  subTitle: string;
  image: string;
}

export interface ApiDrink {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export async function fetchCategories(lang: "en" | "ar"): Promise<ApiResponse<ApiCategory>> {
  const response = await fetch(`${BASE_URL}?action=categories&lang=${lang}`, {
    redirect: "follow",
  });
  const data = await response.text();

  console.log("Raw response:", data);
  return JSON.parse(data);
}

export async function fetchDrinks(category: string, lang: "en" | "ar"): Promise<ApiResponse<ApiDrink>> {
  const response = await fetch(`${BASE_URL}?action=drinks&categoryId=${category}&lang=${lang}`, {
    redirect: "follow",
  });
  const data = await response.text();
  return JSON.parse(data);
}
