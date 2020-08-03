import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
// import Carousel from '../../components/Carousel';
// import Footer from '../../components/Footer';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}/>
    </div>
  );
}

export default App;
