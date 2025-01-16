"use client";

import { ICat } from "@/types/cat.entity";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BASE_API_URL = "https://api.thecatapi.com";
const getAllCats = async (page: number) => {
  const res = await fetch(
    `${BASE_API_URL}/v1/images/search?limit=10&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error while fetching data");
  }

  const data: ICat[] = await res.json();
  return data;
};

export const CardsSection = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCats(page);
      setCats((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
      setIsFetching(false);
    };
    fetchData();
  }, [isFetching]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCats(page);
      setCats((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    };

    fetchData();

    const scrollHandler = (e: Event) => {
      const target = e.target as Document;
      const { scrollHeight, scrollTop, clientHeight } = target.documentElement;

      if (scrollHeight - (scrollTop + clientHeight) < 40) {
        setIsFetching(true);
      }
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <section className="flex flex-wrap gap-8 px-16 py-12">
        {cats.map((catData) => (
          <Card key={uuidv4()} catData={catData} />
        ))}
      </section>
      {isFetching && (
        <div className="flex justify-center p-2 mt-4 mb-9">
          <p className="">... загружаем еще котиков ...</p>
        </div>
      )}
    </>
  );
};
