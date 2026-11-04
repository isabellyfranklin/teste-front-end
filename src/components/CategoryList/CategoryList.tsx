import styles from "./CategoryList.module.scss";
import iconTechnology from '../../assets/icons/categories/icon-technology.svg'
import iconSupermarket from '../../assets/icons/categories/icon-supermarket.svg'
import iconDrinks from '../../assets/icons/categories/icon-drinks.svg'
import iconTools from '../../assets/icons/categories/icon-tools.svg'
import iconHealthy from '../../assets/icons/categories/icon-health.svg'
import iconSports from '../../assets/icons/categories/icon-sports.svg'
import iconFashion from '../../assets/icons/categories/icon-fashion.svg'

const categories = [
    {
        image: iconTechnology,
        active: true,
        nameImage: "Imagem icone de tecnologia",
        name: "Tecnologia"
    },

    {
        image: iconSupermarket,
        nameImage: "Imagem icone de supermercado",
        name: "Supermercado"
    },

    {
        image: iconDrinks,
        nameImage: "Imagem icone de bebidas",
        name: "Bebidas"
    },

    {
        image: iconTools,
        nameImage: "Imagem icone de ferramentas",
        name: "Ferramentas"
    },

    {
        image: iconHealthy,
        nameImage: "Imagem icone de saúde",
        name: "Saúde"
    },

    {
        image: iconSports,
        nameImage: "Imagem icone de esporte e fitness",
        name: "Esportes e Fitness"
    },

    {
        image: iconFashion,
        nameImage: "Imagem icone de moda",
        name: "Moda"
    },
]

export default function CategoryList() {
  return (
    <section aria-label="Categorias">
      <ul className={styles.lista}>
        {categories.map( (item) => (
        <li key={item.name}>
          <button 
          type="button" 
          className={`${styles.item} ${item.active ? styles.ativo : ""}`}
          >
            <span className={styles.quadrado}>
              <img src={item.image} alt={item.nameImage} />
            </span>
            <span>{item.name}</span>
          </button>
        </li>
        ) )}
      </ul>
    </section>
  );
}
