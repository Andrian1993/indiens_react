import React from 'react';
import FooterLogo from '../../img/footer_logo.png';

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={FooterLogo} alt="footer" />
        <div>
          <ul layout="row">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">문의하기</a></li>
            <li><a href="#">인디언즈 소개</a></li>
            <li><a href="#">개인정보 취급방침</a></li>
            <li><a href="#">이용약관</a></li>
            {/* <li><a ui-sref="home.ques">FAQ</a></li>
                    <li><a ui-sref="Questions">문의하기</a></li>
                    <li><a ui-sref="home.company">인디언즈 소개</a></li>
                    <li><a target="_blank" ui-sref="Privacy">개인정보 취급방침</a></li>
                    <li><a target="_blank" ui-sref="Terms">이용약관</a></li> */}
          </ul>
          <p>
인디언즈 | 세종특별자치시 조치원읍 군청로 93, S-3
            <br />
사업자등록번호 : 302-28-00477 | 대표자명 : 김제우 | 전화번호 : 010-7564-0545
            <br />
Copyright 2018. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
