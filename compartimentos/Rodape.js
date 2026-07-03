import Link from 'next/link'

export default function Rodape() {
  return (
    <footer style={estilos.rodape}>
      <div style={estilos.conteudo}>
        {/* Seção Sobre */}
        <div style={estilos.coluna}>
          <h3 style={estilos.titulo}>FlxStore</h3>
          <p style={estilos.texto}>
            Sua loja de produtos com qualidade e preço justo. Entregamos em todo o Brasil!
          </p>
        </div>

        {/* Seção Links Rápidos */}
        <div style={estilos.coluna}>
          <h4 style={estilos.subtitulo}>Links Rápidos</h4>
          <Link href="/" style={estilos.link}>Início</Link>
          <Link href="/produtos" style={estilos.link}>Produtos</Link>
          <Link href="/sobre" style={estilos.link}>Sobre Nós</Link>
          <Link href="/contato" style={estilos.link}>Contato</Link>
        </div>

        {/* Seção Contato */}
        <div style={estilos.coluna}>
          <h4 style={estilos.subtitulo}>Contato</h4>
          <p style={estilos.texto}>📧 contato@flxstore.com.br</p>
          <p style={estilos.texto}>📱 (11) 9XXXX-XXXX</p>
          <p style={estilos.texto}>📍 São Paulo/SP</p>
        </div>
      </div>

      {/* Área de Direitos Autorais */}
      <div style={estilos.direitos}>
        <p>© {new Date().getFullYear()} FlxStore — Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

// Estilos alinhados com o Header
const estilos = {
  rodape: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '3rem 2rem 1rem',
    marginTop: '3rem'
  },
  conteudo: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  coluna: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  },
  titulo: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  subtitulo: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#e0e0e0'
  },
  texto: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#cccccc'
  },
  link: {
    fontSize: '0.95rem',
    color: '#cccccc',
    textDecoration: 'none',
    transition: 'color 0.3s',
    ':hover': { color: '#fff' }
  },
  direitos: {
    borderTop: '1px solid #333',
    paddingTop: '1.5rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#999'
  }
    }
          
