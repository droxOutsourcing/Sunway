import Header from "./Header";
import svgPaths from "../imports/svg-c4e73c007s";
import imgFrame1021 from "figma:asset/99cbc9b1e0357dc5afdd5ea6021834ca1fbab91a.png";
import { imgGroup1 } from "../imports/svg-7e7lr";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  noticeId?: number;
}

interface NoticeDetailData {
  id: number;
  title: string;
  date: string;
  content: string;
}

// Mock data for notice details - in a real app, this would come from an API
const noticeDetailData: Record<number, NoticeDetailData> = {
  1: {
    id: 1,
    title: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    date: "2025-01-10",
    content: `어머님, 그리고 당신은 멀리 북간도에 계십니다. 계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 소학교 때 책상을 같이 했던 아이들의 이름과 패, 경, 옥 이런 이국소녀들의 이름과 벌써 아기 어머니된 계집애들의 이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, 프랑시스 잠, 라이너 마리아 릴케 이런 시인의 이름을 불러 봅니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 그러나, 겨울이 지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다. 그러나, 겨울이 지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다.

나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 어머님, 그리고 당신은 멀리 북간도에 계십니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다.`
  },
  2: {
    id: 2,
    title: "나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.",
    date: "2025-01-10",
    content: "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다."
  },
  // Add more notice details as needed
};

function NoticeHeader({ notice }: { notice: NoticeDetailData }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Pretendard:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{notice.date}</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[26px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.3]">
          {notice.title}
        </p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1100 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, black)"
              x2="1100"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NoticeContent({ content }: { content: string }) {
  return (
    <div
      className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[23px] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] text-left"
      style={{ width: "min-content" }}
    >
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="block mb-0">
          {paragraph}
          {index < content.split('\n\n').length - 1 && <>&nbsp;</>}
        </p>
      ))}
    </div>
  );
}

function BackToListButton({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div 
      className="bg-[#1b1b1b] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[25px] py-2.5 relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[#333333] transition-colors"
      onClick={() => onNavigate('news')}
    >
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap">
        <p className="block leading-[23px] whitespace-pre">목록으로</p>
      </div>
    </div>
  );
}

function StudyAbroadBanner() {
  return (
    <div className="bg-[#8431ea] h-[190px] relative rounded-[30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[190px] items-center justify-between px-[60px] py-[30px] relative w-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-center p-0 relative shrink-0">
            <div className="flex flex-col font-['Pretendard:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[26px] text-center text-nowrap">
              <p className="leading-[normal] whitespace-pre">
                <span className="font-['Pretendard:Bold',_sans-serif] not-italic">{`SUNWAY 유학원 `}</span>
                홈페이지 바로가기
              </p>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="h-2.5 relative w-[154px]" data-name="Vector">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 154 10"
                  >
                    <path
                      d={svgPaths.p2c244800}
                      fill="var(--fill-0, #FFEF0C)"
                      id="Vector"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-center bg-cover bg-no-repeat rounded-[999px] shrink-0 size-[214px] cursor-pointer hover:scale-105 transition-transform"
            data-name="Frame 102 1"
            style={{ backgroundImage: `url('${imgFrame1021}')` }}
            onClick={() => window.open('https://www.sunway-studyabroad.com', '_blank')}
          />
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

export default function NoticeDetail({ currentPage, onNavigate, noticeId = 1 }: NavigationProps) {
  const notice = noticeDetailData[noticeId] || noticeDetailData[1];

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col w-full" data-name="notice detail">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="w-full max-w-[1100px] mx-auto px-[100px] py-[30px] flex-1">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-end justify-start p-0 relative shrink-0 w-full">
          <NoticeHeader notice={notice} />
          <NoticeContent content={notice.content} />
          <BackToListButton onNavigate={onNavigate} />
          <StudyAbroadBanner />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}