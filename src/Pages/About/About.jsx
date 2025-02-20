import AboutValuesCard from '../../Components/AboutValuesCard/AboutValuesCard';
import './About.css';

const About = () => {
  return (
    <main>
      <h2 className="h2" style={{marginTop:'150px'}}>Sobre Ecoturismo</h2>
      <section className="content about">
        <article className="about__info">
          <p>En Ecoturismo, nos apasiona conectar a los viajeros con experiencias únicas y sostenibles en toda España. Nuestra misión es promover el turismo responsable y apoyar a las comunidades locales mientras ofrecemos alojamientos y actividades que respetan y celebran el medio ambiente.</p>
          <br />
          <p>Fundada en 2024, Ecoturismo nació de la idea de que viajar puede ser tanto enriquecedor como responsable. Trabajamos en estrecha colaboración con propietarios de alojamientos y organizadores de actividades que comparten nuestra visión de un turismo más verde y consciente.</p>
          <br />
          <p>Al elegir Ecoturismo, no solo estás eligiendo un viaje, estás eligiendo ser parte de un movimiento hacia un futuro más sostenible para el turismo en España.</p>
        </article>
        <article className="about__images">
          <div>
            <img src="/assets/eco1.webp" alt="imagen ecoturismo" loading="lazy" />
          </div>
          <div>
            <img src="/assets/eco2.webp" alt="imagen ecoturismo" loading="lazy" />
          </div>
        </article>
      </section>
      <h2 className="h2"> Nuestros Valores</h2>
      <section className="content about__values">
        <AboutValuesCard src="/icons/sostenibilidad.webp" title="Sostenibilidad" text="Promovemos practicás sostenibles en todo nuestros alojamientos y actividades" />
        <AboutValuesCard src="/icons/comunidad.webp" title="Comunidad" text="Apoyamos a las comunidades locales y fomentamos el intercambio cultural" />
        <AboutValuesCard src="/icons/proteccion-del-medio-ambiente.webp" title="Impacto global" text="Contribuimos a la conservación del medio ambiente a nivel local y global." />
      </section>
    </main>
  );
};

export default About;
