import { useState } from "react";
import svgPaths from "@/assets/imports/svg-jaix2dnyrf";
import { img } from "@/assets/imports/svg-vctnc";
import { NavigationProps } from "@/types";

function LogoSvg({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div 
      className="h-[43px] relative shrink-0 w-[150px] cursor-pointer" 
      data-name="logo svg"
      onClick={() => onNavigate('home')}
    >
      <div
        className="absolute bottom-0 contents left-0 right-[75.06%] top-0"
        data-name="Clip path group"
      >
        <div
          className="absolute bottom-[-0.003%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.00158691px_0px] mask-size-[206.387px_238px] right-[75.06%] top-0"
          data-name="Group"
          style={{ maskImage: `url('${img}')` }}
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
      </div>
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

function AboutSubMenu({ onNavigate, onClose }: { onNavigate: (page: string) => void; onClose: () => void; }) {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center left-0 px-5 py-[15px] top-full z-50 shadow-lg border border-gray-200 rounded-b-lg"
      data-name="about_sub"
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={onClose}
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
        <div className="absolute border-[#000000] border-[0px_0px_3px] border-solid bottom-[-3px] left-0 pointer-events-none right-0 top-0" />
        <div 
          className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-center text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors"
          onClick={() => { onNavigate('about'); onClose(); }}
        >
          <p className="block leading-[normal] whitespace-pre">회사 개요</p>
        </div>
      </div>
      <div 
        className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors"
        onClick={() => { onNavigate('about'); onClose(); }}
      >
        <p className="block leading-[normal] whitespace-pre">연혁 · 비전</p>
      </div>
      <div 
        className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors"
        onClick={() => { onNavigate('about'); onClose(); }}
      >
        <p className="block leading-[normal] whitespace-pre">조직도</p>
      </div>
      <div 
        className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors"
        onClick={() => { onNavigate('about'); onClose(); }}
      >
        <p className="block leading-[normal] whitespace-pre">사무소 안내</p>
      </div>
    </div>
  );
}

function ServiceSubMenu({ onNavigate, onClose }: { onNavigate: (page: string) => void; onClose: () => void; }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[17px] items-start justify-start left-0 p-4 top-full z-50 bg-white shadow-lg border border-gray-200 rounded-b-lg"
      data-name="service_sub"
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={onClose}
    >
      <div className="box-border content-stretch flex flex-row gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
        <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-5 py-[15px] relative shrink-0">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
            <div className="absolute border-[#000000] border-[0px_0px_3px] border-solid bottom-[-3px] left-0 pointer-events-none right-0 top-0" />
            <div 
              className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-center text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors"
              onClick={() => { onNavigate('services'); onClose(); }}
            >
              <p className="block leading-[normal] whitespace-pre">대사관 업무 대행</p>
            </div>
          </div>
          <div 
            className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors"
            onClick={() => { onNavigate('service02'); onClose(); }}
          >
            <p className="block leading-[normal] whitespace-pre">번역 · 인증 서비스</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">베트남 현지 서비스</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">비자 서비스</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">유학 · 어학연수</p>
          </div>
        </div>
        <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-5 py-[15px] relative shrink-0">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
            <div className="absolute border-[#000000] border-[0px_0px_3px] border-solid bottom-[-3px] left-0 pointer-events-none right-0 top-0" />
            <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
              <p className="block leading-[normal] whitespace-pre">여권 갱신</p>
            </div>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">혼인요건인증서</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">아기 출생증명서 · 여권</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">이중국적</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">각종 위임장</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">영사 확인 (법인/유학 서류)</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">혼인 · 이혼 확인서</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">운전면허증 인증</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap cursor-pointer hover:text-[#136bd0] transition-colors">
            <p className="block leading-[normal] whitespace-pre">국적 포기 신청 · 확인서 발급</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguageSubMenu({ onClose }: { onClose: () => void; }) {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-[5px] items-center justify-center right-0 leading-[0] not-italic px-5 py-[15px] text-[14px] text-left text-nowrap top-full z-50 shadow-lg border border-gray-200 rounded-b-lg"
      data-name="language_selector"
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={onClose}
    >
      <div className="flex flex-col font-['Pretendard:SemiBold',_sans-serif] justify-center relative shrink-0 text-[#136bd0] cursor-pointer">
        <p className="block leading-[20px] text-nowrap whitespace-pre">한국어</p>
      </div>
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center relative shrink-0 text-[#000000] cursor-pointer hover:text-[#136bd0] transition-colors">
        <p className="block leading-[20px] text-nowrap whitespace-pre">Tiếng Việt</p>
      </div>
    </div>
  );
}

function NavigationItem({ 
  title, 
  isActive, 
  onClick, 
  hasDropdown = false,
  onMouseEnter,
  onMouseLeave,
}: { 
  title: string; 
  isActive: boolean; 
  onClick: () => void;
  hasDropdown?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div 
      className="box-border content-stretch flex flex-row gap-[5px] items-center justify-center p-0 relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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

export default function Header({ currentPage, onNavigate }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="relative w-full">
      <div
        className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between px-[60px] py-[15px] w-full max-w-[1100px] mx-auto relative"
        data-name="header"
      >
        <LogoSvg onNavigate={onNavigate} />
        
        <div className="box-border content-stretch flex flex-row gap-[50px] items-center justify-start p-0 relative shrink-0">
          <div className="relative">
            <NavigationItem
              title="회사소개"
              isActive={currentPage === 'about'}
              onClick={() => onNavigate('about')}
              hasDropdown={true}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            />
            {activeDropdown === 'about' && (
              <AboutSubMenu 
                onNavigate={onNavigate} 
                onClose={() => setActiveDropdown(null)} 
              />
            )}
          </div>

          <div className="relative">
            <NavigationItem
              title="서비스"
              isActive={currentPage.startsWith('service')}
              onClick={() => onNavigate('services')}
              hasDropdown={true}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            />
            {activeDropdown === 'services' && (
              <ServiceSubMenu 
                onNavigate={onNavigate} 
                onClose={() => setActiveDropdown(null)} 
              />
            )}
          </div>

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

        <div className="box-border content-stretch flex flex-row gap-[20px] items-center justify-start p-0 relative shrink-0">
          <div className="relative">
            <div 
              className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0 cursor-pointer"
              onMouseEnter={() => handleMouseEnter('language')}
              onMouseLeave={handleMouseLeave}
            >
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
            {activeDropdown === 'language' && (
              <LanguageSubMenu onClose={() => setActiveDropdown(null)} />
            )}
          </div>

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
        </div>
      </div>
    </div>
  );
}