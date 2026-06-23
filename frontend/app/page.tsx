import NavBar from "../app/components/NavBar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <hr className="shrink-0" />

      <div className="bg-white flex-1 min-h-0">
        <div className="flex flex-col items-center">
          <svg
            width="54"
            height="54"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-15"
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
          <div className="flex flex-row mt-2">
            <p className="text-black font-bold text-[48px]">WAT</p>
            <span>
              <p className="text-black font-semibold text-[48px]">sDue</p>
            </span>
          </div>
          <p className="text-gray-400 text-lg">
            Turn your Waterloo course outlines into a clean academic calendar.
          </p>
          <div className="flex flex-row gap-3 mt-8 ">
            <button className="bg-black text-white rounded-md p-2 cursor-pointer">
              Start Planning Free
            </button>
            <button className="text-black outline cursor-pointer rounded-md px-3">
              Import Syllabus
            </button>
          </div>
          <div className="flex flex-col mt-5 outline outline-2 outline-gray-300 h-85 w-200 rounded-xl">
            <div className="flex flex-row justify-between">
              <p className="font-bold ms-4 mt-4 text-black">This Week</p>
              <p className="text-gray-500 me-4 mt-4">Jan 22 - Jan 28</p>
            </div>
            <div className="flex flex-row">
              <span className="bg-blue-500 h-20 w-2 mt-5 ms-10"></span>
              <div className="mt-5 w-180 h-20 bg-gray-100 rounded flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row mt-1">
                    <div className="rounded-md bg-blue-500 p-1 text-white text-center w-15 ms-2 mt-2 text-xs h-6">
                      CS 445
                    </div>
                    <p className="text-black font-bold ms-2 mt-[9] text-sm">
                      Assignment 2
                    </p>
                  </div>
                  <div className="text-green-500 flex items-center bg-green-300 text-xs me-2 h-4 p-3 mt-3 rounded-lg">
                    Due
                  </div>
                </div>
                <p className="text-gray-500 ms-2 text-sm mt-1">
                  Jan 28 at 11:59 PM
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="bg-purple-500 h-20 w-2 mt-5 ms-10"></span>
              <div className="mt-5 w-180 h-20 bg-gray-100 rounded flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row mt-1">
                    <div className="rounded-md bg-purple-500 p-1 text-white text-center w-15 ms-2 mt-2 text-xs h-6">
                      CS 445
                    </div>
                    <p className="text-black font-bold ms-2 mt-[9] text-sm">
                      Midterm
                    </p>
                  </div>
                  <div className="text-red-500 flex items-center bg-red-300 text-xs me-2 h-4 p-3 mt-3 rounded-lg">
                    Exam
                  </div>
                </div>
                <p className="text-gray-500 ms-2 text-sm mt-1">
                  Jan 30 at 7:00 PM
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-[#FFE599] w-182 h-12 mt-5 ms-10 flex flex-row justify-between">
              <div className="flex flex-row gap-2 mt-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-2"
                >
                  <g clip-path="url(#clip0_0_88)">
                    <path
                      d="M7.99805 14.6631C11.6791 14.6631 14.6631 11.6791 14.6631 7.99805C14.6631 4.31705 11.6791 1.33301 7.99805 1.33301C4.31705 1.33301 1.33301 4.31705 1.33301 7.99805C1.33301 11.6791 4.31705 14.6631 7.99805 14.6631Z"
                      stroke="#FFC933"
                      stroke-width="1.33301"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99805 5.33203V7.99805"
                      stroke="#FFC933"
                      stroke-width="1.33301"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99805 10.6641H8.00471"
                      stroke="#FFC933"
                      stroke-width="1.33301"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_88">
                      <rect width="15.9961" height="15.9961" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-black text-xs">
                  Schedule conflict detected on Wednesday
                </p>
              </div>
              <p className="text-black text-xs underline mt-4 me-4">Fix It</p>
            </div>
          </div>
          <div className="flex flex-row mt-8 gap-7">
            <div className="w-[325px] outline outline-2 outline-gray-200 h-[181px] rounded-xl flex flex-col gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-5 ms-5"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M27.5 22.5V25.8333C27.5 26.2754 27.3244 26.6993 27.0118 27.0118C26.6993 27.3244 26.2754 27.5 25.8333 27.5H14.1667C13.7246 27.5 13.3007 27.3244 12.9882 27.0118C12.6756 26.6993 12.5 26.2754 12.5 25.8333V22.5"
                  stroke="#1A1A1A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.1666 16.6667L20 12.5L15.8333 16.6667"
                  stroke="#1A1A1A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 12.5V22.5"
                  stroke="#1A1A1A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2 className="font-bold text-lg text-black ms-5 mt-1">
                Import outlines
              </h2>
              <p className="text-gray-400 text-sm ms-5">
                Upload PDFs or paste syllabus text to extract course details
              </p>
            </div>
            <div className="w-[325px] outline outline-2 outline-gray-200 h-[181px] rounded-xl flex flex-col gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-5 ms-5"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z"
                  fill="#F5F5F5"
                />
                <g clip-path="url(#clip0_0_110)">
                  <path
                    d="M16.6667 11.6667V15"
                    stroke="#1A1A1A"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.3333 11.6667V15"
                    stroke="#1A1A1A"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.8333 13.3333H14.1667C13.2462 13.3333 12.5 14.0795 12.5 15V26.6666C12.5 27.5871 13.2462 28.3333 14.1667 28.3333H25.8333C26.7538 28.3333 27.5 27.5871 27.5 26.6666V15C27.5 14.0795 26.7538 13.3333 25.8333 13.3333Z"
                    stroke="#1A1A1A"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 18.3333H27.5"
                    stroke="#1A1A1A"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_110">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(10 10)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="font-bold text-lg text-black ms-5 mt-1">
                Detect Due Dates
              </h2>
              <p className="text-gray-400 text-sm ms-5">
                AI automatically finds assignments, exams, and deadlines
              </p>
            </div>
            <div className="w-[325px] outline outline-2 outline-gray-200 h-[181px] rounded-xl flex flex-col gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-5 ms-5"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M28.1083 25L21.4416 13.3333C21.2962 13.0768 21.0854 12.8635 20.8307 12.715C20.576 12.5666 20.2864 12.4884 19.9916 12.4884C19.6968 12.4884 19.4072 12.5666 19.1525 12.715C18.8978 12.8635 18.687 13.0768 18.5416 13.3333L11.8749 25C11.728 25.2544 11.651 25.5432 11.6516 25.8371C11.6523 26.1309 11.7306 26.4194 11.8786 26.6732C12.0267 26.927 12.2392 27.1371 12.4947 27.2823C12.7501 27.4275 13.0394 27.5026 13.3333 27.5H26.6666C26.959 27.4997 27.2462 27.4225 27.4993 27.2761C27.7525 27.1297 27.9626 26.9192 28.1087 26.6659C28.2548 26.4126 28.3316 26.1253 28.3316 25.8329C28.3315 25.5405 28.2545 25.2532 28.1083 25Z"
                  stroke="#1A1A1A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 17.5V20.8333"
                  stroke="#1A1A1A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 24.1667H20.0083"
                  stroke="#1A1A1A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h2 className="font-bold text-lg text-black ms-5 mt-1">
                Check Conflicts
              </h2>
              <p className="text-gray-400 text-sm ms-5">
                Get alerts for overlapping lectures and deadline clusters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
