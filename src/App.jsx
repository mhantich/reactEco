import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

import Header from "./comopnant/Header.jsx";
import MainHero from "./comopnant/MainHero.jsx";

import About from "./comopnant/About.jsx";
import Prodact from "./comopnant/Prodact.jsx";

import Reviews from "./comopnant/Reviews.jsx";
import News from "./comopnant/News.jsx";
import Footer from "./comopnant/Footer.jsx";
import CreatedBy from "./comopnant/CreatedBy.jsx";
import Thoughts from "./comopnant/Thoughts.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MainHero />

      <About />
      <Prodact />
      <Reviews />

      <News />
      <Thoughts />
      <Footer />
      <CreatedBy />
    </ThemeProvider>
  );
}

export default App;
