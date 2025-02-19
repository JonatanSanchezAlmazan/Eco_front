import GallerySlider from '../../Components/GallerySlider/GallerySlider';
import { images } from '../../utils/images';
import './Ecoturismo.css';

const Ecoturismo = () => {
  return (
    <main>
      <section className="ecoturismo">
        <h2 className="ecoturismo__heading">Descubre el Ecoturismo en España</h2>
        <GallerySlider images={images} />
        <h2 className="ecoturismo__heading--info">¿Qué es el Ecoturismo?</h2>
        <section className="ecoturismo__info">
          <article>
            <p>El ecoturismo es una forma de turismo responsable que se centra en experiencias basadas en la naturaleza, fomenta la conciencia ambiental y apoya la conservación del entorno y el bienestar de las comunidades locales.</p>
            <br />
            <p>Al optar por el ecoturismo, los viajeros pueden disfrutar de destinos únicos y actividades emocionantes mientras minimizan su impacto ambiental y contribuyen positivamente a las economías locales.</p>
            <br />
            <p>En Ecoturismo, nos comprometemos a ofrecer opciones de alojamiento y actividades que cumplen con los principios del ecoturismo, permitiéndote explorar la belleza natural de España de manera sostenible y respetuosa.</p>
            <br />
          </article>
          <div>
            <img src="/assets/eco1.webp" alt="imagen ecoturismo" loading="lazy" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Ecoturismo;
