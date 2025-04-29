import { CardCategoryHigh } from "../CardCategoryHigh";

// CATEGORIES
import quimica from '../../assets/images/icons-subject/quimica.png'
import esporte from '../../assets/images/icons-subject/esporte.png'
import matematica from '../../assets/images/icons-subject/matematica.png'
import alimentos from '../../assets/images/icons-subject/alimentos.png'
import ciencias from '../../assets/images/icons-subject/ciencias.png'
import fisica from '../../assets/images/icons-subject/fisica.png'
import espanhol from '../../assets/images/icons-subject/espanhol.png'
import ingles from '../../assets/images/icons-subject/ingles.png'
import artes from '../../assets/images/icons-subject/artes.png'
import tecnologia from '../../assets/images/icons-subject/tecnologia.png'
import sociologia from '../../assets/images/icons-subject/sociologia.png'
import apicultura from '../../assets/images/icons-subject/apicultura.png'
import filosofia from '../../assets/images/icons-subject/filosofia.png'

import styles from './styles.module.css'

export function AllCategories () {
  return (
    <div className={styles.containerCards}>
      <CardCategoryHigh text="Química" img={quimica} />
      <CardCategoryHigh text="Esportes" img={esporte} />
      <CardCategoryHigh text="Matemática" img={matematica} />
      <CardCategoryHigh text="Alimentos" img={alimentos} />
      <CardCategoryHigh text="Ciências" img={ciencias} />
      <CardCategoryHigh text="Física" img={fisica} />
      <CardCategoryHigh text="Inglês" img={ingles} />
      <CardCategoryHigh text="Espanhol" img={espanhol} />
      <CardCategoryHigh text="Artes" img={artes} />
      <CardCategoryHigh text="Tecnologia" img={tecnologia} />
      <CardCategoryHigh text="Sociologia" img={sociologia} />
      <CardCategoryHigh text="Apicultura" img={apicultura} />
      <CardCategoryHigh text="Filosofia" img={filosofia} />
      


    </div>
  )
}