import "./Faq.css";
import Tipografia from "@/componentes/Tipografia";
import faq from "../../../assets/faq.json";
import Acordeao from "@/componentes/Acordeao/Acordeao";
import AcordeaoConteudo from "@/componentes/Acordeao/AcordeaoConteudo";
import AcordeaoTitulo from "@/componentes/Acordeao/AcordeaoTitulo";
import AcordeaoDescricao from "@/componentes/Acordeao/AcordeaoDescricao";

const Faq = () => {
  return (
    <section className="secao__duvidas">
      <Tipografia elemento="h2" variante="h2" cor="azul">
        Dúvidas frequentes
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        Antes de entrar em contato, verifique se sua dúvida está respondida em
        nossa FAQ!
      </Tipografia>
      <Acordeao>
        {faq.map((duvida) => (
          <AcordeaoConteudo key={duvida.id}>
            <AcordeaoTitulo titulo={duvida.titulo} id={duvida.id} />
            <AcordeaoDescricao descricao={duvida.descricao} id={duvida.id} />
          </AcordeaoConteudo>
        ))}
      </Acordeao>
    </section>
  );
};

export default Faq;
