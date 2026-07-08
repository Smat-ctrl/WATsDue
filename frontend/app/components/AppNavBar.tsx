import Link from "next/link";

export type AppNavBarprops = {
  className?: string;
};

export default function AppNavBar({ className }: AppNavBarprops) {
  return (
    <div className="w-60 h-screen bg-gray-100 flex flex-col gap-2 border border-gray-300 ">
      <hr className="w-25 h-1 bg-[#FFC933] mx-auto" />
      <div className="flex flex-row gap-1 mt-3 ms-2 mt-2">
        <svg
          width="25"
          height="25"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ms-2"
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
          <p className="font-bold text-yellow-500 ms-1">WAT</p>
          <span>
            <p className="font-semibold text-neutral-950">sDue</p>
          </span>
        </div>
      </div>
      <hr className="mt-2 h-0.5 bg-gray-200 border-none"></hr>
      <button
        className={`w-55 text-black flex flex-row items-center text-start ms-2 mt-2 text-sm hover:bg-gray-300 rounded-lg py-1 px-2 gap-2 ${className}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M5.99854 1.99951H2.66602C2.29792 1.99951 1.99951 2.29792 1.99951 2.66602V7.33154C1.99951 7.69965 2.29792 7.99805 2.66602 7.99805H5.99854C6.36664 7.99805 6.66504 7.69965 6.66504 7.33154V2.66602C6.66504 2.29792 6.36664 1.99951 5.99854 1.99951Z"
            stroke="#6B6B6B"
            stroke-width="1.33301"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3301 1.99951H9.99756C9.62946 1.99951 9.33106 2.29792 9.33106 2.66602V4.66553C9.33106 5.03363 9.62946 5.33203 9.99756 5.33203H13.3301C13.6982 5.33203 13.9966 5.03363 13.9966 4.66553V2.66602C13.9966 2.29792 13.6982 1.99951 13.3301 1.99951Z"
            stroke="#6B6B6B"
            stroke-width="1.33301"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3301 7.99805H9.99756C9.62946 7.99805 9.33106 8.29645 9.33106 8.66455V13.3301C9.33106 13.6982 9.62946 13.9966 9.99756 13.9966H13.3301C13.6982 13.9966 13.9966 13.6982 13.9966 13.3301V8.66455C13.9966 8.29645 13.6982 7.99805 13.3301 7.99805Z"
            stroke="#6B6B6B"
            stroke-width="1.33301"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.99854 10.6641H2.66602C2.29792 10.6641 1.99951 10.9625 1.99951 11.3306V13.3301C1.99951 13.6982 2.29792 13.9966 2.66602 13.9966H5.99854C6.36664 13.9966 6.66504 13.6982 6.66504 13.3301V11.3306C6.66504 10.9625 6.36664 10.6641 5.99854 10.6641Z"
            stroke="#6B6B6B"
            stroke-width="1.33301"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Dashboard
      </button>

      <button
        className={` w-55 text-black flex flex-row items-center text-start ms-2 mt-2 text-sm hover:bg-gray-300 rounded-lg py-1 px-2 gap-2 ${className}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <g clip-path="url(#clip0_19_38)">
            <path
              d="M7.99805 4.66553V13.9966"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.99951 11.9971C1.82274 11.9971 1.65322 11.9269 1.52822 11.8019C1.40323 11.6769 1.33301 11.5073 1.33301 11.3306V2.66602C1.33301 2.48925 1.40323 2.31972 1.52822 2.19473C1.65322 2.06973 1.82274 1.99951 1.99951 1.99951H5.33203C6.0391 1.99951 6.71722 2.28039 7.21719 2.78037C7.71717 3.28034 7.99805 3.95846 7.99805 4.66553C7.99805 3.95846 8.27893 3.28034 8.77891 2.78037C9.27888 2.28039 9.95699 1.99951 10.6641 1.99951H13.9966C14.1734 1.99951 14.3429 2.06973 14.4679 2.19473C14.5929 2.31972 14.6631 2.48925 14.6631 2.66602V11.3306C14.6631 11.5073 14.5929 11.6769 14.4679 11.8019C14.3429 11.9269 14.1734 11.9971 13.9966 11.9971H9.99756C9.46726 11.9971 8.95867 12.2077 8.58369 12.5827C8.20871 12.9577 7.99805 13.4663 7.99805 13.9966C7.99805 13.4663 7.78739 12.9577 7.41241 12.5827C7.03742 12.2077 6.52884 11.9971 5.99854 11.9971H1.99951Z"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_38">
              <rect width="15.9961" height="15.9961" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Courses
      </button>

      <button
        className={`w-55 text-black flex flex-row items-center text-start ms-2 mt-2 text-sm hover:bg-gray-300 rounded-lg py-1 px-2 gap-2 ${className}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <g clip-path="url(#clip0_19_45)">
            <path
              d="M5.33203 1.33301V3.99902"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6641 1.33301V3.99902"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6636 2.66602H3.33252C2.59632 2.66602 1.99951 3.26282 1.99951 3.99902V13.3301C1.99951 14.0663 2.59632 14.6631 3.33252 14.6631H12.6636C13.3998 14.6631 13.9966 14.0663 13.9966 13.3301V3.99902C13.9966 3.26282 13.3998 2.66602 12.6636 2.66602Z"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.99951 6.66504H13.9966"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33203 9.33105H5.3387"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99805 9.33105H8.00472"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6641 9.33105H10.6707"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33203 11.9971H5.3387"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99805 11.9971H8.00472"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6641 11.9971H10.6707"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_45">
              <rect width="15.9961" height="15.9961" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Calendar
      </button>

      <button
        className={`w-55 text-black flex flex-row items-center text-start ms-2 mt-2 text-sm hover:bg-gray-300 rounded-lg py-1 px-2 gap-2 ${className}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M13.9966 9.99756V12.6636C13.9966 13.0171 13.8561 13.3562 13.6062 13.6062C13.3562 13.8561 13.0171 13.9966 12.6636 13.9966H3.33252C2.97898 13.9966 2.63993 13.8561 2.38994 13.6062C2.13995 13.3562 1.99951 13.0171 1.99951 12.6636V9.99756"
            stroke="#6B6B6B"
            stroke-width="1.33301"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.3306 5.33203L7.99805 1.99951L4.66553 5.33203"
            stroke="#6B6B6B"
            stroke-width="1.33301"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99805 1.99951V9.99756"
            stroke="#6B6B6B"
            stroke-width="1.33301"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Syllabus Imports
      </button>

      <button
        className={`w-55 text-black flex flex-row items-center text-start ms-2 mt-2 text-sm hover:bg-gray-300 rounded-lg py-1 px-2 gap-2 ${className}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <g clip-path="url(#clip0_19_68)">
            <path
              d="M14.4831 11.9971L9.1511 2.66602C9.03484 2.46087 8.86624 2.29023 8.6625 2.17152C8.45877 2.0528 8.22719 1.99025 7.99138 1.99025C7.75558 1.99025 7.524 2.0528 7.32027 2.17152C7.11653 2.29023 6.94793 2.46087 6.83167 2.66602L1.49963 11.9971C1.38212 12.2006 1.3205 12.4316 1.32102 12.6666C1.32154 12.9016 1.38418 13.1323 1.5026 13.3353C1.62102 13.5383 1.791 13.7064 1.99531 13.8225C2.19963 13.9386 2.43101 13.9987 2.66602 13.9966H13.3301C13.564 13.9963 13.7937 13.9346 13.9961 13.8175C14.1986 13.7004 14.3666 13.5321 14.4835 13.3295C14.6003 13.1269 14.6618 12.8971 14.6617 12.6632C14.6617 12.4294 14.6001 12.1996 14.4831 11.9971Z"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99805 5.99854V8.66455"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99805 11.3306H8.00472"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_68">
              <rect width="15.9961" height="15.9961" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Conflicts
      </button>

      <button
        className={`w-55 text-black flex flex-row items-center text-start ms-2 mt-2 text-sm hover:bg-gray-300 rounded-lg py-1 px-2 gap-2 ${className}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <g clip-path="url(#clip0_19_76)">
            <path
              d="M8.14468 1.33301H7.85142C7.49788 1.33301 7.15883 1.47345 6.90884 1.72344C6.65885 1.97342 6.51841 2.31248 6.51841 2.66602V2.78599C6.51817 3.01975 6.45646 3.24933 6.33948 3.45172C6.2225 3.6541 6.05435 3.82216 5.85191 3.93904L5.56531 4.10566C5.36267 4.22266 5.1328 4.28425 4.89881 4.28425C4.66481 4.28425 4.43494 4.22266 4.2323 4.10566L4.13233 4.05234C3.82644 3.8759 3.46305 3.82803 3.12191 3.91925C2.78077 4.01047 2.48976 4.23332 2.31277 4.53889L2.16614 4.79216C1.98969 5.09805 1.94182 5.46144 2.03304 5.80258C2.12426 6.14372 2.34712 6.43473 2.65269 6.61172L2.75266 6.67837C2.95413 6.79468 3.12165 6.96169 3.23858 7.16281C3.3555 7.36392 3.41776 7.59213 3.41917 7.82476V8.16468C3.4201 8.39956 3.35895 8.63053 3.2419 8.83418C3.12486 9.03784 2.95608 9.20695 2.75266 9.32439L2.65269 9.38438C2.34712 9.56137 2.12426 9.85237 2.03304 10.1935C1.94182 10.5347 1.98969 10.8981 2.16614 11.2039L2.31277 11.4572C2.48976 11.7628 2.78077 11.9856 3.12191 12.0768C3.46305 12.1681 3.82644 12.1202 4.13233 11.9438L4.2323 11.8904C4.43494 11.7734 4.66481 11.7118 4.89881 11.7118C5.1328 11.7118 5.36267 11.7734 5.56531 11.8904L5.85191 12.0571C6.05435 12.1739 6.2225 12.342 6.33948 12.5444C6.45646 12.7468 6.51817 12.9764 6.51841 13.2101V13.3301C6.51841 13.6836 6.65885 14.0227 6.90884 14.2727C7.15883 14.5226 7.49788 14.6631 7.85142 14.6631H8.14468C8.49822 14.6631 8.83727 14.5226 9.08726 14.2727C9.33725 14.0227 9.47769 13.6836 9.47769 13.3301V13.2101C9.47793 12.9764 9.53964 12.7468 9.65662 12.5444C9.7736 12.342 9.94175 12.1739 10.1442 12.0571L10.4308 11.8904C10.6334 11.7734 10.8633 11.7118 11.0973 11.7118C11.3313 11.7118 11.5612 11.7734 11.7638 11.8904L11.8638 11.9438C12.1697 12.1202 12.5331 12.1681 12.8742 12.0768C13.2153 11.9856 13.5063 11.7628 13.6833 11.4572L13.83 11.1973C14.0064 10.8914 14.0543 10.528 13.9631 10.1868C13.8718 9.84571 13.649 9.5547 13.3434 9.37771L13.2434 9.32439C13.04 9.20695 12.8712 9.03784 12.7542 8.83418C12.6372 8.63053 12.576 8.39956 12.5769 8.16468V7.83142C12.576 7.59653 12.6372 7.36557 12.7542 7.16191C12.8712 6.95826 13.04 6.78915 13.2434 6.67171L13.3434 6.61172C13.649 6.43473 13.8718 6.14372 13.9631 5.80258C14.0543 5.46144 14.0064 5.09805 13.83 4.79216L13.6833 4.53889C13.5063 4.23332 13.2153 4.01047 12.8742 3.91925C12.5331 3.82803 12.1697 3.8759 11.8638 4.05234L11.7638 4.10566C11.5612 4.22266 11.3313 4.28425 11.0973 4.28425C10.8633 4.28425 10.6334 4.22266 10.4308 4.10566L10.1442 3.93904C9.94175 3.82216 9.7736 3.6541 9.65662 3.45172C9.53964 3.24933 9.47793 3.01975 9.47769 2.78599V2.66602C9.47769 2.31248 9.33725 1.97342 9.08726 1.72344C8.83727 1.47345 8.49822 1.33301 8.14468 1.33301Z"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99805 9.99756C9.10235 9.99756 9.99756 9.10235 9.99756 7.99805C9.99756 6.89375 9.10235 5.99854 7.99805 5.99854C6.89375 5.99854 5.99854 6.89375 5.99854 7.99805C5.99854 9.10235 6.89375 9.99756 7.99805 9.99756Z"
              stroke="#6B6B6B"
              stroke-width="1.33301"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_76">
              <rect width="15.9961" height="15.9961" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Settings
      </button>
      <div className="mt-auto bg-gray-100 w-59.5 h-20">
        <hr className="mt-auto h-0.5 bg-gray-200 border-none"></hr>
        <div className="flex flex-row items-center">
          <div className="flex items-center mt-4 ms-2 justify-center w-12 h-12 rounded-full bg-gray-200 text-black text-xs shadow-sm">
            SC
          </div>
          <div className="flex flex-col ms-4 mt-4 gap-1">
            <p className="text-black font-semibold text-xs">Samuel Chen</p>
            <p className="text-gray-400 text-xs">schen@uwaterloo.ca</p>
          </div>
        </div>
      </div>
    </div>
  );
}
