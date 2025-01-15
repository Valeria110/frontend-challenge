"use client";

import { useState } from "react";
import emptyHeart from "../../../public/empty-heart.svg";
import clickedHeart from "../../../public/clicked-heart.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/hooks/store-hooks";
import { addFavCat, removeFavCat } from "@/features/favs.slice";
import { ICat } from "@/types/cat.entity";

interface IProps {
  catData: ICat;
}

export const HeartBtn = ({ catData }: IProps) => {
  const { id } = catData;

  const { favs } = useAppSelector((state) => state.favs);
  const dispatch = useAppDispatch();

  const isCatFav = favs[id] ? true : false;
  const [isFav, setIsFav] = useState<boolean>(isCatFav);

  const handleClick = () => {
    setIsFav(!isFav);
    if (isFav) {
      dispatch(removeFavCat(id));
    } else {
      dispatch(addFavCat(catData));
    }
  };

  return (
    <button
      className="absolute bottom-0 right-0 flex justify-center items-center p-2 hoverable:hover:cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={isFav ? clickedHeart : emptyHeart}
        alt="heart image"
        width={48}
        height={48}
      />
    </button>
  );
};
