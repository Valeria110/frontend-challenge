import { FavCatsSection } from "@/components/FavCatsSection/FavCatsSection";
import { StoreProvider } from "@/components/StoreProvider/StoreProvider";

export default function FavsPage() {
  return (
    <StoreProvider>
      <FavCatsSection />
    </StoreProvider>
  );
}
