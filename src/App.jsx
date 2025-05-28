import ArticlesPage from './components/ArticlesPage';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PaintPricePage from './components/PaintPricePage';
import TeamSection from './components/TeamSection';
import TeamStats from './components/TeamStats';
import Uslugi from './components/Uslugi';

function App() {
  return (
    <div>
      <HeroSection />
      <TeamStats/>
      <Uslugi/>
      <PaintPricePage/>
      <TeamSection/>
      <ArticlesPage/>
      <Footer/>
    </div>
  );
}

export default App;
