import { useState } from "react";
import svgPaths from "../imports/svg-psqffacfxq";
import imgRectangle13 from "figma:asset/c646a7f999e0ea284b286f1826c19e8ae4ff7cb6.png";
import { imgGroup, imgGroup1 } from "../imports/svg-h98b3";

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
        isActive={currentPage === 'services'}
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

function PageHeader() {
  return (
    <div
      className="bg-[#1b1b1b] h-[120px] relative rounded-[20px] shrink-0 w-full"
      data-name="page header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[120px] items-center justify-between leading-[0] not-italic px-[60px] py-[38px] relative text-[#ffffff] text-left text-nowrap w-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center relative shrink-0 text-[36px] tracking-[-1px]">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              문의 및 상담
            </p>
          </div>
          <div className="flex flex-col font-['Pretendard:Regular',_sans-serif] justify-center relative shrink-0 text-[14px]">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              Contact us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerServiceSection() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[30px] items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 box-border content-stretch flex flex-col font-['Pretendard:Medium',_sans-serif] gap-2.5 grow items-center justify-center leading-[0] min-h-px min-w-px not-italic px-0 py-2.5 relative shrink-0 text-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[#000000] text-[36px] text-left tracking-[-1px]">
          <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
            고객센터
          </p>
        </div>
        <div className="[text-shadow:rgba(0,0,0,0.15)_0px_4px_15px] relative shrink-0 text-[#136bd0] text-[17px] text-right tracking-[-0.34px]">
          <p className="adjustLetterSpacing block leading-[23px] text-nowrap whitespace-pre">
            운영 시간 : 평일 오전 9시 ~ 오후 6시 / 주말 오전 9시 ~ 오후 3시
            (공휴일 휴무)
          </p>
        </div>
      </div>
      <div className="bg-[#f2f2f2] box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[30px] relative rounded-[15px] shrink-0 w-[452px]">
        <div className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[15px]" />
        <div className="box-border content-stretch flex flex-row font-['Pretendard:Medium',_sans-serif] gap-[15px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[21px] text-left text-nowrap tracking-[-1px]">
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              전화 :
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              02 734 7420
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              (한국어 상담)
            </p>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row font-['Pretendard:Medium',_sans-serif] gap-[15px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[21px] text-left text-nowrap tracking-[-1px]">
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              카카오톡 :
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              카카오톡 ID
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              (한국어 상담)
            </p>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row font-['Pretendard:Medium',_sans-serif] gap-[15px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[21px] text-left text-nowrap tracking-[-1px]">
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              ZALO :
            </p>
          </div>
          <a
            className="[white-space-collapse:collapse] flex flex-col justify-center relative shrink-0"
            href="https://id.zalo.me/account?continue=https%3A%2F%2Foa.zalo.me%2Fmanage%2Foa"
          >
            <p className="adjustLetterSpacing block cursor-pointer leading-[normal] text-nowrap whitespace-pre">
              https://id.zalo.me
            </p>
          </a>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              (Tiếng Việt)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[36px] text-left tracking-[-1.8px] w-full">
        <p className="block leading-[52px]">상담 문의</p>
      </div>
      <div className="box-border content-stretch flex flex-row items-end justify-between p-0 relative shrink-0 w-full">
        <form onSubmit={handleSubmit} className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start px-10 py-[35px] relative rounded-[30px] shrink-0 w-[577px]">
          <div className="absolute border border-[#c1c1c1] border-solid inset-0 pointer-events-none rounded-[30px]" />
          
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[21px] text-left tracking-[-1.05px] w-full">
              <p className="block leading-[normal]">이름</p>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-[52px] relative rounded-[999px] shrink-0 w-full border border-[#000000] border-solid px-4 focus:outline-none focus:border-[#136bd0]"
              required
            />
          </div>

          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[21px] text-left tracking-[-1.05px] w-full">
              <p className="block leading-[normal]">이메일 주소</p>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-[52px] relative rounded-[999px] shrink-0 w-full border border-[#000000] border-solid px-4 focus:outline-none focus:border-[#136bd0]"
              required
            />
          </div>

          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[21px] text-left tracking-[-1.05px] w-full">
              <p className="block leading-[normal]">연락처</p>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="h-[52px] relative rounded-[999px] shrink-0 w-full border border-[#000000] border-solid px-4 focus:outline-none focus:border-[#136bd0]"
              required
            />
          </div>

          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[21px] text-left tracking-[-1.05px] w-full">
              <p className="block leading-[normal]">문의 사항</p>
            </div>
            <textarea
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="h-[186px] relative rounded-[25px] shrink-0 w-full border border-[#000000] border-solid p-4 focus:outline-none focus:border-[#136bd0] resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#121212] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[25px] py-[15px] relative rounded-[15px] shrink-0 hover:bg-[#333333] transition-colors"
          >
            <div className="font-['Pretendard:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-left text-nowrap tracking-[-1.05px]">
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                문의 보내기
              </p>
            </div>
          </button>
        </form>

        <div
          className="[background-size:cover,_auto] bg-[#d9d9d9] bg-[position:50%_50%,_0%_0%] h-[706px] rounded-[30px] shrink-0 w-[498px]"
          style={{ backgroundImage: `url('${imgRectangle13}')` }}
        />
      </div>
    </div>
  );
}

function GoogleMapSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start leading-[0] p-0 relative shrink-0 w-full">
      <div
        className="font-['Pretendard:SemiBold',_sans-serif] min-w-full not-italic relative shrink-0 text-[#121212] text-[36px] text-left tracking-[-1.8px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[52px]">찾아 오시는 길</p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[475px] ml-0 mt-0 rounded-[40px] w-[1100px]" />
        <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[0] ml-[445.5px] mt-[211px] not-italic relative text-[#000000] text-[36px] text-left tracking-[-1.8px] w-[202.4px]">
          <p className="adjustLetterSpacing block leading-[52px]">google map</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
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
      <Group2 />
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

export default function Contact({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col w-full" data-name="contact">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start px-[100px] py-[30px] w-full max-w-[1300px] mx-auto">
        <PageHeader />
        <CustomerServiceSection />
        <ContactForm />
        <GoogleMapSection />
      </div>
      <Footer />
    </div>
  );
}