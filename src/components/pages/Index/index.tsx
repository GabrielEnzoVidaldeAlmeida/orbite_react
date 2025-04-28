import styles from './styles.module.css'

import { CardTheme } from '../../CardTheme'

//ICONS
import quimica from '../../../assets/images/icons-subject/quimica.png'
import esporte from '../../../assets/images/icons-subject/esporte.png'
import matematica from '../../../assets/images/icons-subject/matematica.png'
import alimentos from '../../../assets/images/icons-subject/alimentos.png'
import ciencias from '../../../assets/images/icons-subject/ciencias.png'
import fisica from '../../../assets/images/icons-subject/fisica.png'
import espanhol from '../../../assets/images/icons-subject/espanhol.png'
import ingles from '../../../assets/images/icons-subject/ingles.png'
import artes from '../../../assets/images/icons-subject/artes.png'
import tecnologia from '../../../assets/images/icons-subject/tecnologia.png'
import sociologia from '../../../assets/images/icons-subject/sociologia.png'
import apicultura from '../../../assets/images/icons-subject/apicultura.png'
import filosofia from '../../../assets/images/icons-subject/filosofia.png'
import { ArrowRight } from 'lucide-react'
import { EpCardDefault } from '../../EpCardDefault'
import Slider from '../../Slider'

//IMG EPS
import imgchat from '../../../assets/images/img-podcasts/img-eps/img_do_chat.png'
import capdo75 from '../../../assets/images/img-podcasts/img-eps/capdo_75.jpg'
import capdo81 from '../../../assets/images/img-podcasts/img-eps/capdo_81.png'
import capdo85 from '../../../assets/images/img-podcasts/img-eps/capdo_85.png'
import capdo129 from '../../../assets/images/img-podcasts/img-eps/capdo_129.png'
import { CardPodcast } from '../../CardPodcast'


//TEMAS DE EPISÓDIOS
const themesSubject = [
  { textImg: quimica, text: 'Química' },
  { textImg: esporte, text: 'Esportes' },
  { textImg: matematica, text: 'Matemática' },
  { textImg: alimentos, text: 'Alimentos' },
  { textImg: ciencias, text: 'Ciências' },
  { textImg: fisica, text: 'Física' },
  { textImg: espanhol, text: 'Espanhol' },
  { textImg: ingles, text: 'Ingles' },
  { textImg: artes, text: 'Artes' },
  { textImg: tecnologia, text: 'Tecnologia' },
  { textImg: sociologia, text: 'Sociologia' },
  { textImg: apicultura, text: 'Apicultura' },
  { textImg: filosofia, text: 'Filosofia' },
  { text: 'Mais categorias...' },

]

//EPISÓDIOS - img, alt, titleEp, linkPodcast, teamPodcast, timeEp
const epsRecent = [
  { img: imgchat, alt: 'imgchat', titleEp: 'Episódio 1', linkPodcast: 'Orbite', teamPodcast: 'Time da Orbite', timeEp: '1h28m' },

  { img: capdo75, alt: 'capdo75', titleEp: 'Juventuda e Ciência', linkPodcast: 'Ciência Ao Pé Do Ouvido', teamPodcast: 'Ciência Ao Pé Do Ouvido', timeEp: '1h28m' },

  { img: capdo81, alt: 'capdo81', titleEp: 'Luta Antimanicomial', linkPodcast: 'SpaceToday', teamPodcast: 'Time da Orbite', timeEp: '1h28m' },

  { img: capdo85, alt: 'capdo85', titleEp: 'Eu estou tão cansado, mas não pra dizer', linkPodcast: 'Orbite', teamPodcast: 'Time da Orbite', timeEp: '1h28m' },

  { img: capdo129, alt: 'capdo129', titleEp: 'Luto: como lidar com as finitudes?', linkPodcast: 'Orbite', teamPodcast: 'Time da Orbite', timeEp: '1h28m' },

  { img: capdo75, alt: 'capdo75', titleEp: 'Juventuda e Ciência', linkPodcast: 'Orbite', teamPodcast: 'Time da Orbite', timeEp: '1h28m' },

  { img: capdo81, alt: 'capdo81', titleEp: 'Luta Antimanicomial', linkPodcast: 'Orbite', teamPodcast: 'Time da Orbite', timeEp: '1h28m' },
]

export function Index () {
  return (
    <div className={styles.containerIndex}>
      <h2>Principais Categorias</h2>
      <section className={styles.mainThemes}>
        {themesSubject.map((theme, index) => (
          <CardTheme key={index} textImg={theme?.textImg} text={theme.text} />
        ))}
      </section>

      <h2>Episódios Recentes</h2>
      <section className={styles.epsRecent}>
        {epsRecent.map((eps, index) => (
          <EpCardDefault key={index} img={eps.img} alt={eps.alt} titleEp={eps.titleEp} linkPodcast={eps.linkPodcast} teamPodcast={eps.teamPodcast} timeEp={eps.timeEp} />
        ))}
      </section>

      <h2>Podcasts Em Destaque</h2>
      <section>
        {/* ESTUDAR E FAZER SÓ: */}
        {/* <Slider images={[alimentos, fisica]} interval={3000} /> */}
        <CardPodcast />
      </section>
    </div>
  )
}