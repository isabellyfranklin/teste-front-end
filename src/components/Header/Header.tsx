import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import iconSecurity from '../../assets/icons/header/icon-security.svg';
import iconTruck from '../../assets/icons/header/icon-truck.svg'
import iconCard from '../../assets/icons/header/icon-card.svg';
import iconSearch from '../../assets/icons/header/icon-search.svg';
import iconOrders from '../../assets/icons/header/icon-orders.svg'
import iconHeart from '../../assets/icons/header/icon-heart.svg'
import iconUser from '../../assets/icons/header/icon-user.svg';
import iconCart from '../../assets/icons/header/icon-cart.svg';
import iconCrown from '../../assets/icons/header/icon-crown.svg';

const infoItems = [
  { icon: iconSecurity, highlight: '100% segura', before: 'Compra ', after: '' },
  { icon: iconTruck, highlight: 'Frete grátis', before: '', after: ' acima de R$ 200' },
  { icon: iconCard, highlight: 'Parcele', before: '', after: ' suas compras' },
];

const menuItems = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
];

const actions = [
  { icon: iconOrders, label: 'Meus pedidos' },
  { icon: iconHeart, label: 'Favoritos' },
  { icon: iconUser, label: 'Minha conta' },
  { icon: iconCart, label: 'Carrinho' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.info}>
          {infoItems.map((item) => (
            <li key={item.highlight}>
              <img src={item.icon} alt="" />
              <span>
                {item.before}
                <strong>{item.highlight}</strong>
                {item.after}
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.main}>
          <a href="/" aria-label="Econverse - página inicial">
            <img src={logo} alt="Econverse" className={styles.logo} />
          </a>

          <form className={styles.search} role="search">
            <input type="search" placeholder="O que você está buscando?" aria-label="Buscar produtos" />
            <button type="submit" aria-label="Buscar">
              <img src={iconSearch} alt="" />
            </button>
          </form>

          <div className={styles.actions}>
            {actions.map((action) => (
              <button key={action.label} type="button" aria-label={action.label}>
                <img src={action.icon} alt="" />
              </button>
            ))}
          </div>
        </div>

        <nav className={styles.nav} aria-label="Menu principal">
          <ul>
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={item === 'Ofertas do dia' ? styles.highlight : ''}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className={styles.subscription}>
                <img src={iconCrown} alt="" />
                Assinatura
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}