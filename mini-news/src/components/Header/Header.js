import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import LogoImg from "../../img/logo.png"
import Lightbtn from "../../img/light.png"


//단순 네비게이션바 구현 프로토타입은 팀레포 Wiki 참조
export default function Header() {
  return (
      <WrapHeader>
        <div><Link to="/"><WrapLogo/></Link></div>
        <div><WrapLightBtn/></div>
      </WrapHeader>
  );
}

const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
`;

const WrapLogo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  width: 140px;
`;

const WrapLightBtn = styled.div`
  width : 26px;
  height : 26px;
  background-image : url(${Lightbtn});
  background-repeat : no-repeat;
  background-position : center;
  background-size : contain;
  vertical-align : bottom;
`