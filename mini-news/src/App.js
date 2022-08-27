import NewsListPage from "./components/NewsList/NewsListPage";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
