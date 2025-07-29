import { ExclamationTriangleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

type Props = {
  message: string;
  isLoading?: boolean;
  onRetry?: () => void;
};

export default function ErrorFallback({ message, isLoading = false, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
      {isLoading ? (
        <ArrowPathIcon className="w-8 h-8 text-gray-500 animate-spin" />
      ) : (
        <ExclamationTriangleIcon className="w-10 h-10 text-red-500" />
      )}

      <p className={`${isLoading ? "text-gray-600" : "text-red-500"} text-lg font-medium`}>
        {message}
      </p>

      {!isLoading && onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
        >
          Retry
        </button>
      )}
    </div>
  );
}
