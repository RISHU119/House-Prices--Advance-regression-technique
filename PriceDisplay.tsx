
import React from 'react';

interface PriceDisplayProps {
  predictedPrice: number | null;
  isLoading: boolean;
  error: string | null;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

function PriceDisplay({ predictedPrice, isLoading, error }: PriceDisplayProps): React.ReactNode {
  return (
    <div className="mt-8 p-6 bg-slate-100 rounded-lg text-center border border-slate-200 min-h-[140px] flex items-center justify-center">
      {isLoading && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-slate-300 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-slate-500">Thinking...</p>
        </div>
      )}
      {error && (
        <div className="text-red-600 bg-red-100 p-4 rounded-md">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}
      {predictedPrice !== null && !isLoading && !error && (
        <div className="animate-fade-in-up">
          <p className="text-lg text-slate-600 mb-1">Predicted Price</p>
          <p className="text-4xl md:text-5xl font-extrabold text-indigo-600">
            {formatPrice(predictedPrice)}
          </p>
        </div>
      )}
      {!isLoading && !error && predictedPrice === null && (
        <div className="text-slate-500">
          <p>Your predicted price will appear here.</p>
        </div>
      )}
       <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default PriceDisplay;
