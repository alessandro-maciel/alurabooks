import livroApache from '../assets/livros/livro_apache_kafka_e_spring_boot.png'
import livroLideranca from '../assets/livros/livro_lideranca_em_design.png'
import livroJavaScript from '../assets/livros/livro_javascript_assertivo.png'
import { LivroType } from '../types/LivroType';

export default function useMaisVendidos(){
     const livros: LivroType[] = [
        {
            id: 2,
            titulo: 'Liderença em Design',
            descricao: 'Habilidades de gestão para alavancar sua carreira',
            autor: 'Victor Zanini',
            link_da_imagem: livroLideranca,
            preco: 'R$ 29,90',
        },
        {
            id: 3,
            titulo: 'JavaScript Assertivo',
            descricao: 'Testes e qualidade de código em todas as camadas da aplicação',
            autor: 'Gabriel Ramos',
            link_da_imagem: livroJavaScript,
            preco: 'R$ 22,75',
        },
        {
            id: 1,
            titulo: 'Apache Kafka e Spring Boot',
            descricao: 'Comunicação assíncrona entre microsserviços',
            autor: 'Eduardo Felipe',
            link_da_imagem: livroApache,
            preco: 'R$ 32,99',
        },
     ];

     return { livros }
}