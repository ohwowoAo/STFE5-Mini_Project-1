import NewsListPage from "./components/NewsList/NewsListPage";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <GlobalStyle />
        {/* <NavBar/>
        <SearchBar/>
        <Clip/>
        <NewsListPage/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
