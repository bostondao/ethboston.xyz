import React from "react";

export default function Footer() {
	return (
<footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
  <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto px-4">
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://www.ethboston.xyz/logo.webp"
        className="mb-4"
        style={{ width: 100, filter: "invert(100%) grayscale(100%)" }}
        alt="logo"
      />{" "}
      <img
        src="https://www.ethboston.xyz/logo-text.webp"
        className="mb-4"
        style={{ width: 100, filter: "invert(100%) grayscale(100%)" }}
        alt="logo-text"
      />
    </div>
    <div className="w-3/4 block sm:flex text-sm mt-6 lg:mt-0">
      <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
        <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
          ETH Boston
        </li>
        <li>
          <a
            href="https://ethboston.xyz"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://www.ethboston.xyz#speakers"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Speakers
          </a>
        </li>
        <li>
          <a
            href="https://www.ethboston.xyz#sponsors"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Sponsors
          </a>
        </li>
        <li>
          <a
            href="https://ethboston.typeform.com/tickets"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Tickets
          </a>
        </li>
      </ul>
      <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
        <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
          Fine Print
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/11T-p8Ken_jYmKc_Cs5MJK-okO-e1swyI/view?usp=share_link"
            target="_blank"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Terms of Service
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1x5sSjG_0GUy5YHn3Hote9R4jyIULdGSy/view?usp=share_link"
            target="_blank"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1tS1vZBb_8zUpzOFrjPMx06IQDl-alyCK/view?usp=share_link"
            target="_blank"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Rules, Release and Waiver
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1g28XV93Txfu2jAm-MZbHcq42VxvJxDSj/view?usp=share_link"
            target="_blank"
            className="inline-block py-2 pl-3 pr-5 text-gray-500 hover:text-white no-underline"
          >
            Contributor Proposal Agreement
          </a>
        </li>
      </ul>
      <div className="text-gray-700 flex flex-col w-full">
        <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
          Find Us
        </div>
        <div className="flex pl-4 justify-start mt-2">
          <a
            className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline"
            href="mailto:support@ethboston.xyz"
          >
            <svg
              viewBox="0 0 24 24"
              className="fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.016 3.984H3.984C2.625 3.984 1.5 5.109 1.5 6.468v11.063c0 1.359 1.125 2.484 2.484 2.484h16.031c1.359 0 2.484-1.125 2.484-2.484V6.468c0-1.359-1.125-2.484-2.484-2.484zm0 3L12 11.484 3.984 6.984v-1.5l8.016 5.016L20.016 5.5v1.484z" />
            </svg>
          </a>{" "}
          <a
            className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline"
            href="https://twitter.com/ETHBoston"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              className="fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
            </svg>
          </a>{" "}
          <a
            className="block flex items-center text-gray-300 hover:text-white no-underline"
            href="https://github.com/bostondao/ethboston.xyz"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              className="fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center">
    <div>© 2023 ETH Boston</div>
  </div>
</footer>



	);
}
