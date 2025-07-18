import { useState, useEffect, useRef } from "react";
import svgPaths from "@/assets/imports/svg-2bidt2cyr6";
import { imgFrame98, imgFrame99, imgFrame100, imgFrame101, imgFrame102 } from "@/assets/images/placeholder";

interface ServiceCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

function ServiceCard({ title, image, onClick }: ServiceCardProps) {
  return (
    <div
      className="[background-size:108.29%_115.51%,_auto] bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-[300px] items-start justify-start px-10 py-[30px] relative rounded-[30px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.05)] shrink-0 w-80 cursor-pointer transition-transform hover:scale-105"
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

const services = [
  {
    id: 1,
    title: "대사관 업무 대행",
    image: imgFrame98,
    url: "/embassy-services"
  },
  {
    id: 2,
    title: "번역 · 인증 서비스",
    image: imgFrame99,
    url: "/translation-services"
  },
  {
    id: 3,
    title: "베트남 현지 서비스",
    image: imgFrame100,
    url: "/vietnam-services"
  },
  {
    id: 4,
    title: "비자 서비스",
    image: imgFrame101,
    url: "/visa-services"
  },
  {
    id: 5,
    title: "유학·어학연수",
    image: imgFrame102,
    url: "/study-abroad"
  }
];

export default function InteractiveServicesCarousel() {
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
          prevIndex >= services.length - 3 ? 0 : prevIndex + 1
        );
      }, 4000); // 4 seconds interval
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
          prevIndex >= services.length - 3 ? 0 : prevIndex + 1
        );
      }, 4000);
    }, 2000); // Restart after 2 seconds of no interaction
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(currentIndex * 330); // 300px width + 30px gap
    stopAutoSlide();
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2; // Increase sensitivity
    const newScrollLeft = scrollLeft - walk;
    const newIndex = Math.round(newScrollLeft / 330);
    const clampedIndex = Math.max(0, Math.min(services.length - 3, newIndex));
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
    setScrollLeft(currentIndex * 330);
    stopAutoSlide();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.pageX;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    const newIndex = Math.round(newScrollLeft / 330);
    const clampedIndex = Math.max(0, Math.min(services.length - 3, newIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    restartAutoSlide();
  };

  // Handle service card click
  const handleServiceClick = (url: string) => {
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
    <div className="bg-[#1b1b1b] w-full py-[50px]" data-name="services">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start px-[100px] py-[29.5px] w-full max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full max-w-[1100px] mx-auto">
            <div className="flex flex-col font-['Pretendard:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[36px] text-left text-nowrap tracking-[-1px]">
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                주요 서비스 바로가기
              </p>
            </div>
            <div className="relative shrink-0 size-6" data-name="Vector">
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

          {/* Carousel Container */}
          <div className="relative w-full overflow-hidden max-w-[1100px] mx-auto">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateX(-${currentIndex * 330}px)`,
                width: `${services.length * 330}px`
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {services.map((service) => (
                <div key={service.id} className="pr-[30px]">
                  <ServiceCard
                    title={service.title}
                    image={service.image}
                    onClick={() => handleServiceClick(service.url)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="relative shrink-0 size-2.5 cursor-pointer"
              data-name="Vector"
              onClick={() => handleDotClick(index)}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 10 10"
              >
                <path
                  d={svgPaths.p23b61b80}
                  fill={`var(--fill-0, ${index === currentIndex ? '#27CEE0' : '#6C6C6C'})`}
                  id="Vector"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}