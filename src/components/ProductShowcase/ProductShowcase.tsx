import { useState } from 'react';
import styles from './ProductShowcase.module.scss';
import type { Product } from '../../types/Product';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductTabs from '../ProductTabs/ProductTabs';
import ProductCard from '../ProductCard/ProductCard';

import iconArrowLeft from '../../assets/icons/showcase/icon-arrow-left.svg';
import iconArrowRight from '../../assets/icons/showcase/icon-arrow-right.svg'

type ProductShowcaseProps = {
  title: string;
  products: Product[];
  onSelect: (product: Product) => void;
  linkText?: string;
  showTabs?: boolean;
};

const VISIBLE_CARDS = 4;

export default function ProductShowcase({
  title,
  products,
  onSelect,
  linkText,
  showTabs,
}: ProductShowcaseProps) {
  const [start, setStart] = useState(0);

  const visibleProducts = products.slice(start, start + VISIBLE_CARDS);
  const canGoBack = start > 0;
  const canGoNext = start + VISIBLE_CARDS < products.length;

  return (
    <section className={styles.showcase}>
      <SectionTitle title={title} withLines linkText={linkText} />

      {showTabs && <ProductTabs />}

      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          aria-label="Produtos anteriores"
          disabled={!canGoBack}
          onClick={() => setStart(start - 1)}
        >
          <img src={iconArrowLeft} alt="" />
        </button>

        <ul className={styles.list}>
          {visibleProducts.map((product) => (
            <li key={product.productName}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label="Próximos produtos"
          disabled={!canGoNext}
          onClick={() => setStart(start + 1)}
        >
          <img src={iconArrowRight} alt="" />
        </button>
      </div>
    </section>
  );
}