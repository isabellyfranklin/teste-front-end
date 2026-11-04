import { Header } from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CategoryList from './components/CategoryList/CategoryList';
import SectionTitle from './components/SectionTitle/SectionTitle';
import ProductCard from './components/ProductCard/ProductCard';
import type { Product } from './types/Product';

const testProduct: Product = {
  productName: 'Iphone 11 PRO MAX BRANCO 1',
  descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  photo:
    'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
  price: 2890,
};

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList />
        <SectionTitle title="Produtos relacionados" withLines />

        {/* temporário: só para testar o card, some quando fizermos a vitrine */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
          <ProductCard product={testProduct} onSelect={(p) => console.log(p)} />
        </div>
      </main>
    </>
  );
}