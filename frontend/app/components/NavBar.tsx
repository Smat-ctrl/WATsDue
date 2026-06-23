import image from "../../public/assets/WATsDueLogo.jpg";
export default function NavBar() {
  return (
    <div className="bg-white p-3">
      <div className="flex flex-row justify-around">
        <div className="flex flex-row gap-2">
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

          <div className="flex flex-row mt-2">
            <p className="text-yellow-500 font-bold">WAT</p>
            <span>
              <p className="text-black font-semibold">sDue</p>
            </span>
          </div>
        </div>
        <div className="flex gap-10">
          <button className="text-black cursor-pointer">Sign in</button>
          <button className="bg-black text-white rounded-lg px-2 py-1 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
