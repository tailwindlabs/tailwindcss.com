import { clsx } from "clsx";

function Hint({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx(className, "mb-4")}>
      <div className="flex space-x-2">
        <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="size-5 flex-none">
          <path
            fill="currentColor"
            className="dark:[fill-opacity:0.1]"
            fillOpacity="0.05"
            fillRule="evenodd"
            d="M10.5 8.77V2a1.5 1.5 0 1 0-3 0v10.929a3.5 3.5 0 0 1-1.025 2.474l-.008.009a6.5 6.5 0 0 0-1.87-3.937l-.536-.536a1.5 1.5 0 1 0-2.122 2.121l.536.536A3.5 3.5 0 0 1 3.5 16.07v.1a3.5 3.5 0 0 0 1.025 2.475l1.829 1.828A3.5 3.5 0 0 0 8.828 21.5h7.758a2.5 2.5 0 0 0 1.768-.733l.242-.242a6.5 6.5 0 0 0 1.904-4.596v-2.29a3.5 3.5 0 0 0-2.814-3.432z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M10.5 8.77H10v.41l.402.08zm-4.025 6.633-.354-.353zm-.008.009-.498.05.107 1.048.744-.745zm-1.87-3.937-.354.353zm-.536-.536-.354.354zm-2.122 0 .354.354zm0 2.121.354-.353zm.536.536-.354.353zm2.05 5.05L4.172 19zm1.829 1.828L6 20.829zm12 .293.353.354zm.242-.242-.353-.354zm-.91-10.318.099-.49zM10 2v6.77h1V2zM9 1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zM8 2a1 1 0 0 1 1-1V0a2 2 0 0 0-2 2zm0 6.17V2H7v6.17zM8 9.5V8.17H7V9.5zm0 3.429V9.5H7v3.429zm-1.172 2.828A4 4 0 0 0 8 12.929H7a3 3 0 0 1-.879 2.12zm-.008.008.008-.008-.707-.707-.008.008zm-2.577-3.937a6 6 0 0 1 1.726 3.634l.995-.1A7 7 0 0 0 4.95 11.12zm-.536-.535.536.535.707-.707-.536-.536zm-1.414 0a1 1 0 0 1 1.414 0l.707-.708a2 2 0 0 0-2.828 0zm0 1.414a1 1 0 0 1 0-1.415l-.707-.707a2 2 0 0 0 0 2.829zm.535.535-.535-.535-.707.707.535.535zM4 16.071a4 4 0 0 0-1.172-2.829l-.707.707A3 3 0 0 1 3 16.071zm0 .1v-.1H3v.1zm.879 2.122A3 3 0 0 1 4 16.17H3A4 4 0 0 0 4.172 19zm1.828 1.828L4.88 18.293 4.172 19 6 20.828zM8.828 21a3 3 0 0 1-2.12-.88L6 20.829A4 4 0 0 0 8.828 22zm7.758 0H8.828v1h7.758zM18 20.414a2 2 0 0 1-1.414.586v1a3 3 0 0 0 2.121-.88zm.243-.243-.243.243.707.707.243-.243zM20 15.93a6 6 0 0 1-1.757 4.242l.707.707a7 7 0 0 0 2.05-4.95zm0-2.29v2.29h1v-2.29zm-2.412-2.941A3 3 0 0 1 20 13.639h1a4 4 0 0 0-3.215-3.922zM10.402 9.26l7.186 1.438.197-.981-7.187-1.437z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.5 4.677a14 14 0 0 1 4-1.736m11 1.736a14 14 0 0 0-4-1.736"
          />
        </svg>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{children}</p>
      </div>
    </div>
  );
}

export function Figure({
  children,
  hint,
  desktopHint,
  className,
}: {
  children: React.ReactNode;
  hint?: string;
  desktopHint?: string;
  className?: string;
}) {
  return (
    <div>
      <div className="not-prose isolate">
        {(hint || desktopHint) && <Hint className={desktopHint && "max-sm:hidden"}>{hint || desktopHint}</Hint>}
        <figure
          className={clsx(
            className,
            "flex flex-col gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10",
          )}
        >
          {children}
        </figure>
      </div>
    </div>
  );
}
