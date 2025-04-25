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
  { svgIcon: <ArrowRight />, text: 'Mais temas' },

]

export function Index () {
  return (
    <div className={styles.containerIndex}>
      <h2>Principais Temas</h2>
      <section className={styles.mainThemes}>
        {themesSubject.map((theme, index) => (
          <CardTheme key={index} textImg={theme?.textImg} svgIcon={theme?.svgIcon} text={theme.text} />
        ))}
      </section>
    </div>
  )
}