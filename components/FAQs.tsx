import { useState } from "react";
import Header from "./Header";
import svgPaths from "../imports/svg-c8yw6wjg7k";
import { imgGroup1 } from "../imports/svg-pl81z";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 2,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 3,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 4,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 5,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "그러나, 겨울이 지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 6,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "어머님, 그리고 당신은 멀리 북간도에 계십니다. 계절이 지나가는 하늘에는 가을로 가득 차 있습니다.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 7,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "소학교 때 책상을 같이 했던 아이들의 이름과 패, 경, 옥 이런 이국소녀들의 이름과 벌써 아기 어머니된 계집애들의 이름과.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 8,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, 프랑시스 잠, 라이너 마리아 릴케 이런 시인의 이름을 불러 봅니다.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 9,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다.",
    category: "FAQ 관련 카테고리 분류명"
  },
  {
    id: 10,
    question: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    answer: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    category: "FAQ 관련 카테고리 분류명"
  }
];

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
              가장 궁금해 하시는 질문
            </p>
          </div>
          <div className="flex flex-col font-['Pretendard:Regular',_sans-serif] justify-center relative shrink-0 text-[14px]">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              FAQs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryHeader() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start px-0 py-[15px] relative shrink-0 w-full">
      <div className="absolute border-[#c8c8c8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[28px] text-left text-nowrap tracking-[-1px]">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          FAQ 관련 카테고리 분류명
        </p>
      </div>
    </div>
  );
}

function FAQAccordionItem({ 
  faq, 
  isExpanded, 
  onToggle 
}: { 
  faq: FAQItem; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
      {/* Question */}
      <div className="relative shrink-0 w-full">
        <div className={`absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none ${isExpanded ? '' : ''}`} />
        <div className="flex flex-row items-center relative size-full">
          <div 
            className="box-border content-stretch flex flex-row items-center justify-between px-[25px] py-[15px] relative w-full cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={onToggle}
          >
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pl-[5px] pr-0 py-0 relative shrink-0">
              <div className="flex flex-col font-['Pretendard:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">
                  {faq.question}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className={`transition-transform duration-200 ${isExpanded ? 'scale-y-[-100%]' : ''}`}>
                <div
                  className="h-[11.656px] relative w-[17.75px]"
                  data-name="Vector"
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 18 12"
                  >
                    <path
                      d={svgPaths.p35efcc00}
                      fill="var(--fill-0, black)"
                      id="Vector"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answer - Expandable */}
      {isExpanded && (
        <div className="bg-[#f1f1f1] relative shrink-0 w-full">
          <div className="absolute border-[#000000] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-between pb-[60px] pt-[30px] px-[25px] relative w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pl-[5px] pr-0 py-0 relative w-full">
                    <div className="basis-0 flex flex-col font-['Pretendard:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[16px] text-left">
                      <p className="block leading-[normal]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQList() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([1])); // First item expanded by default

  const toggleItem = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
      {faqData.map((faq) => (
        <FAQAccordionItem
          key={faq.id}
          faq={faq}
          isExpanded={expandedItems.has(faq.id)}
          onToggle={() => toggleItem(faq.id)}
        />
      ))}
    </div>
  );
}

function PaginationButton({ 
  number, 
  isActive = false, 
  onClick 
}: { 
  number: number; 
  isActive?: boolean; 
  onClick: () => void;
}) {
  return (
    <div 
      className={`${isActive ? 'bg-[#136bd0]' : 'bg-[rgba(217,217,217,0.3)]'} box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[3px] shrink-0 size-[19px] cursor-pointer hover:opacity-80 transition-opacity`}
      onClick={onClick}
    >
      {!isActive && (
        <div className="absolute border-[0.3px] border-[rgba(0,0,0,0.45)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      )}
      <div className={`flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 ${isActive ? 'text-[#ffffff]' : 'text-[rgba(0,0,0,0.45)]'} text-[10px] text-left text-nowrap tracking-[-0.3px]`}>
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          {number}
        </p>
      </div>
    </div>
  );
}

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-start justify-start p-0 relative shrink-0"
      data-name="pagination"
    >
      {[1, 2, 3, 5].map((pageNum) => (
        <PaginationButton
          key={pageNum}
          number={pageNum}
          isActive={currentPage === pageNum}
          onClick={() => setCurrentPage(pageNum)}
        />
      ))}
    </div>
  );
}

function CustomerServiceBanner() {
  return (
    <div className="bg-[#c094f6] h-[190px] relative rounded-[30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-20 h-[190px] items-center justify-start pl-[150px] pr-5 py-[30px] relative w-full">
          <div className="box-border content-stretch flex flex-col gap-[5px] h-[101px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center text-nowrap">
            <div className="flex flex-col font-['Pretendard:Bold',_sans-serif] justify-center not-italic relative shrink-0 text-[26px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                SUNWAY 고객 상담 센터
              </p>
            </div>
            <div className="font-['Montserrat:Medium',_sans-serif] font-medium relative shrink-0 text-[28px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                02 734 7420
              </p>
            </div>
          </div>
          <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(0,0,0,0.3)] box-border content-stretch flex flex-row gap-2.5 h-[150px] items-center justify-center px-[50px] py-[15px] relative rounded-[15px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] shrink-0 w-[398px]">
            <div className="[text-shadow:rgba(0,0,0,0.15)_0px_4px_15px] font-['Pretendard:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#ffffff] text-[21px] text-center text-nowrap tracking-[-0.42px] whitespace-pre">
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

export default function FAQs({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col w-full" data-name="faqs">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="w-full max-w-[1100px] mx-auto px-[100px] py-[30px]">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start p-0 relative shrink-0 w-full">
          <PageHeader />
          <CategoryHeader />
          <FAQList />
          <Pagination />
        </div>
        
        <div className="mt-[60px]">
          <CustomerServiceBanner />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}