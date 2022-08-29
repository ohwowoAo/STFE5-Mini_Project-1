import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import SearchPage from '../Search/SearchPage'
import Header from '../Header/Header'

import Styled,{css} from "styled-components"


//뉴스기사 검색 받은걸 보여주는 기능 구현
export default function NewsListPage() {
  return (
    <>
      <SearchPage/>
      <Link to="/clip">clip페이지로</Link>
    </>
  )
}
