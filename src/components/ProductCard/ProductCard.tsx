import styles from './ProductCard.module.scss';
import type { Product } from '../../types/Product';
import { formatPrice } from '../utils/formatPrice/formatPrice';

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.info}
        onClick={() => onSelect(product)}
      >
        <img src={product.photo} alt={product.productName} />
        <p>{product.descriptionShort}</p>
      </button>

      <div className={styles.prices}>
        <p className={styles.oldPrice}>R$ 30,90</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p className={styles.installments}>ou 2x de R$ 49,95 sem juros</p>
        <p className={styles.freeShipping}>Frete grátis</p>
      </div>

      <button
        type="button"
        className={styles.buy}
        onClick={() => onSelect(product)}
      >
        Comprar
      </button>
    </article>
  );
}