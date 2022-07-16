import { Cards } from "../Cards/Cards";
import { Carrousel } from "../Carrousel/Carrousel";
import { Collection } from "../Collection/Collections";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Header2 } from "../Header/Header2";
import { Menu } from "../Menu/Menu";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const PageHome = () => {
  return (
    <>
      <header>
        <Header />
        <Header2/>
      </header>

      <section style={{ background: "white" }}>

        <nav>
          <Menu />
        </nav>

        <article>
          <Carrousel />
        </article> 

        <article>
          <Collection/>
        </article>
        
        <article>
          <Cards />
        </article>

        <article>
          <SocialMedia />
        </article>

      </section>

        <footer>
          <Footer />
        </footer>

    </>
  );
};
