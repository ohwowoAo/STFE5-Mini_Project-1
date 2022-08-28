import NewsListPage from "./components/NewsList/NewsListPage";
import GlobalStyle from "./styles/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchPage from "./components/Search/SearchPage";
import SearchHistory from "./components/Search/SearchHistory";
import ClipPage from "./components/Clip/ClipPage";

function App() {
  return (
    // <Route path="/" element={<Header />}/>
    <>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<NewsListPage />}>
          <Route path="/clip"  element={<ClipPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
