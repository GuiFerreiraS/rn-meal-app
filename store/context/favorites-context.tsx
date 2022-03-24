import { createContext, ReactNode, useContext, useState } from "react";

interface IFavoriteContext {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<IFavoriteContext>({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [ids, setIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setIds((currentIds) => [id, ...currentIds]);
  };

  const removeFavorite = (id: string) => {
    setIds((currentIds) => currentIds.filter((curr) => curr !== id));
  };

  return (
    <FavoritesContext.Provider value={{ ids, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoritesContext);

export default FavoritesContextProvider;
