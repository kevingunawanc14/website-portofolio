/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/slicing/iconMountain.png" className="w-[60px] h-[23px]" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-slicing-foreground poppins-bold">Loremipsum</span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            {/* <button type="button" className="hidden md:flex text-slicing-foreground bg-white border border-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold ">Masuk</button>

                <button type="button" className="hidden md:flex text-white bg-slicing-foreground border border-slicing-foreground  focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold">Daftar</button> */}

            <div className="me-2 lg:me-6 md:hidden grid content-center">
              <div className=' '>
                <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" fill="white" />
                  <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#156E3E" />
                  <path d="M28 29C26.89 29 26 29.89 26 31C26 31.5304 26.2107 32.0391 26.5858 32.4142C26.9609 32.7893 27.4696 33 28 33C28.5304 33 29.0391 32.7893 29.4142 32.4142C29.7893 32.0391 30 31.5304 30 31C30 30.4696 29.7893 29.9609 29.4142 29.5858C29.0391 29.2107 28.5304 29 28 29ZM12 13V15H14L17.6 22.59L16.24 25.04C16.09 25.32 16 25.65 16 26C16 26.5304 16.2107 27.0391 16.5858 27.4142C16.9609 27.7893 17.4696 28 18 28H30V26H18.42C18.3537 26 18.2901 25.9737 18.2432 25.9268C18.1963 25.8799 18.17 25.8163 18.17 25.75C18.17 25.7 18.18 25.66 18.2 25.63L19.1 24H26.55C27.3 24 27.96 23.58 28.3 22.97L31.88 16.5C31.95 16.34 32 16.17 32 16C32 15.7348 31.8946 15.4804 31.7071 15.2929C31.5196 15.1054 31.2652 15 31 15H16.21L15.27 13M18 29C16.89 29 16 29.89 16 31C16 31.5304 16.2107 32.0391 16.5858 32.4142C16.9609 32.7893 17.4696 33 18 33C18.5304 33 19.0391 32.7893 19.4142 32.4142C19.7893 32.0391 20 31.5304 20 31C20 30.4696 19.7893 29.9609 19.4142 29.5858C19.0391 29.2107 18.5304 29 18 29Z" fill="#156E3E" />
                </svg>
              </div>

            </div>
            <div className="hidden md:flex  ">
              <div className="me-2 lg:me-6">
                <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" fill="white" />
                  <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#156E3E" />
                  <path d="M28 29C26.89 29 26 29.89 26 31C26 31.5304 26.2107 32.0391 26.5858 32.4142C26.9609 32.7893 27.4696 33 28 33C28.5304 33 29.0391 32.7893 29.4142 32.4142C29.7893 32.0391 30 31.5304 30 31C30 30.4696 29.7893 29.9609 29.4142 29.5858C29.0391 29.2107 28.5304 29 28 29ZM12 13V15H14L17.6 22.59L16.24 25.04C16.09 25.32 16 25.65 16 26C16 26.5304 16.2107 27.0391 16.5858 27.4142C16.9609 27.7893 17.4696 28 18 28H30V26H18.42C18.3537 26 18.2901 25.9737 18.2432 25.9268C18.1963 25.8799 18.17 25.8163 18.17 25.75C18.17 25.7 18.18 25.66 18.2 25.63L19.1 24H26.55C27.3 24 27.96 23.58 28.3 22.97L31.88 16.5C31.95 16.34 32 16.17 32 16C32 15.7348 31.8946 15.4804 31.7071 15.2929C31.5196 15.1054 31.2652 15 31 15H16.21L15.27 13M18 29C16.89 29 16 29.89 16 31C16 31.5304 16.2107 32.0391 16.5858 32.4142C16.9609 32.7893 17.4696 33 18 33C18.5304 33 19.0391 32.7893 19.4142 32.4142C19.7893 32.0391 20 31.5304 20 31C20 30.4696 19.7893 29.9609 19.4142 29.5858C19.0391 29.2107 18.5304 29 18 29Z" fill="#156E3E" />
                </svg>
              </div>
              <div className="grid content-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="#156E3E" />
                </svg>
              </div>
              <div className="grid content-center">
                <p className="text-[15px] text-slicing-foreground poppins-bold">Hi, Anton Raharjo</p>
              </div>
              <div className="grid content-center ms-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_4204)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0599 16.06C12.7787 16.3409 12.3974 16.4987 11.9999 16.4987C11.6024 16.4987 11.2212 16.3409 10.9399 16.06L5.2819 10.404C5.00064 10.1226 4.84268 9.74102 4.84277 9.34316C4.84287 8.9453 5.00101 8.56377 5.2824 8.28251C5.56379 8.00125 5.9454 7.84329 6.34325 7.84338C6.74111 7.84348 7.12264 8.00162 7.4039 8.28301L11.9999 12.879L16.5959 8.28301C16.8787 8.00964 17.2575 7.85827 17.6508 7.8615C18.0441 7.86473 18.4204 8.0223 18.6986 8.30028C18.9769 8.57827 19.1348 8.95441 19.1384 9.34771C19.142 9.741 18.991 10.12 18.7179 10.403L13.0609 16.061L13.0599 16.06Z" fill="#156E3E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4204">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
            </div>



            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <div className='py-2 px-3'>
                <div className='flex justify-start md:hidden'>

                  <div className="grid content-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="#156E3E" />
                    </svg>
                  </div>
                  <div className="grid content-center">
                    <p className="text-[15px] text-slicing-foreground poppins-bold ms-2">Hi, Anton Raharjo</p>
                  </div>


                </div>
                <div className='grid content-center h-full'>
                  <div className='pt-[5px]' >
                    <hr className='border-t-2 border-slicing-foreground' />
                  </div>
                </div>
              </div>


              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slicing-foreground  poppins-bold" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slicing-foreground  poppins-bold">Bantuan</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slicing-foreground  poppins-bold">Sewa Alat</a>
              </li>
              <li>
                <div className='flex justify-start md:hidden'>
                  {/* <div className="me-6">
                    <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" fill="white" />
                      <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#156E3E" />
                      <path d="M28 29C26.89 29 26 29.89 26 31C26 31.5304 26.2107 32.0391 26.5858 32.4142C26.9609 32.7893 27.4696 33 28 33C28.5304 33 29.0391 32.7893 29.4142 32.4142C29.7893 32.0391 30 31.5304 30 31C30 30.4696 29.7893 29.9609 29.4142 29.5858C29.0391 29.2107 28.5304 29 28 29ZM12 13V15H14L17.6 22.59L16.24 25.04C16.09 25.32 16 25.65 16 26C16 26.5304 16.2107 27.0391 16.5858 27.4142C16.9609 27.7893 17.4696 28 18 28H30V26H18.42C18.3537 26 18.2901 25.9737 18.2432 25.9268C18.1963 25.8799 18.17 25.8163 18.17 25.75C18.17 25.7 18.18 25.66 18.2 25.63L19.1 24H26.55C27.3 24 27.96 23.58 28.3 22.97L31.88 16.5C31.95 16.34 32 16.17 32 16C32 15.7348 31.8946 15.4804 31.7071 15.2929C31.5196 15.1054 31.2652 15 31 15H16.21L15.27 13M18 29C16.89 29 16 29.89 16 31C16 31.5304 16.2107 32.0391 16.5858 32.4142C16.9609 32.7893 17.4696 33 18 33C18.5304 33 19.0391 32.7893 19.4142 32.4142C19.7893 32.0391 20 31.5304 20 31C20 30.4696 19.7893 29.9609 19.4142 29.5858C19.0391 29.2107 18.5304 29 18 29Z" fill="#156E3E" />
                    </svg>
                  </div>
                  <div className="grid content-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="#156E3E" />
                    </svg>
                  </div>
                  <div className="grid content-center">
                    <p className="text-[15px] text-slicing-foreground poppins-bold">Hi, Anton Raharjo</p>
                  </div>
                  <div className="grid content-center ms-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_4204)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0599 16.06C12.7787 16.3409 12.3974 16.4987 11.9999 16.4987C11.6024 16.4987 11.2212 16.3409 10.9399 16.06L5.2819 10.404C5.00064 10.1226 4.84268 9.74102 4.84277 9.34316C4.84287 8.9453 5.00101 8.56377 5.2824 8.28251C5.56379 8.00125 5.9454 7.84329 6.34325 7.84338C6.74111 7.84348 7.12264 8.00162 7.4039 8.28301L11.9999 12.879L16.5959 8.28301C16.8787 8.00964 17.2575 7.85827 17.6508 7.8615C18.0441 7.86473 18.4204 8.0223 18.6986 8.30028C18.9769 8.57827 19.1348 8.95441 19.1384 9.34771C19.142 9.741 18.991 10.12 18.7179 10.403L13.0609 16.061L13.0599 16.06Z" fill="#156E3E" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4204">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div> */}
                  <div className='py-2 px-3'>
                    <button type="button" className="text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded  text-center py-2 px-3 poppins-bold ">Logout</button>
                  </div>


                </div>

              </li>
              {/* <li>
      <a href="#" className="block sm:hidden py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">x</a>
    </li> */}

            </ul>


          </div>

        </div>
      </nav>

    </div>
  )
}

export default Navbar