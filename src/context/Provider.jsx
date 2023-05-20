import { createContext } from "react";
import data from "../data/data.json";

export const ContentContext = createContext(null);

export default function Provider({ children }) {
  return (
    <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
  );
}
