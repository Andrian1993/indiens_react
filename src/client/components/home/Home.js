import React, { Component } from 'react';
import '../../css/common.scss';
import '../../css/style.scss';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import prjImage from '../../img/ex/ex_photo.png';
import topLogo from '../../img/main/top_img_logo.png';
import Common from '../modules/Common';

function Home() {
  const types = Common.jobTypes();
  const userType = '';

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const projects = [{}, {}, {}, {}, {}, {}];

  return (
    <div className="Home">
      <div id="mobile_area" className="mobile_area">
        <div className="td mobile_content">
          <div id="mobile_area_txt" className="td mobile_area_txt">
            <img src={topLogo} alt="indiens" />
            <div className="tit_area">인디언즈에서 게임 제작을 위한 팀원을 찾아보세요.</div>
          </div>

        </div>
      </div>

      <div className="background2">
        <div className="shape7" />
      </div>
      <div id="simulat_area" className="simulat_area">
        {/* <ul className="jobs">
          <li ng-repeat="m in vm.member_type" ng-click="vm.findPartner(m.id)">
            <a>
              <img ng-src="{{m.img_file}}" alt="job1" />
            </a>
          </li>
        </ul> */}

        <div className="jobs">
          <RadioGroup className="signtype-radio" value={userType} aria-label="gender" name="gender1" onChange={console.log('1')}>
            {types.map((job, index) => (
              <FormControlLabel
                key={index}
                className={`formControl ${userType === (index + 1).toString() ? 'checked' : ''}`}
                value={(index + 1).toString()}
                control={
                  <Radio />}
                label={(
                  <React.Fragment>
                    <a>
                      <img src={job.imgUrl} alt={`job${index}`} />
                      {job.name}
                    </a>
                  </React.Fragment>
                          )}
              />
            ))}
          </RadioGroup>
        </div>

        <div className="td simulat_content">
          <div className="td simulat_area_txt">
            <div className="tit_area">인디언즈에서 게임 프로젝트를 개설해보세요.</div>
            <p><a href="/" style={{ color: '#ffffff' }}>프로젝트 개설</a></p>
          </div>
        </div>
      </div>

      <div className="carousel-zone">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div>
              <img src={prjImage} />
              <h3 />
            </div>
          ))}
        </Slider>
      </div>

      <div className="search">
        <input type="text" ng-model="vm.search.PJT_NAME" placeholder="프로젝트 검색" />
        <Button className="search_icon">Search</Button>
      </div>

      <div className="container">
        <h1>FAQ</h1>
        <div className="accordion">

          <div className="option">
            <input type="checkbox" id="toggle1" className="toggle" />
            <label className="title" htmlFor="toggle1"> 인디언즈는 어떤 서비스인가요? </label>
            <div className="content">
              <p>인디언즈는 인디 게임 제작을 위한 팀 매칭 중개 플랫폼입니다. 게임 제작에 필요한 직군을 모집하거나 반대로 모집 중인 개발 프로젝트에 지원할 수 있습니다.</p>
            </div>
          </div>

          <div className="option">
            <input type="checkbox" id="toggle2" className="toggle" />
            <label className="title" htmlFor="toggle2">
                        제안은 어떻게 하나요?
            </label>
            <div className="content">
              <p>
* 프로젝트 지원: 모집 중인 프로젝트에서 공석인 직군을 클릭한 뒤 ‘제안하기’를 전송하면 프로젝트에 참여하는 것에 지원할 수 있습니다.
                <br />
                            * 파트너 모집: 파트너를 선택하면 파트너의 프로필과 함께 ‘제안하기’ 버튼이 있습니다. ‘제안하기’ 버튼을 클릭하면 프로젝트 참여 제안을 할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="option">
            <input type="checkbox" id="toggle3" className="toggle" />
            <label className="title" htmlFor="toggle3">
                        보낸/받은 제안을 보고 싶어요.
            </label>
            <div className="content">
              <p>
