import { useState, useEffect, useRef } from "react";
import svgPaths from "@/assets/imports/svg-2bidt2cyr6";

interface NoticeCardProps {
  title: string;
  content: string;
  isHighlighted?: boolean;
  onClick?: () => void;
}

function NoticeCard({ title, content, isHighlighted = false, onClick }: NoticeCardProps) {
  return (
    <div 
      className={`bg-[#ffffff] box-border content-stretch flex flex-col gap-[15px] h-[195px] items-center justify-center px-[15px] py-5 relative rounded-[15px] shrink-0 w-[350px] cursor-pointer transition-transform hover:scale-105`}
      onClick={onClick}
    >
      <div className={`absolute border ${isHighlighted ? 'border-[#27cee0]' : 'border-[#bababa]'} border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)]`} />
      <div className={`${isHighlighted ? 'basis-0 grow min-h-px min-w-px' : 'h-[50px]'} font-['Pretendard:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[21px] text-left w-[306px]`}>
        <p className="block leading-[normal]">
          {title}
        </p>
      </div>
      <div className="font-['Pretendard:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[15px] text-left w-[315px]">
        <p className="block leading-[normal]">
          {content}
        </p>
      </div>
    </div>
  );
}

const notices = [
  {
    id: 1,
    title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    isHighlighted: true,
    url: "/notice/1"
  },
  {
    id: 2,
    title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    isHighlighted: false,
    url: "/notice/2"
  },
  {
    id: 3,
    title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    isHighlighted: false,
    url: "/notice/3"
  },
  {
    id: 4,
    title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    isHighlighted: false,
    url: "/notice/4"
  },
  {
    id: 5,
    title: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    content: "연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아. 연하암마다 소잰거가 대해추제바핸다 댕담맘흐린녕 겁단아.",
    isHighlighted: false,
    url: "/notice/5"
  }
];

export default function InteractiveNoticeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= notices.length - 3 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds interval for notices
    };

    startAutoSlide();

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

  // Stop auto-slide when user interacts
  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  // Restart auto-slide after user interaction
  const restartAutoSlide = () => {
    stopAutoSlide();
    setTimeout(() => {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= notices.length - 3 ? 0 : prevIndex + 1
        );
      }, 5000);
    }, 2000); // Restart after 2 seconds of no interaction
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentIndex * 375); // 350px width + 25px gap
    stopAutoSlide();
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2; // Increase sensitivity
    const newScrollLeft = scrollLeft - walk;
    const newIndex = Math.round(newScrollLeft / 375);
    const clampedIndex = Math.max(0, Math.min(notices.length - 3, newIndex));
    setCurrentIndex(clampedIndex);
  };

  // Handle mouse up for dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    restartAutoSlide();
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX);
    setScrollLeft(currentIndex * 375);
    stopAutoSlide();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    const newIndex = Math.round(newScrollLeft / 375);
    const clampedIndex = Math.max(0, Math.min(notices.length - 3, newIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    restartAutoSlide();
  };

  // Handle notice card click
  const handleNoticeClick = (url: string) => {
    console.log(`Navigating to: ${url}`);
    // Here you would typically use your router
    // For now, we'll just log the navigation
    alert(`Would navigate to: ${url}`);
  };

  // Handle pagination dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    restartAutoSlide();
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-center p-0 relative shrink-0 w-full max-w-[1100px] mx-auto py-[30px]">
      {/* Header */}
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
        <div className="relative shrink-0 size-6" data-name="Vector">
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

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${currentIndex * 375}px)`,
            width: `${notices.length * 375}px`
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {notices.map((notice) => (
            <div key={notice.id} className="pr-[25px]">
              <NoticeCard
                title={notice.title}
                content={notice.content}
                isHighlighted={notice.isHighlighted}
                onClick={() => handleNoticeClick(notice.url)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="h-2.5 relative shrink-0 w-[50px]" data-name="Pagination">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 50 10"
        >
          <g id="Pagination">
            <path
              d={svgPaths.p23b61b80}
              fill={`var(--fill-0, ${currentIndex === 0 ? '#27CEE0' : '#6C6C6C'})`}
              id="Vector"
              className="cursor-pointer"
              onClick={() => handleDotClick(0)}
            />
            <path
              d={svgPaths.p2ef4c80}
              fill={`var(--fill-0, ${currentIndex === 1 ? '#27CEE0' : '#6C6C6C'})`}
              id="Vector_2"
              className="cursor-pointer"
              onClick={() => handleDotClick(1)}
            />
            <path
              d={svgPaths.p5d9bf00}
              fill={`var(--fill-0, ${currentIndex === 2 ? '#27CEE0' : '#6C6C6C'})`}
              id="Vector_3"
              className="cursor-pointer"
              onClick={() => handleDotClick(2)}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}