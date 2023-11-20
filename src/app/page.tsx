import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["cyrillic"] });
export default function Home() {
  return (
    <main
      className={`relative min-h-screen h-full bg-white overflow-x-hidden text-black ${inter.className}`}
    >
      <section className="bg-white max-w-[1920px] w-full mx-auto">
        <div className="max-w-[1920px] w-full pl-36 pr-24  mx-auto fixed top-0 z-[4] ">
          <nav className="flex justify-between items-center py-8">
            <div className="">
              <img src="/Group 3.png" alt="logo" className="" />
            </div>
            <div className="flex">
              <ul className="flex font-Inter">
                <li className="font-serif mr-14 ">Construction</li>
                <li className="font-serif mr-14 ">
                  General plan of the townhouse{" "}
                </li>
                <li className="font-serif text-white mr-14">Stages of construction</li>
                <li className="font-serif text-white mr-14">Free houses</li>
                <li>
                  <button className="bg-white px-5 py-1 rounded-2xl uppercase">
                    order
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mt-44 max-w-full px-40 w-full mx-auto flex">
          <div className="w-3/5 max-w-full relative  pt-10 ">
          <img
                src="/image 3.png"
                alt="grass"
                className="absolute -right-6 top-96  z-[1] "
              />
                <img
                src="/image 2.png"
                alt="grass"
                className="absolute -right-64 top-80 z-[2]"
              />
            <h2
              className={`text-[#A0CCA1] font-medium text-5xl ${inter.className} `}
            >
              VERONA
            </h2>
            <h3 className=" font-semibold text-5xl mt-2">CONSTRUCTION</h3>
            <h3 className=" font-semibold text-5xl mt-2">COMPANY</h3>
            <p className="text-xl w-7/12 pt-5">
              Verona construction company specializes in the construction and
              implementation of residential and commercial real estate projects.
              The company is on a course to provide a comfortable life, which
              includes a convenient location near the city, spacious and
              functional layouts, and modern engineering at an affordable price.
            </p>
            <Link href='/homepage' className="px-5 py-1  border-2 rounded-full text-[#A0CCA1] mt-5 block  w-fit uppercase border-[#A0CCA1]">
              Tap to purchase
            </Link>
            <div className="relative">
            
              <img src="/image 3.png" alt="grass" className="invisible" />
             
            </div>
          </div>
          <div className="w-2/5 max-w-full   h-auto">
            <img
              src="/image 1.png"
              alt="landingimage"
              className=" h-screen absolute top-0 right-0 z-[3]"
            />
          </div>
        </div>
        <footer className="flex justify-between items-center  max-w-full pl-40 pr-24 w-full mx-auto fixed bottom-5 z-[4] ">
          <div className="flex gap-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M1 13C1 7.34315 1 4.51472 2.75736 2.75736C4.51472 1 7.34315 1 13 1C18.6569 1 21.4853 1 23.2426 2.75736C25 4.51472 25 7.34315 25 13C25 18.6569 25 21.4853 23.2426 23.2426C21.4853 25 18.6569 25 13 25C7.34315 25 4.51472 25 2.75736 23.2426C1 21.4853 1 18.6569 1 13Z"
                  stroke="#2A353D"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.6842 13C18.6842 16.1393 16.1393 18.6842 13 18.6842C9.8607 18.6842 7.3158 16.1393 7.3158 13C7.3158 9.8607 9.8607 7.3158 13 7.3158C16.1393 7.3158 18.6842 9.8607 18.6842 13Z"
                  stroke="#2A353D"
                  strokeWidth="1.5"
                />
                <path
                  d="M19.9583 6.05264L19.9474 6.05264"
                  stroke="#2A353D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.18182 9.33333C1.20406 9.33333 1 9.52519 1 10.4444V12.1111C1 13.0304 1.20406 13.2222 2.18182 13.2222H4.54545V19.8889C4.54545 20.8081 4.74951 21 5.72727 21H8.09091C9.06867 21 9.27273 20.8081 9.27273 19.8889V13.2222H11.9267C12.6683 13.2222 12.8594 13.0867 13.0631 12.4164L13.5696 10.7497C13.9185 9.60136 13.7035 9.33333 12.4332 9.33333H9.27273V6.55556C9.27273 5.94191 9.80184 5.44444 10.4545 5.44444H13.8182C14.7959 5.44444 15 5.25259 15 4.33333V2.11111C15 1.19185 14.7959 1 13.8182 1H10.4545C7.19104 1 4.54545 3.48731 4.54545 6.55556V9.33333H2.18182Z"
                  stroke="#2A353D"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  d="M11 18.5C12.8097 18.5 14.5451 18.3212 16.1534 17.9934C18.1623 17.5839 19.1668 17.3791 20.0834 16.2006C21 15.0221 21 13.6693 21 10.9635V9.03645C21 6.33073 21 4.97787 20.0834 3.79937C19.1668 2.62088 18.1623 2.41613 16.1534 2.00662C14.5451 1.67877 12.8097 1.5 11 1.5C9.19031 1.5 7.45489 1.67877 5.84656 2.00662C3.83766 2.41613 2.83321 2.62088 1.9166 3.79937C1 4.97787 1 6.33073 1 9.03645V10.9635C1 13.6693 1 15.0221 1.9166 16.2006C2.83321 17.3791 3.83766 17.5839 5.84656 17.9934C7.45489 18.3212 9.19031 18.5 11 18.5Z"
                  stroke="#2A353D"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.9621 10.3129C14.8137 10.9187 14.0241 11.3538 12.4449 12.2241C10.7272 13.1705 9.86844 13.6438 9.1728 13.4615C8.9372 13.3997 8.7202 13.2911 8.53799 13.1438C8 12.7089 8 11.8059 8 10C8 8.19408 8 7.29112 8.53799 6.85618C8.7202 6.70886 8.9372 6.60029 9.1728 6.53854C9.86844 6.35621 10.7272 6.82945 12.4449 7.77593C14.0241 8.64616 14.8137 9.08128 14.9621 9.68712C15.0126 9.89326 15.0126 10.1067 14.9621 10.3129Z"
                  stroke="#2A353D"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex">
            <ul className="flex justify-between font-Inter">
              <li className="font-serif text-white  mr-16 z-50">About the project</li>
              <li className="font-serif text-white mr-16 z-50">About us</li>
              <li className="font-serif text-white  z-50">Contacts</li>
            </ul>
          </div>
        </footer>
      </section>
    </main>
  );
}
