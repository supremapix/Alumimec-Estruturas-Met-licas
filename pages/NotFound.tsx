import React from "react";
import EnhancedSEO from "../components/EnhancedSEO";
import ContactActions from "../components/ContactActions";
export default function NotFound() {
  return (
    <>
      <EnhancedSEO
        title="Página não encontrada | Alumimec"
        description="Retorne aos serviços e contatos da Alumimec."
        canonical="/404"
        noindex
      />
      <section className="section wrap">
        <p className="eyebrow">ERRO 404</p>
        <h1>Página não encontrada.</h1>
        <p>
          O endereço não existe ou foi alterado. Encontre os serviços, o acervo
          e os contatos da Alumimec na página inicial.
        </p>
        <a className="text-link" href="/">
          Voltar ao início →
        </a>
        <ContactActions />
      </section>
    </>
  );
}
