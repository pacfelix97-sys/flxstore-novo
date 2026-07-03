'use client' // Apenas se usar App Router no Next 13+

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header style={estilos.cabecalho}>
      <div style={estilos.conteudo}>
        {/* Logo / Nome da Loja */}
        <Link href="/" style={estilos.logo}>
          FlxStore
        </Link>

        {/* Navegação Desktop */}
        <nav style={estilos.navegacaoDesktop}>
          <Link href="/" style={estilos.link}>Início</Link>
          <Link href="/produtos" style={estilos.link}>Produtos</Link>
          <Link href="/sobre" style={estilos.link}>Sobre</Link>
          <Link href="/contato" style={estilos.link}>Contato</Link>
        </nav>

        {/* Botão Menu Mobile */}
        <button 
          style={estilos.botaoMenu}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </div>

      {/* Navegação Mobile */}
      {menuAberto && (
        <nav style={estilos.navegacaoMobile}>
          <Link href="/" style={estilos.linkMobile}>Início</Link>
          <Link href="/produtos" style={estilos.linkMobile}>Produtos</Link>
          <Link href="/sobre" style={estilos.linkMobile}>Sobre</Link>
          <Link href="/contato" style={estilos.linkMobile}>Contato</Link>
        </nav>
      )}
    </header>
  )
}

// Estilos inline (você também pode mover para o global.css depois)
const estilos = {
  cabecalho: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
  },
  conteudo: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none'
  },
  navegacaoDesktop: {
    display: 'flex',
    gap: '2rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  botaoMenu: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  navegacaoMobile: {
    display: 'none',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem 2rem',
    backgroundColor: '#2d2d2d'
  },
  linkMobile: {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 0',
    borderBottom: '1px solid #444'
  },

  // Ajustes para telas menores
  '@media (max-width: 768px)': {
    navegacaoDesktop: { display: 'none' },
    botaoMenu: { display: 'block' },
    navegacaoMobile: { display: 'flex' }
  }
    }
          
