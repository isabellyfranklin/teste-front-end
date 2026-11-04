import styles from './BrandList.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import logo from '../../assets/logo.svg';

const brands = ['marca-1', 'marca-2', 'marca-3', 'marca-4', 'marca-5'];

export default function BrandList() {
  return (
    <section className={styles.brands}>
      <SectionTitle title="Navegue por marcas" />
      <ul className={styles.list}>
        {brands.map((brand) => (
          <li key={brand} className={styles.brand}>
            <img src={logo} alt="Econverse" />
          </li>
        ))}
      </ul>
    </section>
  );
}