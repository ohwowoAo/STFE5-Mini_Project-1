import React,{useState} from 'react'
import { Link, useNavigate,  } from "react-router-dom";
import styled,{css} from "styled-components"
import NewsListPage from '../NewsList/NewsListPage'
import sort_uncheck from "../../img/sort_uncheck.png";
import sort_check from "../../img/sort_check.png";
import ClipList from './ClipList';


//Clip된 기사들 처리 및 Unclip 처리
export default function ClipPage({props}) {
  const navigate = useNavigate();
  const goBack = () =>{
    if(props){
      navigate('/');
    }
  }
  return (
    <>
      <Clip>
        <ClipBtn onClick={goBack} checked={props}><StyledLink to="/clip">CLIP</StyledLink></ClipBtn>
      </Clip>
    </>
  )
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Clip = styled.div`
  padding: 0 0 18px;
`;
const ClipBtn = styled.button`
  display: inline-block;
  padding: 0 0 0 20px;
  font-size: 0.95rem;
  color: #999;
  border: 0;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;
  background-image: url(${sort_uncheck});
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s linear;
  ${(props) =>
    props.checked &&
    css`
      color: #e76191 !important;
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 20px;
      background-image: url(${sort_check});
    `}
  &:active {
    transform: scale(0.8);
  }
`;
