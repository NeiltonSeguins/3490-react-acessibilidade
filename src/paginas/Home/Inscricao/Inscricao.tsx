import "./Inscricao.css";
import Botao from "@/componentes/Botao";
import CampoDigitacao from "@/componentes/CampoDigitacao";
import Tipografia from "@/componentes/Tipografia";
import { useEffect, useRef } from "react";

const Inscricao = () => {
  const campoDigitacaoRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (campoDigitacaoRef.current) {
      campoDigitacaoRef.current.focus();
    }
  });

  return (
    <section className="secao__inscricao">
      <div className="secao__inscricao--conteudo">
        <Tipografia elemento="h2" variante="h2" cor="azul">
          Inscreva-se para ganhar descontos!
        </Tipografia>
        <Tipografia elemento="p" variante="corpo" cor="azul">
          Cadastre seu email em nossa newsletter e saiba dos descontos, cupons e
          novidades em primeira mão!
        </Tipografia>
        <form noValidate className="secao__inscricao--formulario">
          <CampoDigitacao
            type="email"
            name="inscricao"
            placeholder="Digite seu melhor endereço de email"
            ref={campoDigitacaoRef}
            style={{ width: "650px" }}
          />
          <Botao variante="primario" type="submit">
            Inscrever
          </Botao>
        </form>
      </div>
    </section>
  );
};

export default Inscricao;
