import { MainTemplate } from "../../../templates/MainTemplate";
import { AllCategories } from "../../AllCategories";

export function Categories () {
  return (
    <MainTemplate>
      <h2>Todas as Categorias</h2>
      <section>
        <AllCategories />
      </section>
    </MainTemplate>
  )
}