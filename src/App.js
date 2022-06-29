import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import { Container } from "./styles/Container.styled";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    text: "#ddd",
    footer: "#003333",
    primary: "#05668D",
    secondary: "#427AA1",
    tertiary: "#416ea1",
    quaternary: "#679436",
    quinary: "#A5BE00",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        {/* //<Container> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </Container> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
