import styles from './styles.module.css'

import spaceTodayCover from '../../assets/images/img-podcasts/img-cover/spacetoday.jpg'
import CardEpMini from '../CardEpMini'

export function CardPodcast () {
  return (
    <div className={styles.containerCard}>
      <div className={styles.imgPodcast}>
        <a href='#'>
          <img src={spaceTodayCover} />
        </a>
      </div>

      <div className={styles.infoPodcast}>
        <div className={styles.podcastName}>
          {/* <h2>SpaceTodayasdadadadadas <label>123.987 seguidores</label></h2> */}
          <h2>
            <span>Space Today</span> 
            <label>123.987 seguidores</label>
          </h2>
          <p><strong>Descrição:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at euismod ipsum. Aenean eget sapien nulla. Praesent ultrices volutpat bibendum. Donec vestibulum eget neque sit amet porta. Duis eget dui est. In consectetur finibus nisi, eu pellentesque felis ullamcorper et. Integer in facilisis dolor. Ut a vestibulum mauris.</p>

          <h3>Episódios Recentes:</h3>
          <CardEpMini />
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}