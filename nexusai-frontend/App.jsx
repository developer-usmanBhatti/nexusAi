import Header from './components/Header';
import Hero from './components/Hero';
import AIStats from './components/AIStats';
import FeaturedModels from './components/FeaturedModels';
import FlagshipComparison from './components/FlagshipComparison';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <AIStats />
        <FeaturedModels />
        <FlagshipComparison />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;