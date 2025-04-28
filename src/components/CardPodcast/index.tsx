import styles from './styles.module.css'

// IMAGES COVER
// import capdoLogo from '../../assets/images/img-podcasts/img-cover/capdo_logo.png'

// IMAGES EPS
// import capdo_75 from '../../assets/images/img-podcasts/img-eps/capdo_75.jpg'
// import capdo_81 from '../../assets/images/img-podcasts/img-eps/capdo_81.png'
// import capdo_85 from '../../assets/images/img-podcasts/img-eps/capdo_85.png'

// OTHERS
import CardEpMini from '../CardEpMini'

type Episode = {
  title: string;
  img: string;
  likes: number;
}

type CardPodcastProps = {
  img: string;
  title: string;
  followers: number;
  description: string;
  episodes?: Episode[];
}

export function CardPodcast ({ img, title, followers, description, episodes }: CardPodcastProps) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.imgPodcast}>
        <a href='#'>
          <img src={img} />
        </a>
      </div>

      <div className={styles.infoPodcast}>
        <div className={styles.podcastName}>
          {/* <h2>SpaceTodayasdadadadadas <label>123.987 seguidores</label></h2> */}
          <h2>
            <span>{title}</span> 
            <label>{followers.toLocaleString()} seguidores</label>
          </h2>
          <p><strong>Descrição: </strong>{description}</p>

          
          <h3>Episódios Recentes:</h3>
          <div className={styles.ratedPodcast}>
            {/* <CardEpMini title='#75 Juventude e Ciência' img={capdo_75} />
            <CardEpMini title='#81 Luta Antimanicomial' img={capdo_81} />
            <CardEpMini title='#85 Eu estou tão cansado, mas não pra dizer' img={capdo_85} /> */}
            {episodes && episodes.length > 0 ? (
              episodes?.slice(0, 3).map((episode, index) => (
                <CardEpMini key={index} title={episode.title} img={episode.img} likes={episode.likes} />
              ))
            ) : (
              <div className={styles.noEps}>
                <p>Sem episódios recentes disponíveis</p>
              </div>
            )}
          </div>
        </div>

          <div className={styles.linkPage}>
            <a href='#'>Acessar página do podcast</a>
          </div>
      </div>
    </div>
  )
}