import { useEffect, useState } from 'react';
import styles from './ProductModal.module.scss';
import type { Product } from '../../types/Product';
import { formatPrice } from '../utils/formatPrice/formatPrice';

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          aria-label="Fechar"
          onClick={onClose}
        >
          ×
        </button>

        <img src={product.photo} alt={product.productName} className={styles.photo} />

        <div className={styles.content}>
          <h2 id="modal-title">{product.productName}</h2>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <p className={styles.description}>{product.descriptionShort}</p>
          <a href="#" className={styles.details}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button type="button" className={styles.buy}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}