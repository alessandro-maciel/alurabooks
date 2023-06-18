import Header from "./Header";
import SecaoLivros from "./SecaoLivros";
import useMaisVendidos from "../../hooks/useMaisVendidos";
import useUltimosLancamentos from "../../hooks/useUltimosLancamentos";

export default function Home(){
    const { livros: ultimosLancamentos } = useUltimosLancamentos();
    const { livros: maisVendidos } = useMaisVendidos();

    return (
        <>
            <Header />
            <SecaoLivros titulo='ÚLTIMOS LANÇAMENTOS' livros={ultimosLancamentos}/>
            <SecaoLivros titulo='MAIS VENDIDOS' livros={maisVendidos}/>
        </>
    );
}