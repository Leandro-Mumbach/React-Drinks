import { useContext } from "react";
import { CategoriesContext } from "../context/CategoryProvider";

export const useCategories = () => {
  return (
    useContext(CategoriesContext)
  )
}
