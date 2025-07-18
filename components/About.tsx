import { useState } from "react";
import Header from "./Header";
import svgPaths from "../imports/svg-u2r3bcataf";
import { imgRectangle3 } from "../src/assets/images/placeholder";
import { imgGroup1 } from "../imports/svg-t3qwk";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function HeroSection() {
  return (
    <div className="w-full max-w-[1100px] mx-auto py-[50px] px-[100px]">
      <div className="box-border content-stretch flex flex-row gap-[30px] items-start justify-center p-0 relative w-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left">
          <div className="font-['Pretendard:Medium',_sans-serif] relative shrink-0 text-[36px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">SUNWAY 회사소개</p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] relative shrink-0 text-[16px] w-[485px]">
            <p className="block leading-[23px]">
              계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 계절이 지나가는
              하늘에는 가을로 가득 차 있습니다. 나는 무엇인지 그리워 이 많은 별빛이
              내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다. 별 하나에
              추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에
              시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한
              마디씩 불러 봅니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에
              내 이름자를 써보고 흙으로 덮어 버리었읍니다. 계절이 지나가는 하늘에는
              가을로 가득 차 있습니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못
              헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직
              나의 청춘이 다하지 않은 까닭입니다. 가슴 속에 하나 둘 새겨지는 별을
              이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은
              까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다.
            </p>
          </div>
        </div>
        <div
          className="[background-size:100%_243.89%,_auto] basis-0 bg-[#d9d9d9] grow h-80 min-h-px min-w-px rounded-[30px] shrink-0"
          style={{ backgroundImage: `url('${imgRectangle3}')` }}
        />
      </div>
    </div>
  );
}

