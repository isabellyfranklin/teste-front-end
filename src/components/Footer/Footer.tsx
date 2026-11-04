import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg';
import iconInstagram from '../../assets/icons/footer/icon-instagram.svg';
import iconFacebook from '../../assets/icons/footer/icon-facebook.svg';
import iconLinkedin from '../../assets/icons/footer/icon-linkedin.svg';

const columns = [
  { title: 'Institucional', workSans: true, links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', workSans: true, links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

const socials = [
  { name: 'Instagram', icon: iconInstagram },
  { name: 'Facebook', icon: iconFacebook },
  { name: 'LinkedIn', icon: iconLinkedin },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <img src={logo} alt="Econverse" className={styles.logo} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className={styles.socials}>
              {socials.map((social) => (
                <li key={social.name}>
                  <a href="#" aria-label={social.name}>
                    <img src={social.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} />

          <nav className={styles.columns} aria-label="Links do rodapé">
            {columns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <ul className={column.workSans ? styles.workSans : ''}>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}
