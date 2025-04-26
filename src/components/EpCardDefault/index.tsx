import styles from './styles.module.css'

// import imgchat from '../../assets/images/img-podcasts/img-eps/img_do_chat.png'
import { EllipsisVertical, PlayIcon } from 'lucide-react'

type EpCardDefaultProps = {
  img: string,
  alt: string,
  titleEp: string,
  linkPodcast: string,
  teamPodcast: string,
  timeEp: string,
}

export function EpCardDefault ({ img, alt, titleEp, linkPodcast, teamPodcast, timeEp }: EpCardDefaultProps) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.imgCard}>
        <img src={img} alt={alt} />
      </div>

      <div className={styles.textCard}>
        <div>
          <h3 title={titleEp}>{titleEp}</h3>
          <p title={`${linkPodcast} - ${teamPodcast}`}><a href='#'>{linkPodcast}</a> - {teamPodcast}</p>
        </div>

      <div className={styles.infoCard}>
        <label>{timeEp}</label>
          <div className={styles.btnCard}>
            <button className={styles.btnPlay}><PlayIcon /></button>
            <button className={styles.btnOptions}><EllipsisVertical /></button>
          </div>
        </div>
      </div>
    </div>
  )
}