import React, { useState } from "react";
import SearchHistory from "./SearchHistory";
import styled from "styled-components";
import search_b from '../../img/search_b.png'

//검색 기능 구현 해주시면 될것같습니다. API 접근하여 기사를 받아온후
//props를 이용하여 NewsList 밑 ClipPage에 전달해주기
export default function SearchPage() {
  const [ hide, setHide ] =useState(0);

  const changeHandler = (e) => {
    if(e.target.value > 0){
      setHide(1)
    }else{
      setHide(0)
    }
  }


  return (
    <SearchWrap>
      <SearchBox>
        <SearchInputBox placeholder="검색어를 입력하세요" onChange={changeHandler}/>
        <SearchBoxBtn/>
      </SearchBox>
      {/* input에 onChange를 달아서 입력이되며 ChangeHandler는 useState를 활용하여(리덕스를 활용?) 
      changeHandler 에는 0.5초 조건 
      1. 0.5초 동안 입력없으면 검색 함수
      2. div(searchHistory) 를 생성해주는 함수
      onFocus 를 이용하여 search history가 존재 & input 에 Focus 중이면 searchHistory 노출
      1. display 를 바꿔주는 함수 
      */}
      <SearchHistoryBox visibility={hide}>test11</SearchHistoryBox>
    </SearchWrap>
  )
}

const SearchWrap = styled.div`
    max-width: 640px;
    min-width : 320px;
    margin : 0 auto;
`
const SearchBox = styled.div`
    position: relative;
    width: 85%;
    margin: 0 auto;
    padding: 11px 15px;
    border-radius: 18px;
    background: #f8f8f8;
`
const SearchInputBox = styled.input`
    width: 96%;
    padding-left: 6%;
    border: 0;
    background: #f8f8f8;
    outline: none;
`
const SearchBoxBtn = styled.button`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    border: 0;
    background: url(${search_b}) no-repeat;
    background-position: center;
    background-size: contain;
`
const SearchHistoryBox = styled.div`
    display : ${props => props.visibility ? 'block' : 'none'};
    width: 84%;
    margin: 15px auto 0;
    text-align: center;
    &:before {
      content : "최근검색어 : ";
    }
`
const SearchHistoryValue = styled.div`
    display: inline-block;
    margin: 5px 5px;
    padding: 4px 12px;
    border: 1px solid #dedfe0;
    border-radius: 20px;
    
`


