import { NavigationProps } from "@/types";
import Header from "./Header";

// Create a placeholder Index component for now
// This will be replaced with the actual converted Figma Index component
export default function Index({ currentPage, onNavigate }: NavigationProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SUNWAY - 베트남 대사관 업무 대행 전문
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            베트남 대사관 업무 대행, 번역·인증 서비스, 베트남 현지 서비스를 제공하는 전문 업체입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">대사관 업무 대행</h3>
              <p className="text-gray-600">
                여권 갱신, 혼인요건인증서, 출생증명서 등 각종 대사관 업무를 대행합니다.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">번역·인증 서비스</h3>
              <p className="text-gray-600">
                전문 번역사가 정확하고 신속한 번역 및 인증 서비스를 제공합니다.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">베트남 현지 서비스</h3>
              <p className="text-gray-600">
                베트남 현지에서 필요한 각종 서류 발급 및 행정 업무를 대행합니다.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}