function TabButton({ 
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
      className={`basis-0 ${isActive ? 'bg-[#136bd0]' : 'bg-[#ffffff] hover:bg-[#f0f8ff] transition-colors duration-200'} grow min-h-px min-w-px relative rounded-tr-[10px] shrink-0 cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[45px] py-[13px] relative w-full">
          <div className={`font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] ${isActive ? 'font-semibold' : 'font-medium'} leading-[0] not-italic relative shrink-0 ${isActive ? 'text-[#ffffff]' : 'text-[#000000] hover:text-[#136bd0]'} text-[21px] text-left text-nowrap transition-colors duration-200`}>
            <p className="block leading-[normal] whitespace-pre">{title}</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#a9a9a9] border-solid inset-[-0.5px] pointer-events-none rounded-tr-[10.5px]" />
    </div>
  );
}

// Tab Content Components
function CompanyOverviewContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start px-[60px] py-[50px] relative w-full">
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[23px] not-italic relative shrink-0 text-[#000000] text-[16px] text-left w-full">
        <p className="block mb-0">
          어머님, 그리고 당신은 멀리 북간도에 계십니다. 계절이 지나가는
          하늘에는 가을로 가득 차 있습니다. 소학교 때 책상을 같이 했던
          아이들의 이름과 패, 경, 옥 이런 이국소녀들의 이름과 벌써 아기
          어머니된 계집애들의 이름과, 가난한 이웃 사람들의 이름과, 비둘기,
          강아지, 토끼, 노새, 노루, 프랑시스 잠, 라이너 마리아 릴케 이런
          시인의 이름을 불러 봅니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다
          못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요,
          아직 나의 청춘이 다하지 않은 까닭입니다. 나는 무엇인지 그리워 이
          많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어
          버리었읍니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은
          쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의
          청춘이 다하지 않은 까닭입니다. 그러나, 겨울이 지나고 나의 별에도
          봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌 언덕
          위에도 자랑처럼 풀이 무성할 거외다. 그러나, 겨울이 지나고 나의
          별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내 이름자 묻힌
          언덕 위에도 자랑처럼 풀이 무성할 거외다.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 나는
          무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고
          흙으로 덮어 버리었읍니다. 계절이 지나가는 하늘에는 가을로 가득 차
          있습니다. 어머님, 그리고 당신은 멀리 북간도에 계십니다. 나는 아무
          걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 계절이 지나가는
          하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의
          별들을 다 헬 듯합니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을
          슬퍼하는 까닭입니다.
        </p>
      </div>

      {/* Office Sections */}
      <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left w-full">
        <div className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[32px] w-full">
          <p className="block leading-[normal]">한국 사무소</p>
        </div>
        <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[23px] relative shrink-0 text-[16px] w-full">
          <p className="block mb-0">
            어머님, 그리고 당신은 멀리 북간도에 계십니다. 계절이 지나가는 하늘에는
            가을로 가득 차 있습니다. 소학교 때 책상을 같이 했던 아이들의 이름과
            패, 경, 옥 이런 이국소녀들의 이름과 벌써 아기 어머니된 계집애들의
            이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루,
            프랑시스 잠, 라이너 마리아 릴케 이런 시인의 이름을 불러 봅니다. 가슴
            속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는
            까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은
            까닭입니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내
            이름자를 써보고 흙으로 덮어 버리었읍니다. 가슴 속에 하나 둘 새겨지는
            별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은
            까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 그러나, 겨울이
            지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내
            이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다. 그러나, 겨울이
            지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내
            이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다.
          </p>
          <p className="block mb-0">&nbsp;</p>
          <p className="block">
            나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 나는 무엇인지
            그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어
            버리었읍니다. 계절이 지나가는 하늘에는 가을로 가득 차 있습니다.
            어머님, 그리고 당신은 멀리 북간도에 계십니다. 나는 아무 걱정도 없이
            가을 속의 별들을 다 헬 듯합니다. 계절이 지나가는 하늘에는 가을로 가득
            차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다.
            딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다.
          </p>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left w-full">
        <div className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[32px] w-full">
          <p className="block leading-[normal]">베트남 사무소</p>
        </div>
        <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[23px] relative shrink-0 text-[16px] w-full">
          <p className="block mb-0">
            어머님, 그리고 당신은 멀리 북간도에 계십니다. 계절이 지나가는 하늘에는
            가을로 가득 차 있습니다. 소학교 때 책상을 같이 했던 아이들의 이름과
            패, 경, 옥 이런 이국소녀들의 이름과 벌써 아기 어머니된 계집애들의
            이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루,
            프랑시스 잠, 라이너 마리아 릴케 이런 시인의 이름을 불러 봅니다. 가슴
            속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는
            까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은
            까닭입니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내
            이름자를 써보고 흙으로 덮어 버리었읍니다. 가슴 속에 하나 둘 새겨지는
            별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은
            까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 그러나, 겨울이
            지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내
            이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다. 그러나, 겨울이
            지나고 나의 별에도 봄이 오면, 무덤 위에 파란 잔디가 피어나듯이 내
            이름자 묻힌 언덕 위에도 자랑처럼 풀이 무성할 거외다.
          </p>
          <p className="block mb-0">&nbsp;</p>
          <p className="block">
            나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 나는 무엇인지
            그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어
            버리었읍니다. 계절이 지나가는 하늘에는 가을로 가득 차 있습니다.
            어머님, 그리고 당신은 멀리 북간도에 계십니다. 나는 아무 걱정도 없이
            가을 속의 별들을 다 헬 듯합니다. 계절이 지나가는 하늘에는 가을로 가득
            차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다.
            딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function HistoryVisionContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start px-[60px] py-[50px] relative w-full">
      <div className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[32px] w-full text-[#000000]">
        <p className="block leading-[normal]">회사 연혁</p>
      </div>
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[23px] not-italic relative shrink-0 text-[#000000] text-[16px] text-left w-full">
        <p className="block mb-0">
          <strong>2020년 12월</strong> - 썬웨이(SUNWAY) 설립<br />
          <strong>2021년 03월</strong> - 베트남 호치민 지사 설립<br />
          <strong>2021년 06월</strong> - 대사관 업무 대행 서비스 시작<br />
          <strong>2022년 01월</strong> - 번역 및 인증 서비스 확장<br />
          <strong>2022년 08월</strong> - 비자 서비스 부문 강화<br />
          <strong>2023년 03월</strong> - 유학 및 어학연수 서비스 론칭<br />
          <strong>2024년 01월</strong> - 베트남 현지 서비스 확대
        </p>
      </div>

      <div className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[32px] w-full text-[#000000] mt-[30px]">
        <p className="block leading-[normal]">비전과 미션</p>
      </div>
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[23px] not-italic relative shrink-0 text-[#000000] text-[16px] text-left w-full">
        <p className="block mb-0">
          <strong>비전(Vision)</strong><br />
          한국과 베트남을 잇는 가교 역할을 하며, 두 나라 간의 문화적, 경제적 교류를 
          활성화하는 최고의 파트너가 되겠습니다.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block">
          <strong>미션(Mission)</strong><br />
          - 고객 중심의 맞춤형 서비스 제공<br />
          - 신뢰할 수 있는 전문적인 업무 처리<br />
          - 지속적인 품질 개선과 혁신<br />
          - 한-베 양국의 상호 이해와 협력 증진
        </p>
      </div>
    </div>
  );
}

function OrganizationContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start px-[60px] py-[50px] relative w-full">
      <div className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[32px] w-full text-[#000000]">
        <p className="block leading-[normal]">조직도</p>
      </div>
      
      <div className="w-full">
        <div className="bg-[#f8f9fa] border border-[#dee2e6] rounded-lg p-6">
          <div className="text-center mb-8">
            <div className="bg-[#136bd0] text-white px-6 py-3 rounded-lg inline-block">
              <strong>대표이사</strong><br />
              김성림
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#ffffff] border border-[#dee2e6] px-4 py-3 rounded-lg">
                <strong>한국 사무소</strong><br />
                <span className="text-sm">서울특별시 종로구</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  대사관 업무팀
                </div>
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  번역 인증팀
                </div>
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  고객지원팀
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ffffff] border border-[#dee2e6] px-4 py-3 rounded-lg">
                <strong>베트남 사무소</strong><br />
                <span className="text-sm">호치민시</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  현지 서비스팀
                </div>
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  비자 업무팀
                </div>
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  유학 상담팀
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ffffff] border border-[#dee2e6] px-4 py-3 rounded-lg">
                <strong>관리부</strong><br />
                <span className="text-sm">운영 관리</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  회계팀
                </div>
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  인사팀
                </div>
                <div className="bg-[#e9ecef] px-3 py-2 rounded text-sm">
                  마케팅팀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OfficesContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start px-[60px] py-[50px] relative w-full">
      <div className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold relative shrink-0 text-[32px] w-full text-[#000000]">
        <p className="block leading-[normal]">사무소 안내</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* 한국 사무소 */}
        <div className="bg-[#f8f9fa] border border-[#dee2e6] rounded-lg p-6">
          <h3 className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[24px] mb-4 text-[#136bd0]">
            한국 사무소 (Korea Office)
          </h3>
          <div className="space-y-3 text-[16px] leading-[1.5]">
            <div>
              <strong>주소:</strong><br />
              서울특별시 종로구 종로 19, B동 1215호<br />
              (종로1가, 르메이에르 종로타운)
            </div>
            <div>
              <strong>전화:</strong> 02) 734-7420
            </div>
            <div>
              <strong>휴대폰:</strong> 010-3223-7188
            </div>
            <div>
              <strong>운영시간:</strong><br />
              평일: 오전 9시 - 오후 6시<br />
              주말: 오전 9시 - 오후 3시<br />
              (공휴일 휴무)
            </div>
            <div>
              <strong>주요 업무:</strong><br />
              - 대사관 업무 대행<br />
              - 번역 및 인증 서비스<br />
              - 비자 상담 및 신청<br />
              - 유학 및 어학연수 상담
            </div>
          </div>
        </div>

        {/* 베트남 사무소 */}
        <div className="bg-[#f0f8ff] border border-[#b3d9ff] rounded-lg p-6">
          <h3 className="font-['Inter:Semi_Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-semibold text-[24px] mb-4 text-[#136bd0]">
            베트남 사무소 (Vietnam Office)
          </h3>
          <div className="space-y-3 text-[16px] leading-[1.5]">
            <div>
              <strong>주소:</strong><br />
              Ho Chi Minh City, Vietnam<br />
              District 1, Central Business Area
            </div>
            <div>
              <strong>휴대폰:</strong> 010-8969-2394 (베트남)
            </div>
            <div>
              <strong>현지 연락처:</strong> +84-xxx-xxx-xxxx
            </div>
            <div>
              <strong>운영시간:</strong><br />
              현지시간 기준<br />
              평일: 오전 8시 - 오후 5시<br />
              토요일: 오전 9시 - 오후 1시
            </div>
            <div>
              <strong>주요 업무:</strong><br />
              - 베트남 현지 서비스<br />
              - 비자 신청 지원<br />
              - 현지 학교 연계<br />
              - 생활 정착 지원
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff3cd] border border-[#ffeaa7] rounded-lg p-4 w-full">
        <p className="text-[14px] text-[#856404] mb-0">
          <strong>알림:</strong> 방문 전 사전 예약을 통해 보다 신속한 서비스를 받으실 수 있습니다. 
          긴급한 경우 휴대폰으로 연락 주시기 바랍니다.
        </p>
      </div>
    </div>
  );
}

function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "회사 개요", content: <CompanyOverviewContent /> },
    { title: "연혁·비전", content: <HistoryVisionContent /> },
    { title: "조직도", content: <OrganizationContent /> },
    { title: "Offices / 사무소 안내", content: <OfficesContent /> }
  ];

  return (
    <div className="w-full max-w-[1100px] mx-auto px-[100px] pb-[50px]">
      <div
        className="box-border content-stretch flex flex-col items-start justify-start p-0 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] w-full"
        data-name="tabs"
      >
        {/* Tab Headers */}
        <div className="box-border content-stretch flex flex-row gap-[30px] items-center justify-start p-0 relative shrink-0 w-full">
          {tabs.map((tab, index) => (
            <TabButton 
              key={index}
              title={tab.title} 
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative rounded-bl-[25px] rounded-br-[25px] shrink-0 w-full">
          <div className="absolute border border-[#a9a9a9] border-solid inset-0 pointer-events-none rounded-bl-[25px] rounded-br-[25px]" />
          <div className="relative size-full">
            {tabs[activeTab].content}
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

export default function About({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col w-full" data-name="about">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <HeroSection />
      <TabsSection />
      <Footer />
    </div>
  );
}