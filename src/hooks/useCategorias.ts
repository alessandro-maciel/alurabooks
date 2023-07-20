import { useEffect, useState } from "react";
import http from "../http";
import CategoriaType from "../types/CategoriaType";

export default function useCategorias() {
    const [categorias, setCategorias] = useState<CategoriaType[]>([]);

    useEffect(() => {
        http.get<CategoriaType[]>('/categorias')
            .then(response => setCategorias(response.data))
            .catch(error => console.log(error))
    },[]);

    return { categorias };
}