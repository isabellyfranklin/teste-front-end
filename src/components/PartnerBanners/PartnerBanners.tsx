import styles from './PartnerBanners.module.scss';

const banners = ['banner-1', 'banner-2'];

export default function PartnerBanners() {
  return (
    <section className={styles.section} aria-label="Parceiros">
      <ul className={styles.list}>
        {banners.map((id) => (
          <li key={id} className={styles.banner}>
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <a href="#" className={styles.button}>Confira</a>
          </li>
        ))}
      </ul>
    </section>
  );
}