import styles from './styles.module.css'

import { CardTheme } from '../../CardTheme'
import { Slider } from '../../Slider'


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
import { EpCardDefault } from '../../EpCardDefault'

//IMG COVER PODCAST
import capdoLogo from '../../../assets/images/img-podcasts/img-cover/capdo_logo.png'
import spaceTodayLogo from '../../../assets/images/img-podcasts/img-cover/spacetoday.jpg'

//IMG EPS
import imgchat from '../../../assets/images/img-podcasts/img-eps/img_do_chat.png'
import capdo75 from '../../../assets/images/img-podcasts/img-eps/capdo_75.jpg'
import capdo81 from '../../../assets/images/img-podcasts/img-eps/capdo_81.png'
import capdo85 from '../../../assets/images/img-podcasts/img-eps/capdo_85.png'
import capdo129 from '../../../assets/images/img-podcasts/img-eps/capdo_129.png'
import spctd3087 from '../../../assets/images/img-podcasts/img-eps/space_today_3087.jpg'


// PODCASTS
const podcasts = [
  {
    img: capdoLogo,
    title: 'Ciência Ao Pé do Ouvido',
    followers: 120000,
    description: 'Ciência Ao Pé Do Ouvido explora o fascinante mundo da ciência de maneira simples e acessível. Cada episódio traz descobertas, curiosidades e histórias inspiradoras, com o objetivo de desmistificar temas complexos e aproximar a ciência do nosso cotidiano.', 
    episodes: [
      { title: '#129 Luto: como lidar com as finitudes?', img: capdo129, likes:12300  },
      { title: '#85 Eu estou tão cansado, mas não pra dizer', img: capdo85, likes:9200  },
      { title: '#81 Luta Antimanicomial', img: capdo81, likes:124220  }
    ]
  },
  {
    img: spaceTodayLogo,
    title:'Space Today',
    followers:987123,
    description:'Space Today traz as últimas notícias, curiosidades e descobertas sobre o universo. Com uma linguagem clara e envolvente, o podcast conecta você ao mundo da astronomia, exploração espacial e ciências afins, sempre com informação de qualidade e paixão pelo cosmos.',
    episodes: [
      { title: '#3087 Inteligência Artificial Melhora A Qualidade Da Imagem Do Buraco Negro', img: spctd3087, likes:92100  },
    ]
  },
]

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
        <Slider podcasts={podcasts} />
      </section>
    </div>
  )
}