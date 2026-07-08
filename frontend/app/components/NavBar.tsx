import image from "../../public/assets/WATsDueLogo.jpg";
import Link from "next/link";
type NavBarProperties = {
  className?: string;
};

export default function NavBar({ className }: NavBarProperties) {
  return (
    <div
      className={`border-b border-neutral-200 bg-white/95 px-4 py-3 shadow-sm ${className}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_0_14)">
              <path
                d="M26.5503 0H7.43409C3.32835 0 0 3.32835 0 7.43409V26.5503C0 30.656 3.32835 33.9844 7.43409 33.9844H26.5503C30.656 33.9844 33.9844 30.656 33.9844 26.5503V7.43409C33.9844 3.32835 30.656 0 26.5503 0Z"
                fill="#111111"
              />
              <path
                d="M27.3999 6.37207H6.58447C5.88063 6.37207 5.31006 6.94265 5.31006 7.64649V7.75269C5.31006 8.45653 5.88063 9.02711 6.58447 9.02711H27.3999C28.1038 9.02711 28.6743 8.45653 28.6743 7.75269V7.64649C28.6743 6.94265 28.1038 6.37207 27.3999 6.37207Z"
                fill="#FFC933"
              />
              <path
                d="M5.31006 14.8682L10.6201 26.5503L16.9922 20.1782L23.3643 26.5503L28.6743 14.8682"
                stroke="white"
                stroke-width="2.65503"
                stroke-linecap="square"
              />
              <path
                d="M5.31006 16.5674C6.24851 16.5674 7.00928 15.8066 7.00928 14.8682C7.00928 13.9297 6.24851 13.169 5.31006 13.169C4.37161 13.169 3.61084 13.9297 3.61084 14.8682C3.61084 15.8066 4.37161 16.5674 5.31006 16.5674Z"
                fill="#FFC933"
              />
              <path
                d="M28.6743 16.5674C29.6128 16.5674 30.3736 15.8066 30.3736 14.8682C30.3736 13.9297 29.6128 13.169 28.6743 13.169C27.7359 13.169 26.9751 13.9297 26.9751 14.8682C26.9751 15.8066 27.7359 16.5674 28.6743 16.5674Z"
                fill="#FFC933"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_14">
                <rect width="33.9844" height="33.9844" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="flex items-center">
            <p className="font-bold text-yellow-500">WAT</p>
            <span>
              <p className="font-semibold text-neutral-950">sDue</p>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="cursor-pointer rounded-md bg-neutral-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
