import { useState } from "react";
import svgPaths from "../imports/svg-w4baxm3xvx";
import { imgTeam } from "../src/assets/images/placeholder";
import { imgGroup, imgGroup1 } from "../imports/svg-82bn8";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Group() {
  return (
    <div
      className="absolute bottom-[-0.003%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[37.4104px_43px] right-[75.06%] top-0"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 43"
      >
        <g id="Group">
          <path
            d={svgPaths.pf8c2d80}
            fill="url(#paint0_linear_5_336)"
            id="Vector"
          />
          <path
            d={svgPaths.p25f0ea00}
            fill="url(#paint1_linear_5_336)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p12ef8100}
            fill="url(#paint2_linear_5_336)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p959a780}
            fill="url(#paint3_linear_5_336)"
            id="Vector_4"
          />
          <path
            d={svgPaths.pc651a00}
            fill="var(--fill-0, #F97714)"
            id="Vector_5"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_5_336"
            x1="0.280893"
            x2="37.7381"
            y1="19.0461"
            y2="6.72567"
          >
            <stop stopColor="#DD5C9B" />
            <stop offset="1" stopColor="#303FBD" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_5_336"
            x1="16.7573"
            x2="12.5839"
            y1="25.3527"
            y2="20.7513"
          >
            <stop stopColor="#0677E4" />
            <stop offset="1" stopColor="#B6C8E7" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_5_336"
            x1="10.2155"
            x2="20.2012"
            y1="39.4509"
            y2="23.9641"
          >
            <stop stopColor="#F76B00" />
            <stop offset="1" stopColor="#C13788" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_5_336"
            x1="39.1239"
            x2="16.0161"
            y1="11.6383"
            y2="37.8587"
          >
            <stop stopColor="#3241C0" />
            <stop offset="1" stopColor="#C13788" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-[75.06%] top-0"
      data-name="Clip path group"
    >
      <Group />
    </div>
  );
}

