import { XMarkIcon } from "@heroicons/react/16/solid";

interface ErrorBannerProps {
  errorMessage: string | undefined;
  setErrorMessage: (message: string | undefined) => void;
}

export default function ErrorBanner({
  errorMessage,
  setErrorMessage,
}: ErrorBannerProps) {
  return (
    errorMessage && (
      <div className="flex py-2 px-3 space-x-4 bg-red-100 rounded-md">
        <div>{`Error: ${errorMessage}`} </div>
        <button
          className="rounded-full p-1 hover:bg-red-300"
          onClick={() => setErrorMessage(undefined)}
        >
          <XMarkIcon height={16} width={16} aria-hidden aria-label="dismiss" />
        </button>
      </div>
    )
  );
}
