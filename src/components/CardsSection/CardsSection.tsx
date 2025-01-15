import { ICat } from "@/types/cat.entity";
import { Card } from "../Card/Card";

const BASE_API_URL = "https://api.thecatapi.com";
const getAllCats = async () => {
  const res = await fetch(`${BASE_API_URL}/v1/images/search?limit=10&page=1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error while fetching data");
  }

  const data: ICat[] = await res.json();
  return data;
};

export const CardsSection = async () => {
  const data = await getAllCats();
  return (
    <section className="flex flex-wrap gap-8 px-16 py-12">
      {data.map((catData) => (
        <Card key={catData.id} catData={catData} />
      ))}
    </section>
  );
};
