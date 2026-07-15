import { BackgroundEffect } from './components/background-effect';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { Navigation } from './components/navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      <BackgroundEffect />

      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
