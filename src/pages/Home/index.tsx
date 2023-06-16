import Header from "./components/Header";
import SecaoLivros from "./components/SecaoLivros";
import useUltimosLancamentos from "../../hooks/useUltimosLancamentos";
import useMaisVendidos from "../../hooks/useMaisVendidos";

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