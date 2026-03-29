const API_URL = "https://s3ada-store3-production.up.railway.app";

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};
