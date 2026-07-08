import NavBar from "../components/NavBar";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* BLURRED BACKGROUND PAGE */}
      <div className="flex min-h-screen flex-col blur-sm">
        <NavBar />
        <hr className="shrink-0 border-neutral-200" />

        <div className="min-h-0 flex-1 bg-neutral-50">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-12 sm:px-6 lg:py-14">
            {/* KEEP CURRENT WATSDUE CONTENT HERE */}

            <h1 className="mt-8 text-5xl font-bold text-neutral-950 sm:text-6xl">
              WATsDue
            </h1>

            <p className="mt-3 max-w-2xl text-center text-base leading-7 text-neutral-500 sm:text-lg">
              Turn your Waterloo course outlines into a clean academic calendar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/signup">
                <button className="inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md bg-neutral-950 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 sm:w-auto">
                  Start Planning Free
                </button>
              </Link>

              <Link href="/signup">
                <button className="inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-semibold text-neutral-950 shadow-sm transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 sm:w-auto">
                  Import Syllabus
                </button>
              </Link>
            </div>

            <div className="mt-10 flex w-full max-w-3xl flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-neutral-950">This Week</p>
                <p className="text-sm text-neutral-500">Jan 22 - Jan 28</p>
              </div>

              <div className="mt-5 flex items-stretch gap-3 sm:gap-4">
                <span className="w-1.5 rounded-full bg-blue-500"></span>

                <div className="flex min-h-20 flex-1 flex-col justify-center rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="inline-flex h-6 min-w-14 items-center justify-center rounded-md bg-blue-500 px-2 text-center text-xs font-semibold text-white">
                        CS 445
                      </div>

                      <p className="truncate text-sm font-semibold text-neutral-950">
                        Assignment 2
                      </p>
                    </div>

                    <div className="inline-flex h-7 shrink-0 items-center rounded-full bg-emerald-50 px-3 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                      Due
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-neutral-500">
                    Jan 28 at 11:59 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex min-h-[181px] flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-950">
                  Import outlines
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Upload PDFs or paste syllabus text.
                </p>
              </div>

              <div className="flex min-h-[181px] flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-950">
                  Detect Due Dates
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  AI finds assignments, exams, and deadlines.
                </p>
              </div>

              <div className="flex min-h-[181px] flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-950">
                  Check Conflicts
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Get alerts for overlapping deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-neutral-950/55 backdrop-blur-[1px]"></div>

      {/* CLEAR SIGN-IN CARD */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[400px] rounded-lg border border-neutral-200 bg-white p-7 shadow-2xl shadow-black/30 sm:p-8">
          <Link href="/">
            <p className="cursor-pointer text-end text-sm font-semibold text-neutral-400 transition-colors hover:text-neutral-950">
              X
            </p>
          </Link>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-5"
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
          <h1 className="mt-3 text-center text-lg font-semibold text-neutral-950">
            Create Your Account
          </h1>

          <p className="mt-2 text-center text-sm text-neutral-500">
            Start organizing your courses for free
          </p>

          <div className="mt-5 flex w-full rounded-lg bg-neutral-100 p-1 text-center">
            <Link
              href="/signin"
              className="flex-1 cursor-pointer rounded-md py-2 text-center text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-950"
            >
              Sign in
            </Link>

            <button className="flex-1 rounded-md bg-white py-2 text-xs font-semibold text-neutral-950 shadow-sm ring-1 ring-neutral-200">
              Sign up
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-neutral-700">
                Full name
              </p>
              <input
                type="email"
                placeholder="Samuel Chen"
                className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              />

              <p className="text-xs font-semibold text-neutral-700">
                UWaterloo email
              </p>
              <input
                type="email"
                placeholder="schen@uwaterloo.ca"
                className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              />

              <p className="text-xs font-semibold text-neutral-700">
                Password
              </p>
              <input
                type="password"
                placeholder="Password"
                className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              />
            </div>
            <button className="mt-2 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md bg-neutral-950 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2">
              Create Account
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-neutral-500">
            Don't have an account?{" "}
            <span className="cursor-pointer font-semibold text-neutral-950 underline">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