function LogoSvg({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div 
      className="h-[43px] relative shrink-0 w-[150px] cursor-pointer" 
      data-name="logo svg"
      onClick={() => onNavigate('home')}
    >
      <ClipPathGroup />
      <div
        className="absolute bottom-[40.787%] left-[31.822%] right-0 top-[23.013%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 103 16"
        >
          <path
            d={svgPaths.p2a5b1d00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[15.439%] left-[32.025%] right-[1.39%] top-[67.165%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 8"
        >
          <path d={svgPaths.pa75b530} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function NavigationItem({ 
  title, 
  isActive, 
  onClick, 
  hasDropdown = false 
}: { 
  title: string; 
  isActive: boolean; 
  onClick: () => void;
  hasDropdown?: boolean;
}) {
  return (
    <div 
      className="box-border content-stretch flex flex-row gap-[5px] items-center justify-center p-0 relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
      onClick={onClick}
    >
      <div className={`flex flex-col font-['Pretendard:${isActive ? 'SemiBold' : 'Medium'}',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${isActive ? 'text-[#136bd0]' : 'text-[#000000]'} text-[17px] text-left text-nowrap`}>
        <p className="block leading-[20px] whitespace-pre">{title}</p>
      </div>
      {hasDropdown && (
        <div
          className="h-[5.089px] relative shrink-0 w-[7.75px]"
          data-name="Vector"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8 6"
          >
            <path
              d={svgPaths.p35d60400}
              fill={`var(--fill-0, ${isActive ? '#136BD0' : 'black'})`}
              id="Vector"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function Frame2({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div className="box-border content-stretch flex flex-row gap-[50px] items-center justify-start p-0 relative shrink-0">
      <NavigationItem
        title="회사소개"
        isActive={currentPage === 'about'}
        onClick={() => onNavigate('about')}
        hasDropdown={true}
      />
      <NavigationItem
        title="서비스"
        isActive={currentPage.startsWith('service')}
        onClick={() => onNavigate('services')}
        hasDropdown={true}
      />
      <NavigationItem
        title="뉴스 · 공지"
        isActive={currentPage === 'news'}
        onClick={() => onNavigate('news')}
      />
      <NavigationItem
        title="FAQs"
        isActive={currentPage === 'faqs'}
        onClick={() => onNavigate('faqs')}
      />
      <NavigationItem
        title="문의 · 상담"
        isActive={currentPage === 'contact'}
        onClick={() => onNavigate('contact')}
      />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">언어 선택</p>
      </div>
      <div className="relative shrink-0 size-[15px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 15"
        >
          <path d={svgPaths.pce03180} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 55 21"
      >
        <g id="Frame 78">
          <path
            d={svgPaths.p29fc7000}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p1099a80}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Header({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between px-0 py-[15px] w-full max-w-[1100px] mx-auto"
      data-name="header"
    >
      <LogoSvg onNavigate={onNavigate} />
      <Frame2 currentPage={currentPage} onNavigate={onNavigate} />
      <Frame3 />
      <Frame78 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div
      className="bg-[#e01c1c] relative rounded-[20px] shrink-0 w-full"
      data-name="section header"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-center leading-[0] not-italic px-[50px] py-[30px] relative text-left w-full">
          <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start p-0 relative shrink-0 text-[#ffffff] text-nowrap">
            <div className="font-['Pretendard:SemiBold',_sans-serif] relative shrink-0 text-[36px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                대사관 업무 대행
              </p>
            </div>
            <div className="font-['Pretendard:Regular',_sans-serif] relative shrink-0 text-[18px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                Embassy Services
              </p>
            </div>
          </div>
          <div
            className="font-['Pretendard:Medium',_sans-serif] min-w-full relative shrink-0 text-[#e7e7e7] text-[18px]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[26px]">
              소녀가 가만히 보조개를 떠올리며, 그래 이게 무슨 물 같니. 소년은
              스웨터 앞자락만 바라다보고 있었다. 그래 이게 무슨 물 같니. 소년은
              스웨터 앞자락만 바라다보고 있었다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceTag({ 
  title, 
  isActive = false, 
  onClick 
}: { 
  title: string; 
  isActive?: boolean; 
  onClick: () => void;
}) {
  return (
    <div 
      className={`${isActive ? 'bg-[#ffffff] border-[#da1a1a]' : 'bg-[#f6f5f5] border-[#cdcdcd] hover:bg-[#e6e5e5] transition-colors'} box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-2.5 relative rounded-[7px] shrink-0 cursor-pointer`}
      onClick={onClick}
    >
      <div className="absolute border border-solid inset-0 pointer-events-none rounded-[7px]" />
      <div className={`font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 ${isActive ? 'text-[#da1a1a]' : 'text-[#000000]'} text-[21px] text-center text-nowrap`}>
        <p className="block leading-[normal] whitespace-pre">{title}</p>
      </div>
    </div>
  );
}

function ServiceTagsSection({ activeService, setActiveService, onNavigate }: { 
  activeService: string; 
  setActiveService: (service: string) => void; 
  onNavigate: (page: string) => void;
}) {
  const services = [
    "여권 갱신",
    "혼인요건인증서", 
    "아기 출생증명서 · 여권",
    "이중국적",
    "각종 위임장",
    "영사 확인 (법인/유학 서류)",
    "혼인·이혼 확인서",
    "운전면허증 인증",
    "국적 포기 신청·확인서 발급"
  ];

  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-[15px] items-start justify-start p-0 relative shrink-0 w-full">
      {services.map((service, index) => (
        <ServiceTag
          key={index}
          title={service}
          isActive={activeService === service}
          onClick={() => setActiveService(service)}
        />
      ))}
      
      {/* Additional Service Navigation */}
      <div 
        className="bg-[#136bd0] hover:bg-[#1155a0] transition-colors box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-2.5 relative rounded-[7px] shrink-0 cursor-pointer"
        onClick={() => onNavigate('service02')}
      >
        <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-center text-nowrap">
          <p className="block leading-[normal] whitespace-pre">번역 · 인증 서비스</p>
        </div>
      </div>
    </div>
  );
}

function ServiceDetail({ service }: { service: string }) {
  if (service !== "아기 출생증명서 · 여권") {
    return (
      <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
          <div className="absolute border-[#bcbcbc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
          <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[36px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">{service}</p>
          </div>
        </div>
        <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left w-full">
          <p className="block leading-[28px]">
            해당 서비스에 대한 자세한 정보는 고객센터로 문의해 주시기 바랍니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
        <div className="absolute border-[#bcbcbc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
        <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[36px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            아기 출생증명서·여권
          </p>
        </div>
      </div>
      <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left w-full">
        <p className="block leading-[28px]">
          병원의 출생증명서, 부모의 여권 원본, 부의 베트남 신분증 사본, 아기의
          사진 2장, 아기 이름
        </p>
      </div>
      
      {/* Service Details Table */}
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 w-full">
        {/* Documents Required */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <div className="absolute border-[#da1a1a] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-[50px] py-2.5 relative w-full">
              <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#da1a1a] text-[26px] text-left text-nowrap tracking-[1.3px]">
                <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
                  구비서류
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-[70px] pt-[35px] px-[52px] relative shrink-0 w-full">
          <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap tracking-[0.9px]">
            <ul className="css-ed5n1g list-disc">
              <li className="mb-0 ms-[27px]">
                <span className="adjustLetterSpacing leading-[28px]">
                  병원의 출생증명서 1부
                </span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="adjustLetterSpacing leading-[28px]">
                  부모의 여권 원본
                </span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="adjustLetterSpacing leading-[28px]">
                  부의 베트남 신분증 사본 1부
                </span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="adjustLetterSpacing leading-[28px]">
                  아기의 사진 2장
                </span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="adjustLetterSpacing leading-[28px]">
                  아기 이름
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Guidance */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <div className="absolute border-[#bcbcbc] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-[50px] py-2.5 relative w-full">
              <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[26px] text-left text-nowrap tracking-[1.3px]">
                <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
                  안내사항
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-[70px] pt-[35px] px-[52px] relative shrink-0 w-full">
          <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap tracking-[0.9px]">
            <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
              한국에서 혼인 또는 이혼 신고후 대사과에서 발급하는 서류 선 베트남
              혼인신고 결혼서류 작성
            </p>
          </div>
        </div>

        {/* Cost */}
        <div className="bg-[#ffffff] relative shrink-0 w-full">
          <div className="absolute border-[#bcbcbc] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-[50px] py-2.5 relative w-full">
              <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[26px] text-left text-nowrap tracking-[1.3px]">
                <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
                  비용
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 box-border content-stretch flex flex-row gap-2.5 items-start justify-start pb-[70px] pt-[35px] px-[52px] relative shrink-0 w-full">
          <div className="font-['Pretendard:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap tracking-[0.9px] whitespace-pre">
            <p className="adjustLetterSpacing block mb-0">결혼확인서: 60만원</p>
            <p className="adjustLetterSpacing block">이혼확인서: 70만원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerServiceBanner() {
  return (
    <div
      className="h-[248px] relative shrink-0 w-full"
      data-name="banner 3"
    >
      <div className="absolute bg-[#136bd0] bottom-0 left-0 right-0 rounded-[30px] top-[16.532%]" />
      <div
        className="absolute bottom-[12.5%] left-[76.636%] right-[3.636%] top-0"
        data-name="Team"
      >
        <div className="absolute bottom-[-9.217%] left-[-6.912%] right-[-6.912%] top-[-4.608%]">
          <img
            className="block max-w-none size-full"
            height="247"
            loading="lazy"
            src={imgTeam}
            width="247"
          />
        </div>
      </div>
      <div className="absolute bottom-[22.984%] box-border content-stretch flex flex-row items-center justify-between left-[5.455%] p-0 right-[28.454%] top-[39.919%]">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0">
          <div className="font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#f2c94c] text-[43px] text-left text-nowrap">
            <p className="block leading-[30px] whitespace-pre">
              자세한 상담을 원하시나요?
            </p>
          </div>
          <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center text-nowrap">
            <div className="font-['Pretendard:SemiBold',_sans-serif] not-italic relative shrink-0 text-[28px] tracking-[1.4px]">
              <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
                고객센터
              </p>
            </div>
            <div className="font-['Montserrat:Medium',_sans-serif] font-medium relative shrink-0 text-[29px] tracking-[-0.58px]">
              <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
                02 734 7420
              </p>
            </div>
          </div>
        </div>
        <div className="[text-shadow:rgba(0,0,0,0.15)_0px_4px_15px] font-['Pretendard:Medium',_sans-serif] leading-[23px] not-italic relative shrink-0 text-[#ffffff] text-[17px] text-nowrap text-right tracking-[-0.34px] whitespace-pre">
          <p className="adjustLetterSpacing block mb-0">문의 시간 :</p>
          <p className="adjustLetterSpacing block mb-0">
            평일 오전 9시 ~ 오후 6시
          </p>
          <p className="adjustLetterSpacing block mb-0">
            주말 오전 9시 ~ 오후 3시
          </p>
          <p className="adjustLetterSpacing block">(공휴일 휴무)</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute bottom-[-0.003%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[32.4223px_37px] right-[75.06%] top-0"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 33 37"
      >
        <g id="Group">
          <path
            d={svgPaths.p1b29a200}
            fill="var(--fill-0, #D0D0D0)"
            id="Vector"
          />
          <path
            d={svgPaths.p1757ae80}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p15f6d80}
            fill="var(--fill-0, #A9A9A9)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3ca74b80}
            fill="var(--fill-0, #929292)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p10f12200}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-[75.06%] top-0"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

function LogoSvg1() {
  return (
    <div className="h-[37px] relative shrink-0 w-[130px]" data-name="logo svg">
      <ClipPathGroup1 />
      <div
        className="absolute bottom-[40.787%] left-[31.822%] right-0 top-[23.013%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 89 14"
        >
          <path d={svgPaths.pac5f980} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div
        className="absolute bottom-[15.439%] left-[32.025%] right-[1.39%] top-[67.165%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 87 7"
        >
          <path
            d={svgPaths.p35f9b7f0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      className="bg-[#1b1b1b] box-border content-stretch flex flex-row items-end justify-between px-[100px] py-[50px] w-full mt-auto"
      data-name="footer"
    >
      <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0">
        <LogoSvg1 />
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pl-10 pr-0 py-0 relative shrink-0">
          <div className="flex flex-col font-['Pretendard:Light',_sans-serif] justify-center leading-[23px] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap whitespace-pre">
            <p className="block mb-0">
              서울특별시 종로구 종로 19, B동 1215호 (종로1가, 르메이에르 종로타운)
              <br />
              대표전화 : 02) 734-7420 (한국어)
            </p>
            <p className="block mb-0">
              휴대폰 : 010-3223-7188 (한국), 010-8969-2394 (베트남)
              <br />
              회사명 : 썬웨이
            </p>
            <p className="block mb-0">대표자 : 김성림</p>
            <p className="block">사업자 등록번호: 101-07-78324</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Pretendard:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          Copyrightⓒ SUNWAY All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default function Services({ currentPage, onNavigate }: NavigationProps) {
  const [activeService, setActiveService] = useState("아기 출생증명서 · 여권");

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col w-full" data-name="services">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="w-full max-w-[1100px] mx-auto px-[100px] py-[30px]">
        {/* Service Header */}
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full mb-[50px]">
          <SectionHeader />
          <ServiceTagsSection activeService={activeService} setActiveService={setActiveService} onNavigate={onNavigate} />
        </div>

        {/* Service Detail */}
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full mb-[50px]">
          <ServiceDetail service={activeService} />
        </div>

        {/* Customer Service Banner */}
        <CustomerServiceBanner />
      </div>
      
      <Footer />
    </div>
  );
}