* 보낸 제안 확인: ‘마이페이지-제안정보관리- 보낸 제안정보’에서 확인하실 수 있습니다.
                <br />
                            * 받은 제안 확인: ‘마이페이지-제안정보관리- 받은 제안정보’에서 확인하실 수 있습니다. 받은 제안을 최초 열람 시 6코인이 소모되며, 기열람한 사람과는 무료로
                            제안 주고받기가 가능합니다.
              </p>
            </div>
          </div>

          <div className="option">
            <input type="checkbox" id="toggle4" className="toggle" />
            <label className="title" htmlFor="toggle4">
                        코인은 어떻게 사용하나요?
            </label>
            <div className="content">
              <p>
코인은 현금과 동일한 가치의 사전 충전 형식의 캐시입니다. 받은 제안을 열람하기 위해서는 6코인이 필요합니다. 코인충전은 마이페이지에서 가능합니다.
              </p>
            </div>
          </div>

          <div className="option">
            <input type="checkbox" id="toggle5" className="toggle" />
            <label className="title" htmlFor="toggle5">
                        충전한 코인을 환불하고 싶습니다.
            </label>
            <div className="content">
              <p>
- 결제 후 코인을 사용 이력이 있는 경우에는 환불이 불가합니다.
                <br />
                            - 결제 이후 코인을 사용한 이력이 없는 경우에 한하여 결제일 기준 7일 내에 환불 요청 시 결제금액의 전액 환불, 결제일 기준 8일~14일 내에 환불 요청 시
                            결제금액의 50%를 환불해드립니다. 결제일 기준 15일이 지났을 경우 환불이 불가합니다. 환불 양식에 기재하신 계좌로 송금되며 접수일로부터 영업일 기준 3~5일
                            이내에 환불됩니다. 환불 요청은 다음의 양식에 맞추어 문의하기 게시판에 작성해주시면 됩니다.
                <br />
                <br />
                            [환불 양식]
                <br />
                            제목: 환불 요청
                <br />
                            내용: 이름, 연락처, 아이디, 환불받을 계좌 포함, 환불 사유
              </p>
            </div>
          </div>

          <div className="option">
            <input type="checkbox" id="toggle6" className="toggle" />
            <label className="title" htmlFor="toggle6">
                        아이디/비밀번호를 잊어버렸어요.
            </label>
            <div className="content">
              <p>
아이디 찾기/비밀번호 재설정 기능을 이용하시면 됩니다.
                <br />
                <br />

                            * 아이디 찾기
                <br />
                            1. 가입 시 입력한 이름, 전화번호 입력.
                <br />
                            2. 본인확인 절차를 거쳐 이메일 확인.
                <br />
                            3. 본인확인 업체에서 제공하는 본인확인 서비스 화면 호출.
                <br />
                            4. 본인확인 정보가 일치할 경우 이메일 정보 확인.
                <br />
                <br />

                            * 비밀번호 재설정
                <br />
                            1. 가입 시 입력한 아이디와 전화번호, 이름 조회
                <br />
                            2. 회원정보에 입력된 이메일로 비밀번호 재설정 링크를 발송.
                <br />
                            3. 발송된 링크 클릭 시, 신규 비밀번호를 설정할 수 있는 페이지로 이동.
              </p>
            </div>
          </div>

          <div className="option">
            <input type="checkbox" id="toggle7" className="toggle" />
            <label className="title" htmlFor="toggle7">
                        회원탈퇴는 어떻게 해야하나요?
            </label>
            <div className="content">
              <p>회원탈퇴는 마이페이지 - 프로필관리 화면 하단에 '회원탈퇴' 버튼을 누르면 탈퇴할 수 있으며 보유하신 코인은 삭제됩니다.</p>
            </div>
          </div>
        </div>
        <p>
                FAQ 내용 외 다른 내용이 궁금하시다면 문의해주세요!
          <a className="btn" ui-sref="Questions">문의하기</a>
        </p>
      </div>

    </div>
  );
}

export default Home;
