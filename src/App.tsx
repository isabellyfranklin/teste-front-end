import { useState } from 'react';
import { Header } from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CategoryList from './components/CategoryList/CategoryList';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import PartnerBanners from './components/PartnerBanners/PartnerBanners';
import BrandList from './components/BrandList/BrandList';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import ProductModal from './components/ProductModal/ProductModal';
import type { Product } from './types/Product';
import { useProducts } from './hooks/useProducts';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList />

        {loading && <p>Carregando produtos...</p>}
        {error && <p role="alert">{error}</p>}

        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          onSelect={setSelectedProduct}
          showTabs
        />

        <PartnerBanners />

        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          onSelect={setSelectedProduct}
          linkText="Ver todos"
        />

        <PartnerBanners />

        <BrandList />

        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          onSelect={setSelectedProduct}
          linkText="Ver todos"
        />

        <Newsletter />
      </main>
      <Footer />

      <ProductModal
        key={selectedProduct?.productName}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}