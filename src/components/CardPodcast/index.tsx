import styles from './styles.module.css'

// IMAGES COVER
import capdoLogo from '../../assets/images/img-podcasts/img-cover/capdo_logo.png'

// IMAGES EPS
import capdo_75 from '../../assets/images/img-podcasts/img-eps/capdo_75.jpg'
import capdo_81 from '../../assets/images/img-podcasts/img-eps/capdo_81.png'
import capdo_85 from '../../assets/images/img-podcasts/img-eps/capdo_85.png'

// OTHERS
import CardEpMini from '../CardEpMini'

// type CardPodcastProps = {
//   img: string,
//   title: string,
//   followers: number,
//   description: string,

// }

export function CardPodcast () {
  return (
    <div className={styles.containerCard}>
      <div className={styles.imgPodcast}>
        <a href='#'>
          <img src={capdoLogo} />
        </a>
      </div>

      <div className={styles.infoPodcast}>
        <div className={styles.podcastName}>
          {/* <h2>SpaceTodayasdadadadadas <label>123.987 seguidores</label></h2> */}
          <h2>
            <span>Ciência Ao Pé Do Ouvido</span> 
            <label>123.987 seguidores</label>
          </h2>
          <p><strong>Descrição:</strong> Ciência Ao Pé Do Ouvido explora o fascinante mundo da ciência de maneira simples e acessível. Cada episódio traz descobertas, curiosidades e histórias inspiradoras, com o objetivo de desmistificar temas complexos e aproximar a ciência do nosso cotidiano.</p>

          
          <h3>Episódios Recentes:</h3>
          <div className={styles.ratedPodcast}>
            <CardEpMini title='#75 Juventude e Ciência' img={capdo_75} />
            <CardEpMini title='#81 Luta Antimanicomial' img={capdo_81} />
            <CardEpMini title='#85 Eu estou tão cansado, mas não pra dizer' img={capdo_85} />
          </div>
        </div>

          <div className={styles.linkPage}>
            <a href='#'>Acessar página do podcast</a>
          </div>
      </div>
    </div>
  )
}