import styles from './ProductTabs.module.scss';

const tabs = [
  { name: 'Celular', active: true },
  { name: 'Acessórios' },
  { name: 'Tablets' },
  { name: 'Notebooks' },
  { name: 'TVs' },
  { name: 'Ver todos' },
];

export default function ProductTabs() {
  return (
    <nav className={styles.tabs} aria-label="Categorias de produtos">
      <ul>
        {tabs.map((tab) => (
          <li key={tab.name}>
            <button
              type="button"
              className={`${styles.tab} ${tab.active ? styles.active : ''}`}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}