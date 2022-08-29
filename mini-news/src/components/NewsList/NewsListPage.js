import React, {useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchPage from '../Search/SearchPage'
import Header from '../Header/Header'
import Styled,{css} from "styled-components"
import { NewsWrap } from "../../styles/WrapStyle";
import ClipPage from "../Clip/ClipPage";
import API_KEY from './Token';

//뉴스기사 검색 받은걸 보여주는 기능 구현
export default function NewsListPage() {

const [articles, setArticles] = useState([]);
const [term, setTerm] = useState('everything'); //모든기사
const [isLodading, setIsLodading] = useState(true) //화면에 데이터를 표시하지않을떄마다 로딩을 표시(기본적사실)  api에서 데이터를 가져오면 로딩애니매시연을 제거

//loading 즉시 사용효과 설정, 양식을 검색하기위해 용어 설정  
useEffect(()=>{  
  const fetchArticles = async () =>{
  try{
      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${API_KEY}`
      )
      const articles = await res.json()
      console.log(articles.response.docs);
      setArticles(articles.response.docs)
      
    }catch (error){
      console.error(error);
      
    }
  }  
  fetchArticles();

}, [])    

return (
    <>
      <SearchPage />
      <NewsWrap>
        <ClipPage/>
      <section>
        {articles.map((article) => {
          const {abstract, pub_date, _id, original} = article
          return (
            <article key={_id}>
              <h4>{abstract}</h4>
              <p>{pub_date}</p>
              <p>{original}</p>
            </article>
          )
          })}
        </section>
      </NewsWrap>
    </>
  )
} 
 

