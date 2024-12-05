/* eslint-disable @next/next/no-img-element */
import React from 'react'

function home() {
  return (
    <div className='bg-slicing'>
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/images/slicing/iconMountain.png" className="w-[60px] h-[23px]" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-slicing-foreground poppins-bold">Loremipsum</span>
            </a>

            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

              <button type="button" className="hidden md:flex text-slicing-foreground bg-white border border-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold ">Masuk</button>

              <button type="button" className="hidden md:flex text-white bg-slicing-foreground border border-slicing-foreground  focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold">Daftar</button>


              <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                  <div className='flex justify-center md:hidden'>
                    <button type="button" className="text-slicing-foreground bg-white border border-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold  w-full">Masuk</button>
                    <button type="button" className=" text-white bg-slicing-foreground border border-slicing-foreground  focus:ring-4 focus:outline-none focus:ring-slicing font-medium rounded text-sm px-4 py-2 text-center me-3 poppins-bold w-full">Daftar</button>
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

      <div className='h-auto  md:h-screen content-center'>
        <div className='container grid grid-cols-1 md:grid-cols-3 pt-[140px] pb-[140px]'>
          <div className='md:hidden flex justify-center'>
            <img src="/images/slicing/temukan.png" className='sm:w-[440px] sm:h-[440px]' alt="Example Image" />
          </div>
          <div className='md:col-span-2'>
            <p className='text-slicing-foreground text-3xl md:text-5xl md:text-[68px] poppins-bold text-center md:text-start  mt-[32px] md:mt-0'>Temukan Peralatan Outdoor Terbaik di <br /> Lorem ipsum</p>
            <p className='mt-7 text-base md:text-2xl text-slicing-foreground poppins-regular text-center md:text-start'>Nikmati petualangan dengan perlengkapan terbaik. Kami <br /> menyediakan semua yang kamu butuhkan.</p>

            <div className='flex justify-center md:justify-start'>
              <button type="button" className="mt-9  px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-slicing-foreground focus:ring-4 focus:outline-none focus:ring-slicing rounded text-center ">
                <svg className="w-5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M15.5005 4H9.50046C9.30075 3.99943 9.10547 4.05891 8.93999 4.17071C8.7745 4.28252 8.64645 4.4415 8.57246 4.627L2.58046 18.607C2.51545 18.7591 2.48919 18.925 2.50404 19.0898C2.51889 19.2545 2.57439 19.4131 2.66556 19.5511C2.75673 19.6892 2.88073 19.8024 3.02644 19.8808C3.17215 19.9591 3.33502 20.0001 3.50046 20H8.50046V15C8.50046 14.7348 8.60582 14.4804 8.79336 14.2929C8.98089 14.1054 9.23525 14 9.50046 14C9.76568 14 10.02 14.1054 10.2076 14.2929C10.3951 14.4804 10.5005 14.7348 10.5005 15V20H21.5005C21.666 20.0002 21.829 19.9592 21.9749 19.8808C22.1207 19.8024 22.2448 19.689 22.336 19.5508C22.4272 19.4126 22.4826 19.254 22.4974 19.0891C22.5121 18.9242 22.4857 18.7582 22.4205 18.606L16.4205 4.606C16.3433 4.426 16.215 4.27262 16.0514 4.16489C15.8879 4.05716 15.6963 3.99983 15.5005 4Z" fill="white" />
                </svg>

                <span className='mt-0.5 poppins-bold'>Sewa Peralatan Sekarang</span>
              </button>
            </div>

          </div>
          <div className='hidden md:block'>
            <img src="/images/slicing/temukan.png" className='w-[611px] h-[450px] mt-[-60px]' alt="Example Image" />
          </div>
        </div>
      </div>

      <div className='h-auto pt-[140px] pb-[140px] bg-white'>
        <div className='container grid grid-cols-1 mt-10 md:mt-0 md:grid-cols-3 md:gap-[70px]'>
          <div className='flex justify-center'>
            <img src="/images/slicing/tree.png" className='sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px]  ' alt="" />
          </div>
          <div className='col-span-2'>
            <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center md:text-start mt-[32px] md:mt-0 '>Tentang Kami</p>
            <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center md:text-start mt-3 md:mt-[20px]  '>Percayakan peralatan <br /> petualanganmu kepada kami</p>
            <p className='text-slicing-grey text-[16px] sm:text-[18px] md:text-[24px] mt-3 md:mt-[48px] text-justify md:text-start '>Lorem ipsum adalah tempat penyewaan alat outdoor yang terdapat di Loremipsum, Kabupaten Loremipsum. Tempat penyewaan alat outdoor ini berdiri tahun 2021. Tujuan didirikannya tempat penyewaan alat outdoor ini adalah untuk mempermudah pendaki atau orang yang ingin berkemah mendapatkan alat-alat yang dibutuhkan dengan harga terjangkau.</p>
          </div>
        </div>
      </div>
      <div className='h-auto mt-10'>
        <div className='container'>
          <div>
            <p className='text-center'>LAYANAN</p>
            <p className='mt-3 text-5xl text-center'>Kami menyediakan pelayanan terbaik untukmu</p>
          </div>
          <div>
            <div className='grid grid-col-1 md:grid-cols-3 mt-9'>
              <div>
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
              </div>
              <div>
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
              </div>
              <div>
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-auto'>
        <div className='container'>
          <div>
            <p className='text-center'>PRODUK TERLARIS</p>
            <p className='mt-3 text-5xl text-center'>Peralatan ini mungkin akan membantumu dalam berpetualang</p>
          </div>
          <div>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-9 gap-5'>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1496975351654-5236530c59c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1496975351654-5236530c59c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1496975351654-5236530c59c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1496975351654-5236530c59c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-auto'>
        <div className='container'>
          <div>
            {/* <p className='text-center'>FAQ</p> */}
            {/* <p className='mt-3 text-5xl text-center'>Pertanyaan yang sering ditanyakan</p> */}
          </div>
          <div className=''>

            {/* <div id="accordion-arrow-icon" data-accordion="open">
              <h2 id="accordion-arrow-icon-heading-1">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
                  <span>Accordion without an arrow</span>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                  <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
              </div>
              <h2 id="accordion-arrow-icon-heading-2">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-2" aria-expanded="false" aria-controls="accordion-arrow-icon-body-2">
                  <span>Accordion with another icon</span>
                  <svg className="w-4 h-4 shrink-0 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-2" className="hidden" aria-labelledby="accordion-arrow-icon-heading-2">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>
              <h2 id="accordion-arrow-icon-heading-3">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
                  <span>Accordion without arrow rotation</span>
                  <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-3" className="hidden" aria-labelledby="accordion-arrow-icon-heading-3">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </div>
            </div> */}

          </div>
        </div>

      </div>
      <div className='h-auto'>
        <div className='container'>
          <div className='grid grid-cols-2'>
            <div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>

            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1496975351654-5236530c59c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container'>
          <div className='grid grid-cols-3'>
            <div>
              <p>lorem ipsum</p>
            </div>
            <div>
              <p className='text-center'>@copy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home