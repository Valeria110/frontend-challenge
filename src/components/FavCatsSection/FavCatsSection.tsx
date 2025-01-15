"use client";

import { useAppSelector } from "@/hooks/store-hooks";
import { Card } from "../Card/Card";

export const FavCatsSection = () => {
  const { favs } = useAppSelector((state) => state.favs);
  if (!Object.entries(favs).length) {
    return <p>You have not added any favorite cats yet</p>;
  }

  return (
    <section className="flex flex-wrap gap-8 px-16 py-12">
      {Object.entries(favs).map(([catId, catData]) => (
        <Card key={catId} catData={catData} />
      ))}
    </section>
  );
};
