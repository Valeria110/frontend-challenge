import { ICat } from "@/types/cat.entity";
import { HeartBtn } from "../HeartBtn/HeartBtn";
import { StoreProvider } from "../StoreProvider/StoreProvider";

interface IProps {
  catData: ICat;
}

export const Card = ({ catData }: IProps) => {
  const { id, url, width, height } = catData;

  return (
    <StoreProvider>
      <div className="relative w-56 h-56 flex justify-center items-center overflow-hidden hoverable:hover:shadow-lg hoverable:hover:shadow-black/30 hoverable:hover:cursor-pointer transition-shadow duration-300 ease-in-out">
        <img
          className="absolute object-cover w-full h-full"
          src={url}
          alt="cat image"
          width={width}
          height={height}
        />
        <HeartBtn catData={catData} />
      </div>
    </StoreProvider>
  );
};
