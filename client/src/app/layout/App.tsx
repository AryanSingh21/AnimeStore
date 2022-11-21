import { Container, CssBaseline } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { createTheme } from "@mui/system";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/About/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProdcutDetailsPage from "../../features/catalog/ProductDetailes";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/Home/homePage";
import Header from "./Header";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {},
  });

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProdcutDetailsPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
