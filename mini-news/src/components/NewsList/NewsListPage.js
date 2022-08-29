import React,{useState} from "react";
import { Link, Outlet } from "react-router-dom";
import SearchPage from "../Search/SearchPage";
import { NewsWrap } from "../../styles/WrapStyle";
import ClipPage from "../Clip/ClipPage";

//뉴스기사 검색 받은걸 보여주는 기능 구현
export default function NewsListPage() {
  // Onclick 넣어서 true으로 보내면 Clippage에서는 props를 받는다.
  
  return (
    <>
      <SearchPage />
      <NewsWrap>
        <ClipPage/>
      </NewsWrap>
    </>
  );
}
