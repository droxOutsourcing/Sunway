import { useState } from "react";
import Header from "../components/Header";
import svgPaths from "./svg-rc4gtmbmhr";
import imgRectangle10 from "figma:asset/21132b55dd0e427d80574c00ef1c95fe69d9eda3.png";
import imgFrame98 from "figma:asset/01017c238e26936ca54d967bf455075dd17f6ac7.png";
import imgFrame99 from "figma:asset/728fac6f1da5dd7e42e34f80889d9fd907209556.png";
import imgFrame100 from "figma:asset/bf9b481ef450ad3b53f412d6b986c2ac08c589e5.png";
import imgFrame101 from "figma:asset/37d0d7357e03ae6c753172b7cbb74dadc820d492.png";
import imgFrame102 from "figma:asset/f257f2cd318b98048f672c489bf95f43a7b5a90f.png";
import imgRectangle11 from "figma:asset/563aeb1f3ce4d2c1f661d4f698fdaf658ca0d888.png";
import imgRectangle1 from "figma:asset/e39be1a19c74a76e4594a22e01496322737d2e99.png";
import imgRectangle2 from "figma:asset/64aeacbd4b789fa1e31ca61faf2cdacaa0593fbe.png";
import imgRectangle3 from "figma:asset/36f394b58a17415a78cda4d0c8a15b7b8f5e538b.png";
import imgRectangle4 from "figma:asset/e182f49d1acbc17e200d585dffaf4dbb9a7e7424.png";
import imgRectangle5 from "figma:asset/4e55d09702aadc538cebca4fe06d270ca0add0f7.png";
import { imgGroup, imgGroup1 } from "./svg-s3f8m";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "../components/ui/carousel";
import { useEffect } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Group() {
  return (
    <div
      className="absolute bottom-[-0.003%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.000488281px_0px] mask-size-[37.4104px_43px] right-[75.06%] top-0"
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
            fill="url(#paint0_linear_1_597)"
            id="Vector"
          />
          <path
            d={svgPaths.p25f0ea00}
            fill="url(#paint1_linear_1_597)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p12ef8100}
            fill="url(#paint2_linear_1_597)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p959a780}
            fill="url(#paint3_linear_1_597)"
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
            id="paint0_linear_1_597"
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
            id="paint1_linear_1_597"
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
            id="paint2_linear_1_597"
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
            id="paint3_linear_1_597"
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

function LogoSvg() {
  return (
    <div className="h-[43px] relative shrink-0 w-[150px]" data-name="logo svg">
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

function MainBanner() {
  return (
    <div
      className="bg-[#27cee0] box-border content-stretch flex flex-row h-[140px] items-center justify-between px-[70px] py-[9px] relative rounded-[30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-[720px]"
      data-name="banner"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap">
        <div className="flex flex-col font-['Pretendard:Bold',_sans-serif] justify-center relative shrink-0 text-[#0e3db2] text-[0px] whitespace-pre">
          <p className="block font-['Pretendard:Medium',_sans-serif] leading-[34px] mb-0 text-[32px]">
            대사관 접수 대행 인증 회사
          </p>
          <p className="leading-[34px] text-[32px]">
            썬웨이<span>{` SUNWAY`}</span>
          </p>
        </div>
        <div className="flex flex-col font-['Pretendard:Regular',_sans-serif] justify-center relative shrink-0 text-[#ffffff] text-[26px]">
          <p className="block leading-[normal] text-nowrap whitespace-pre">
            Keep up with your dream
          </p>
        </div>
      </div>
      <div
        className="[background-size:158.18%_158.18%,_auto] bg-[#d9d9d9] rounded-[999px] shrink-0 size-[162px]"
        style={{ backgroundImage: `url('${imgRectangle10}')` }}
      />
    </div>
  );
}

function StudyAbroadBanner() {
  return (
    <div className="bg-[#136bd0] box-border content-stretch flex flex-col gap-2.5 h-[140px] items-start justify-start px-[41px] py-[30px] relative rounded-[30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-[353px]">
      <div className="box-border content-stretch flex flex-col gap-[5px] items-center justify-start p-0 relative shrink-0 w-[187px]">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
          <div className="basis-0 flex flex-col font-['Pretendard:Regular',_sans-serif] grow justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[26px] text-center">
            <p className="block font-['Pretendard:Bold',_sans-serif] mb-0">
              SUNWAY 유학원
            </p>
            <p className="block">홈페이지 바로가기</p>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-3 relative w-[185.5px]" data-name="Vector">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 186 12"
              >
                <path
                  d={svgPaths.p38197600}
                  fill="var(--fill-0, #FFEF0C)"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerSection() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[27px] items-center justify-start p-0 relative shrink-0">
      <MainBanner />
      <StudyAbroadBanner />
    </div>
  );
}

function ServiceCard({ 
  title, 
  image, 
  onClick 
}: { 
  title: string; 
  image: string; 
  onClick: () => void;
}) {
  return (
    <div
      className="[background-size:108.29%_115.51%,_auto] bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-[300px] items-start justify-start px-10 py-[30px] relative rounded-[30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-80 cursor-pointer hover:shadow-[0px_8px_25px_0px_rgba(0,0,0,0.15)] transition-shadow"
      style={{ backgroundImage: `url('${image}')` }}
      onClick={onClick}
    >
      <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.6)] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-[5px] relative shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] shrink-0 w-60">
        <div className="font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[21px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">{title}</p>
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-3 relative w-[19px]" data-name="Vector">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 19 12"
              >
                <path
                  d={svgPaths.p3b6a8600}
                  fill="var(--fill-0, black)"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesCarousel({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const services = [
    { title: "대사관 업무 대행", image: imgFrame98 },
    { title: "번역 · 인증 서비스", image: imgFrame99 },
    { title: "베트남 현지 서비스", image: imgFrame100 },
    { title: "비자 서비스", image: imgFrame101 },
    { title: "유학·어학연수", image: imgFrame102 },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="-ml-[15px]">
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-[15px] basis-auto">
              <ServiceCard
                title={service.title}
                image={service.image}
                onClick={() => onNavigate('services')}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation arrows that blend with the design */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg" />
      </Carousel>
    </div>
  );
}

function ServicesPagination({ 
  current, 
  total, 
  onPageChange 
}: { 
  current: number; 
  total: number; 
  onPageChange: (page: number) => void;
}) {
  // Show pagination dots based on the number of "pages" we want to display
  const totalPages = 3; // Original design shows 3 dots
  
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const isActive = Math.ceil(current / 2) === page; // Group items into pages
        
        return (
          <div 
            key={page}
            className={`relative shrink-0 size-2.5 cursor-pointer transition-all`}
            onClick={() => onPageChange(page)}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 10 10"
            >
              <path
                d={svgPaths.p23b61b80}
                fill={isActive ? "var(--fill-0, #27CEE0)" : "var(--fill-0, #6C6C6C)"}
                id="Vector"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

function ServicesSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  const handlePageChange = (page: number) => {
    if (carouselApi) {
      const slideIndex = (page - 1) * 2; // Each "page" shows ~2 slides
      carouselApi.scrollTo(slideIndex);
    }
  };

  return (
    <div className="w-full bg-[#1b1b1b] rounded-[20px] py-[30px] px-[100px]">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[36px] text-left text-nowrap tracking-[-1px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              주요 서비스 바로가기
            </p>
          </div>
          <div 
            className="relative shrink-0 size-6 cursor-pointer"
            onClick={() => onNavigate('services')}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path d={svgPaths.pc293c00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        
        <div className="relative w-full">
          <Carousel
            setApi={setCarouselApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="-ml-[15px]">
              {[
                { title: "대사관 업무 대행", image: imgFrame98 },
                { title: "번역 · 인증 서비스", image: imgFrame99 },
                { title: "베트남 현지 서비스", image: imgFrame100 },
                { title: "비자 서비스", image: imgFrame101 },
                { title: "유학·어학연수", image: imgFrame102 },
              ].map((service, index) => (
                <CarouselItem key={index} className="pl-[15px] basis-auto">
                  <ServiceCard
                    title={service.title}
                    image={service.image}
                    onClick={() => onNavigate('services')}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation arrows */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg" />
          </Carousel>
        </div>
        
        <ServicesPagination 
          current={currentSlide} 
          total={5} 
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

function NoticeCard({ 
  title, 
  content, 
  isHighlighted = false,
  onClick 
}: { 
  title: string; 
  content: string; 
  isHighlighted?: boolean;
  onClick: () => void;
}) {
  return (
    <div 
      className={`bg-[#ffffff] box-border content-stretch flex flex-col gap-[15px] h-[195px] items-center justify-center px-[15px] py-5 relative rounded-[15px] shrink-0 w-[350px] cursor-pointer hover:shadow-[0px_8px_25px_0px_rgba(0,0,0,0.15)] transition-shadow`}
      onClick={onClick}
    >
      <div className={`absolute border ${isHighlighted ? 'border-[#27cee0]' : 'border-[#bababa]'} border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)]`} />
      <div className="basis-0 font-['Pretendard:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[21px] text-left w-[306px]">
        <p className="block leading-[normal] line-clamp-2">{title}</p>
      </div>
      <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left w-[315px]">
        <p className="block leading-[normal] line-clamp-4">{content}</p>
      </div>
    </div>
  );
}

function NoticeSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [noticeApi, setNoticeApi] = useState<CarouselApi>();
  const [currentNotice, setCurrentNotice] = useState(1);

  const notices = [
    {
      title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      isHighlighted: true
    },
    {
      title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      isHighlighted: false
    },
    {
      title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      isHighlighted: false
    },
    {
      title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      isHighlighted: false
    },
    {
      title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
      isHighlighted: true
    }
  ];

  useEffect(() => {
    if (!noticeApi) {
      return;
    }

    noticeApi.on("select", () => {
      setCurrentNotice(noticeApi.selectedScrollSnap() + 1);
    });
  }, [noticeApi]);

  const handleNoticePaginationClick = (dotIndex: number) => {
    if (noticeApi) {
      noticeApi.scrollTo(dotIndex);
    }
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-left text-nowrap">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center relative shrink-0 text-[36px] tracking-[-1px]">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              공지 사항 · 알림
            </p>
          </div>
          <div className="font-['Pretendard:Regular',_sans-serif] relative shrink-0 text-[18px]">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              Notice
            </p>
          </div>
        </div>
        <div 
          className="relative shrink-0 size-6 cursor-pointer"
          onClick={() => onNavigate('news')}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path d={svgPaths.pc293c00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      
      <div className="relative w-full">
        <Carousel
          setApi={setNoticeApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="-ml-[12.5px]">
            {notices.map((notice, index) => (
              <CarouselItem key={index} className="pl-[12.5px] basis-auto">
                <NoticeCard
                  title={notice.title}
                  content={notice.content}
                  isHighlighted={notice.isHighlighted}
                  onClick={() => onNavigate('news')}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom navigation arrows */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 shadow-lg" />
        </Carousel>
      </div>
      
      <div className="h-2.5 relative shrink-0 w-[50px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 50 10"
        >
          <g id="Pagination">
            <path
              d={svgPaths.p23b61b80}
              fill={currentNotice === 1 ? "var(--fill-0, #27CEE0)" : "var(--fill-0, #6C6C6C)"}
              id="Vector"
              className="cursor-pointer"
              onClick={() => handleNoticePaginationClick(0)}
            />
            <path
              d={svgPaths.p2ef4c80}
              fill={currentNotice === 2 ? "var(--fill-0, #27CEE0)" : "var(--fill-0, #6C6C6C)"}
              id="Vector_2"
              className="cursor-pointer"
              onClick={() => handleNoticePaginationClick(1)}
            />
            <path
              d={svgPaths.p5d9bf00}
              fill={currentNotice === 3 ? "var(--fill-0, #27CEE0)" : "var(--fill-0, #6C6C6C)"}
              id="Vector_3"
              className="cursor-pointer"
              onClick={() => handleNoticePaginationClick(2)}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FAQsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const faqs = [
    "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    "운에서 귤릴 애뱅마빠 슨핀갑우에 조실홀정넉읻게 뗜다어그는 에젠뮜에.",
    "몬빙띠호게 잘탄에게 미타무마아 훙조의 헴릇갈뫄밖에 해멋즤뤄는.",
    "가간까에 바아겨가, 겨아뇨 타시려이무아즈다, 가전시도.",
    "요짔아햐는 섬어벤 브나냉소나다가는 하즤착사고 졸가롯을."
  ];

  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[720px]">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[36px] text-left text-nowrap tracking-[-1px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              가장 궁금해 하시는 질문
            </p>
          </div>
          <div 
            className="relative shrink-0 size-6 cursor-pointer"
            onClick={() => onNavigate('faqs')}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path d={svgPaths.pc293c00} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="bg-[#f6f6f6] box-border content-stretch flex flex-col gap-2.5 h-[243px] items-start justify-start px-10 py-[35px] relative rounded-[30px] shrink-0 w-[720px]">
          <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0 w-[513px]">
            {faqs.map((faq, index) => (
              <div key={index} className="box-border content-stretch flex flex-row font-['Pretendard:Regular',_sans-serif] gap-[7px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
                <div className="relative shrink-0">
                  <p className="block leading-[normal] text-nowrap whitespace-pre">Q.</p>
                </div>
                <div className="relative shrink-0">
                  <p className="block leading-[normal] text-nowrap whitespace-pre">
                    {faq}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div
          className="[background-size:100%_175.91%] [grid-area:1_/_1] bg-[position:0%_53%] bg-no-repeat h-[301px] ml-0 mt-0 rounded-[30px] w-[353px]"
          style={{ backgroundImage: `url('${imgRectangle11}')` }}
        />
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-2.5 items-center justify-start ml-3.5 mt-7 p-0 relative w-[326px]">
          <div className="box-border content-stretch flex flex-col items-center justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-center text-nowrap">
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
          <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(0,0,0,0.3)] relative rounded-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-2.5 py-[30px] relative w-full">
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
      </div>
    </div>
  );
}

function NewsListItem({ 
  title, 
  image, 
  onClick 
}: { 
  title: string; 
  image: string; 
  onClick: () => void;
}) {
  return (
    <div 
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[30px] items-center justify-center p-0 relative rounded-[15px] shrink-0 w-full cursor-pointer hover:shadow-[0px_8px_25px_0px_rgba(0,0,0,0.15)] transition-shadow"
      onClick={onClick}
    >
      <div className="absolute border border-[#bcbcbc] border-solid inset-[-1px] pointer-events-none rounded-2xl shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)]" />
      <div
        className="[background-size:cover,_auto] bg-[#d9d9d9] bg-[position:50%_50%,_0%_0%] h-[132px] rounded-bl-[15px] rounded-tl-[15px] shrink-0 w-[206px]"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start leading-[0] not-italic pl-0 pr-[30px] py-0 relative text-[#000000] text-left w-full">
            <div className="font-['Pretendard:Medium',_sans-serif] relative shrink-0 text-[21px] w-full">
              <p className="block leading-[normal] line-clamp-2">{title}</p>
            </div>
            <div className="font-['Pretendard:Regular',_sans-serif] relative shrink-0 text-[15px] w-full">
              <p className="block leading-[normal] line-clamp-3">
                연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다
                소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가
                대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가
                대해추제바핸다 댕담맘흐린녕 겁단아...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const newsItems = [
    { title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.", image: imgRectangle1, isHighlighted: true },
    { title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.", image: imgRectangle2, isHighlighted: false },
    { title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.", image: imgRectangle3, isHighlighted: false },
    { title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.", image: imgRectangle4, isHighlighted: false },
    { title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.", image: imgRectangle5, isHighlighted: false }
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-[15px] items-center justify-start p-0 relative shrink-0">
          <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[36px] text-left text-nowrap tracking-[-1px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              안내 사항
            </p>
          </div>
        </div>
        <div 
          className="relative shrink-0 size-6 cursor-pointer"
          onClick={() => onNavigate('news')}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path d={svgPaths.pc293c00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-[25px] items-start justify-start p-0 relative shrink-0 w-full">
        {newsItems.map((item, index) => (
          <NewsListItem
            key={index}
            title={item.title}
            image={item.image}
            onClick={() => onNavigate('news')}
          />
        ))}
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-[-0.003%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.000488281px_0px] mask-size-[32.4224px_37px] right-[75.06%] top-0"
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
    <div className="bg-[#1b1b1b] box-border content-stretch flex flex-row items-end justify-between px-[100px] py-[50px] w-full mt-auto">
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
      <div className="flex flex-col font-['Pretendard:Regular',_'Noto_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          Copyrightⓒ SUNWAY All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default function Index({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col w-full">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex flex-col items-center justify-start w-full max-w-[1100px] mx-auto px-[100px] pt-[30px] pb-[50px] space-y-[50px] flex-grow">
        <BannerSection />
        <ServicesSection onNavigate={onNavigate} />
        <NoticeSection onNavigate={onNavigate} />
        <FAQsSection onNavigate={onNavigate} />
        <NewsSection onNavigate={onNavigate} />
      </div>
      
      <Footer />
    </div>
  );
}