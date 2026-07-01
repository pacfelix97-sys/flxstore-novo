import '../estilos/global.css';
import Header from '../compartimentos/Header';
import Rodape from '../compartimentos/Rodape';
import CartaoProduto from '../compartimentos/CartaoProduto';

export default function Home() {
  const produtos = [
    { id: 1, nome: 'Smartwatch Premium', preco: 199.90, imagem: 'https://via.placeholder.com/280?text=Smartwatch' },
    { id: 2, nome: 'Fone Bluetooth', preco: 149.90, imagem: 'https://via.placeholder.com/280?text=Fone+Bluetooth' },
    { id: 3, nome: 'Caixa de Som', preco: 299.90, imagem: 'https://via.placeholder.com/280?text=Caixa+de+Som' }
  ];

  return (
    <div>
      <Header />
      <main className="container" style={{ padding: '2.5rem 1rem' }}>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>As Melhores Ofertas da Internet</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Academia, esportes, eletrônicos e muito mais com preços imbatíveis.
          </p>
        </section>
        <section>
          <h2 style={{ marginBottom: '2rem' }}>Produtos em Destaque</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {produtos.map(p => <CartaoProduto key={p.id} {...p} />)}
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}
