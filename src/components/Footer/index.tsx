import Novidades from "./Novidades";
import RegistroLogin from "./RegistroLogin";
import Rodape from "./Rodape";

export default function Footer(){
    return (
        <>
            <RegistroLogin />
            <Novidades />
            <Rodape />
        </>
    );
}