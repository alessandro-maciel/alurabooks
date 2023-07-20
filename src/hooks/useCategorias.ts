import http from "../http";
import CategoriaType from "../types/CategoriaType";
import { useQuery } from "react-query";

export default function useCategorias() {
    const { data: categorias } = useQuery('categorias', () => buscarCategorias());

    const buscarCategorias = async () => {
      const categorias = await http.get<CategoriaType[]>('/categorias');

      return categorias.data;
    }

    return { categorias };
}