/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function Home() {

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

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

      <div className='h-auto  pt-[140px] pb-[140px]'>
        <div className='container'>
          <div>
            <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center mt-[32px] md:mt-0 '>LAYANAN</p>
            <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center mt-3 md:mt-[20px] '>Kami menyediakan pelayanan terbaik untukmu</p>
          </div>
          <div>
            <div className='grid grid-col-1 md:grid-cols-3 mt-9 gap-4 md:gap-10 lg:gap-28 '>
              <div className='flex justify-center'>
                <a href="#" className="block sm:w-[200px] sm:h-[250px]  md:w-[350px]  md:h-[400px] p-6 bg-slicing-foreground border rounded shadow pt-10">
                  <div className='flex justify-center'>
                    <img src="/images/slicing/serviceChart.png" alt="" />

                  </div>
                  <p className='text-[24px] poppins-bold text-center text-white my-6  '>Harga Terjangkau</p>
                  <p className='text-[18px] poppins-regular text-center text-white'>Peralatan berkualitas tak harus mahal. Dengan harga yang terjangkau, kamu bisa menikmati  peralatan outdoor berkualitas dari kami.</p>
                </a>
              </div>
              <div className='flex justify-center'>
                <a href="#" className="block  sm:w-[200px] sm:h-[250px]  md:w-[350px]  md:h-[400px] p-6 bg-slicing-foreground border rounded shadow pt-10">
                  <div className='flex justify-center'>
                    <img src="/images/slicing/serviceTruck.png" alt="" />

                  </div>
                  <p className='text-[24px] poppins-bold text-center text-white my-6  '>Gratis Antar Jemput</p>
                  <p className='text-[18px] poppins-regular text-center text-white'>Tidak perlu repot mengangkut peralatan mendaki. Manfaatkan layanan antar jemput gratis kami dan fokuslah pada petualanganmu.</p>
                </a>
              </div>
              <div className='flex justify-center'>
                <a href="#" className="block  sm:w-[200px] sm:h-[250px]  md:w-[350px]  md:h-[400px] p-6 bg-slicing-foreground border rounded shadow pt-10">
                  <div className='flex justify-center'>
                    <img src="/images/slicing/serviceCamp.png" alt="" />

                  </div>
                  <p className='text-[24px] poppins-bold text-center text-white my-6  '>Peralatan Berkualitas</p>
                  <p className='text-[18px] poppins-regular text-center text-white'>Kami menyediakan berbagai peralatan berkualitas untuk memastikan keamanan dan kenyamananmu selama berpetualang.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-auto  pt-[140px] pb-[140px] bg-white'>
        <div className='container'>
          <div>
            <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center mt-[32px] md:mt-0  '>PRODUK TERLARIS</p>
            <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center mt-3 md:mt-[20px]'>Peralatan ini mungkin akan membantumu dalam berpetualang</p>
          </div>
          <div>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-9 gap-5'>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded shadow">
                  <a href="#">
                    <img className="rounded-t bg-slicing-deep" src="/images/slicing/sleepingBag.png" alt="" />
                  </a>
                  <div className="p-5">

                    <p className='text-[20px] poppins-bold'>Sleeping Bag</p>
                    <p className="text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                    <div className='flex justify-center mt-2'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                      </svg>
                      <p className="ms-3 text-[18px] text-slicing-foreground poppins-bold">

                        Masukan Keranjang</p>
                    </div>


                  </div>
                </div>

              </div>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded shadow">
                  <a href="#">
                    <img className="rounded-t bg-slicing-deep" src="/images/slicing/redBag.png" alt="" />
                  </a>
                  <div className="p-5">

                    <p className='text-[20px] poppins-bold'>Carrier 60L + Rain Cover</p>
                    <p className="text-[18px] text-slicing-grey poppins-regular mt-2">Rp 25.000 <span className='text-end'> / hari</span></p>
                    <div className='flex justify-center mt-2'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                      </svg>
                      <p className="ms-3 text-[18px] text-slicing-foreground poppins-bold">

                        Masukan Keranjang</p>
                    </div>


                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded shadow">
                  <a href="#">
                    <img className="rounded-t bg-slicing-deep" src="/images/slicing/cookingTools.png" alt="" />
                  </a>
                  <div className="p-5">

                    <p className='text-[20px] poppins-bold'>Nesting</p>
                    <p className="text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 7.000 <span className='text-end'> / hari</span></p>
                    <div className='flex justify-center mt-2'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                      </svg>
                      <p className="ms-3 text-[18px] text-slicing-foreground poppins-bold">

                        Masukan Keranjang</p>
                    </div>


                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm bg-white border border-gray-200 rounded shadow">
                  <a href="#">
                    <img className="rounded-t bg-slicing-deep" src="/images/slicing/camp.png" alt="" />
                  </a>
                  <div className="p-5">

                    <p className='text-[20px] poppins-bold'>Tenda 4-5 Orang</p>
                    <p className="text-[18px] text-slicing-grey poppins-regular mt-2">Rp 35.000 <span className='text-end'> / hari</span></p>
                    <div className='flex justify-center mt-2'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                      </svg>
                      <p className="ms-3 text-[18px] text-slicing-foreground poppins-bold">

                        Masukan Keranjang</p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-auto  pt-[140px] pb-[140px] bg-white'>
        <div className='container'>
          <div>
            <p className='text-slicing-foreground poppins-bold text-sm  sm:text-xl md:text-2xl text-center mt-[32px] md:mt-0  '>FAQ</p>
            <p className='poppins-bold text-[26px] sm:text-[28px] md:text-[40px] text-center mt-3 md:mt-[20px]'>Pertanyaan yang sering ditanyakan</p>
          </div>
          <div className='mt-[48px]'>
            <div id="accordion-arrow-icon" data-accordion="open">
              {/*  */}
              <h2 id="accordion-arrow-icon-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-slicing-grey1 text-black"
                  // data-accordion-target="#accordion-arrow-icon-body-3"
                  onClick={handleClick}
                  aria-expanded={true}
                  aria-controls="accordion-arrow-icon-body-3"
                >
                  <p className="poppins-bold text-[20px]">Berapa lama durasi maksimal penyewaan?</p>
                  <span>
                    {true ? (
                      <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                      </svg>
                    )}
                  </span>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-3" className="" aria-labelledby="accordion-arrow-icon-heading-3">
                <div className="p-5  bg-slicing-grey1">
                  <p className="poppins-regular text-[18px]">Tidak ada durasi maksimal penyewaan pada Lorem ipsum. Kamu bebas menyewa alat selama yang kamu mau..</p>
                </div>
              </div>
              {/*  */}
              <h2 id="accordion-arrow-icon-heading-4 ">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-black mt-[20px] border-2 border-slicing-greyBorder rounded"
                  // data-accordion-target="#accordion-arrow-icon-body-4"
                  // onClick={handleClick}
                  aria-expanded={false}
                  aria-controls="accordion-arrow-icon-body-4"
                >
                  <p className="poppins-bold text-[20px]">Bagaimana proses pengembalian alat?</p>
                  <span>
                    {false ? (
                      <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                      </svg>
                    )}
                  </span>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-4" className="hidden" aria-labelledby="accordion-arrow-icon-heading-4">
                <div className="p-5  bg-slicing-grey1">
                  <p className="poppins-regular text-[18px]">-</p>
                </div>
              </div>
              {/*  */}
              <h2 id="accordion-arrow-icon-heading-4 ">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-black mt-[20px] border-2 border-slicing-greyBorder rounded"
                  // data-accordion-target="#accordion-arrow-icon-body-4"
                  // onClick={handleClick}
                  aria-expanded={false}
                  aria-controls="accordion-arrow-icon-body-4"
                >
                  <p className="poppins-bold text-[20px]">Apakah ada denda jika terlambat mengembalikan atau merusak alat?</p>
                  <span>
                    {false ? (
                      <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                      </svg>
                    )}
                  </span>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-4" className="hidden" aria-labelledby="accordion-arrow-icon-heading-4">
                <div className="p-5  bg-slicing-grey1">
                  <p className="poppins-regular text-[18px]">-</p>
                </div>
              </div>
              {/*  */}
              <h2 id="accordion-arrow-icon-heading-4 ">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-black mt-[20px] border-2 border-slicing-greyBorder rounded"
                  // data-accordion-target="#accordion-arrow-icon-body-4"
                  // onClick={handleClick}
                  aria-expanded={false}
                  aria-controls="accordion-arrow-icon-body-4"
                >
                  <p className="poppins-bold text-[20px]">Apakah alat yang disewakan dalam kondisi baik?</p>
                  <span>
                    {false ? (
                      <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                      </svg>
                    )}
                  </span>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-4" className="hidden" aria-labelledby="accordion-arrow-icon-heading-4">
                <div className="p-5  bg-slicing-grey1">
                  <p className="poppins-regular text-[18px]">-</p>
                </div>
              </div>
              {/*  */}
              <h2 id="accordion-arrow-icon-heading-4 ">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-black mt-[20px] border-2 border-slicing-greyBorder rounded"
                  // data-accordion-target="#accordion-arrow-icon-body-4"
                  // onClick={handleClick}
                  aria-expanded={false}
                  aria-controls="accordion-arrow-icon-body-4"
                >
                  <p className="poppins-bold text-[20px]">Apakah perlu memberikan jaminan ketika menyewa alat?</p>
                  <span>
                    {false ? (
                      <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 3.4139H1.50065C1.12493 3.4139 0.764593 3.26464 0.498917 2.99897C0.23324 2.73329 0.0839844 2.37296 0.0839844 1.99723C0.0839844 1.62151 0.23324 1.26118 0.498917 0.995499C0.764593 0.729822 1.12493 0.580566 1.50065 0.580566H18.5007C18.8764 0.580566 19.2367 0.729822 19.5024 0.995499C19.7681 1.26118 19.9173 1.62151 19.9173 1.99723C19.9173 2.37296 19.7681 2.73329 19.5024 2.99897C19.2367 3.26464 18.8764 3.4139 18.5007 3.4139Z" fill="black" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5007 11.4139H11.4173V18.4972C11.4173 18.873 11.2681 19.2333 11.0024 19.499C10.7367 19.7646 10.3764 19.9139 10.0007 19.9139C9.62493 19.9139 9.26459 19.7646 8.99892 19.499C8.73324 19.2333 8.58398 18.873 8.58398 18.4972V11.4139H1.50065C1.12493 11.4139 0.764593 11.2646 0.498917 10.999C0.23324 10.7333 0.0839844 10.373 0.0839844 9.99723C0.0839844 9.62151 0.23324 9.26118 0.498917 8.9955C0.764593 8.72982 1.12493 8.58057 1.50065 8.58057H8.58398V1.49723C8.58398 1.12151 8.73324 0.761175 8.99892 0.495498C9.26459 0.229822 9.62493 0.0805664 10.0007 0.0805664C10.3764 0.0805664 10.7367 0.229822 11.0024 0.495498C11.2681 0.761175 11.4173 1.12151 11.4173 1.49723V8.58057H18.5007C18.8764 8.58057 19.2367 8.72982 19.5024 8.9955C19.7681 9.26118 19.9173 9.62151 19.9173 9.99723C19.9173 10.373 19.7681 10.7333 19.5024 10.999C19.2367 11.2646 18.8764 11.4139 18.5007 11.4139Z" fill="black" />
                      </svg>
                    )}
                  </span>
                </button>
              </h2>
              <div id="accordion-arrow-icon-body-4" className="hidden" aria-labelledby="accordion-arrow-icon-heading-4">
                <div className="p-5  bg-slicing-grey1">
                  <p className="poppins-regular text-[18px]">-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto pt-[140px] bg-white">
        <div
          className=" "
          style={{
            backgroundImage: 'url(/images/slicing/footer1.png)',
            // backgroundSize: '1440px 850px',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'local',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            // backgroundAttachment: 'fixed',
            // backgroundSize: '100 % 100 %',

          }}
        >
          <div
            className=" "
            style={
              { backgroundColor: "rgba(21, 111, 63, 0.5)" }
            }
          >
            <div className='container py-16 grid grid-cols-1 sm:grid-cols-2 '>
              <div className="py-10">
                <div>
                  <div className="flex justify-start ">
                    <div className="">
                      <div className="bg-slicing w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded flex justify-center items-center">
                        <svg className="w-20 h-10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 1.66675C11.9891 1.66675 13.8968 2.45692 15.3033 3.86345C16.7098 5.26997 17.5 7.17762 17.5 9.16675C17.5 11.7284 16.1033 13.8251 14.6317 15.3292C13.8963 16.0725 13.094 16.7464 12.235 17.3426L11.88 17.5842L11.7133 17.6951L11.3992 17.8951L11.1192 18.0659L10.7725 18.2676C10.5371 18.4016 10.2709 18.472 10 18.472C9.72913 18.472 9.46291 18.4016 9.2275 18.2676L8.88083 18.0659L8.4475 17.7992L8.2875 17.6951L7.94583 17.4676C7.01915 16.8404 6.15589 16.1242 5.36833 15.3292C3.89667 13.8242 2.5 11.7284 2.5 9.16675C2.5 7.17762 3.29018 5.26997 4.6967 3.86345C6.10322 2.45692 8.01088 1.66675 10 1.66675ZM10 6.66675C9.6717 6.66675 9.34661 6.73141 9.04329 6.85705C8.73998 6.98269 8.46438 7.16683 8.23223 7.39898C8.00009 7.63113 7.81594 7.90673 7.6903 8.21004C7.56466 8.51335 7.5 8.83844 7.5 9.16675C7.5 9.49505 7.56466 9.82014 7.6903 10.1235C7.81594 10.4268 8.00009 10.7024 8.23223 10.9345C8.46438 11.1667 8.73998 11.3508 9.04329 11.4764C9.34661 11.6021 9.6717 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4034 11.7678 10.9345C12.2366 10.4657 12.5 9.82979 12.5 9.16675C12.5 8.50371 12.2366 7.86782 11.7678 7.39898C11.2989 6.93014 10.663 6.66675 10 6.66675Z" fill="#156E3E" />
                        </svg>

                      </div>
                    </div>
                    <div className="ms-[21px]">
                      <p className="text-white poppins-bold">Lokasi Kami</p>
                      <p className="text-white poppins-regular mt-2">lorem ipsum</p>
                    </div>
                  </div>
                </div>

                <div className="mt-[24px]">
                  <div className="flex justify-start ">
                    <div className="">
                      <div className="bg-slicing w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded flex justify-center items-center">
                        <svg className="w-18 h-8" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.71453 1.03756C5.66703 1.73172 6.4087 2.67922 7.04203 3.58589L7.41036 4.12256L7.75786 4.63506C7.93168 4.889 8.006 5.19801 7.96666 5.50322C7.92732 5.80843 7.77707 6.0885 7.54453 6.29006L5.9187 7.49756C5.84015 7.55428 5.78486 7.63758 5.76309 7.73199C5.74133 7.8264 5.75457 7.92551 5.80036 8.01089C6.1687 8.68006 6.8237 9.67672 7.5737 10.4267C8.32453 11.1767 9.36786 11.8751 10.0837 12.2851C10.1735 12.3354 10.2791 12.3495 10.3789 12.3244C10.4787 12.2993 10.5651 12.2369 10.6204 12.1501L11.6787 10.5392C11.8733 10.2808 12.1603 10.1076 12.4797 10.056C12.7991 10.0045 13.126 10.0785 13.392 10.2626L13.9445 10.6451C14.977 11.3617 16.0862 12.1759 16.9345 13.2617C17.0691 13.4349 17.1547 13.641 17.1824 13.8585C17.2101 14.0761 17.1789 14.297 17.092 14.4984C16.3945 16.1259 14.6295 17.5117 12.7937 17.4442L12.5437 17.4301L12.3495 17.4134L12.1345 17.3884L11.9004 17.3567L11.6462 17.3151C11.6017 17.307 11.5573 17.2987 11.5129 17.2901L11.2329 17.2301C11.1839 17.2193 11.135 17.2082 11.0862 17.1967L10.7812 17.1184L10.4604 17.0267L10.1254 16.9184C8.58703 16.3967 6.63453 15.3717 4.6312 13.3684C2.6287 11.3659 1.6037 9.41339 1.08203 7.87506L0.973697 7.54006L0.88203 7.21922L0.803697 6.91422L0.738697 6.62589C0.719922 6.53559 0.702421 6.44502 0.686197 6.35422L0.64453 6.10006L0.611197 5.86589L0.58703 5.65089L0.570363 5.45672L0.55703 5.20672C0.48953 3.37672 1.89036 1.59922 3.51036 0.905058C3.70534 0.820863 3.91886 0.788808 4.12997 0.812037C4.34108 0.835266 4.54252 0.912982 4.71453 1.03756ZM11.4937 4.03339L11.5904 4.04422C12.197 4.15122 12.7541 4.44751 13.1819 4.89062C13.6098 5.33374 13.8864 5.90092 13.972 6.51089C14.0026 6.72187 13.9511 6.93654 13.8282 7.11073C13.7053 7.28491 13.5203 7.40538 13.3113 7.44733C13.1023 7.48928 12.8851 7.44953 12.7045 7.33626C12.5239 7.223 12.3936 7.04482 12.3404 6.83839L12.3212 6.74256C12.2877 6.50347 12.1856 6.27922 12.0274 6.09688C11.8692 5.91454 11.6615 5.78193 11.4295 5.71506L11.3004 5.68589C11.0911 5.6488 10.9039 5.53317 10.7771 5.36265C10.6503 5.19212 10.5934 4.97959 10.6181 4.76851C10.6428 4.55744 10.7472 4.36377 10.91 4.22713C11.0727 4.09048 11.2815 4.02118 11.4937 4.03339ZM11.5004 1.50006C12.8264 1.50006 14.0982 2.02684 15.0359 2.96452C15.9736 3.90221 16.5004 5.17397 16.5004 6.50006C16.5001 6.71246 16.4188 6.91675 16.273 7.0712C16.1272 7.22564 15.9279 7.31859 15.7159 7.33103C15.5038 7.34348 15.295 7.2745 15.1322 7.13817C14.9693 7.00184 14.8646 6.80847 14.8395 6.59756L14.8337 6.50006C14.834 5.65374 14.5122 4.83902 13.9337 4.22133C13.3552 3.60363 12.5632 3.22926 11.7187 3.17422L11.5004 3.16672C11.2793 3.16672 11.0674 3.07893 10.9111 2.92265C10.7548 2.76637 10.667 2.5544 10.667 2.33339C10.667 2.11238 10.7548 1.90042 10.9111 1.74414C11.0674 1.58785 11.2793 1.50006 11.5004 1.50006Z" fill="#156E3E" />
                        </svg>
                      </div>
                    </div>
                    <div className="ms-[21px]">
                      <p className="text-white poppins-bold">Telephone</p>
                      <p className="text-white poppins-regular mt-2">lorem ipsum</p>
                    </div>
                  </div>
                </div>

                <div className="mt-[24px]">
                  <div className="flex justify-start ">
                    <div className="">
                      <div className="bg-slicing w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded flex justify-center items-center">
                        <svg className="w-20 h-9" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.0013 1.6665C14.6038 1.6665 18.3346 5.39734 18.3346 9.99984C18.3346 14.6023 14.6038 18.3332 10.0013 18.3332C8.52863 18.3355 7.08186 17.9458 5.80965 17.204L1.67131 18.3332L2.79798 14.1932C2.05556 12.9206 1.66552 11.4732 1.66798 9.99984C1.66798 5.39734 5.39881 1.6665 10.0013 1.6665ZM7.16131 6.08317L6.99465 6.08984C6.88675 6.09641 6.7813 6.12475 6.68465 6.17317C6.59425 6.22436 6.51173 6.28836 6.43965 6.36317C6.33965 6.45734 6.28298 6.539 6.22215 6.61817C5.91392 7.01892 5.74796 7.51093 5.75048 8.0165C5.75215 8.42484 5.85881 8.82234 6.02548 9.194C6.36631 9.94567 6.92715 10.7415 7.66715 11.479C7.84548 11.6565 8.02048 11.8348 8.20881 12.0007C9.1283 12.8102 10.224 13.394 11.4088 13.7057L11.8821 13.7782C12.0363 13.7865 12.1905 13.7748 12.3455 13.7673C12.5882 13.7548 12.8252 13.6891 13.0396 13.5748C13.1488 13.5186 13.2553 13.4574 13.3588 13.3915C13.3588 13.3915 13.3946 13.3682 13.463 13.3165C13.5755 13.2332 13.6446 13.174 13.738 13.0765C13.8071 13.0048 13.8671 12.9207 13.913 12.8248C13.978 12.689 14.043 12.4298 14.0696 12.214C14.0896 12.049 14.0838 11.959 14.0813 11.9032C14.078 11.814 14.0038 11.7215 13.923 11.6823L13.438 11.4648C13.438 11.4648 12.713 11.149 12.2696 10.9473C12.2233 10.9271 12.1735 10.9155 12.123 10.9132C12.066 10.9073 12.0084 10.9137 11.954 10.932C11.8997 10.9502 11.8499 10.9799 11.808 11.019C11.8038 11.0173 11.748 11.0648 11.1455 11.7948C11.1109 11.8413 11.0633 11.8764 11.0086 11.8957C10.954 11.915 10.8949 11.9176 10.8388 11.9032C10.7845 11.8886 10.7313 11.8702 10.6796 11.8482C10.5763 11.8048 10.5405 11.7882 10.4696 11.7582C9.99137 11.5495 9.54855 11.2675 9.15715 10.9223C9.05215 10.8307 8.95465 10.7307 8.85465 10.634C8.5268 10.32 8.24108 9.96484 8.00465 9.57734L7.95548 9.49817C7.92017 9.44497 7.89161 9.38759 7.87048 9.32734C7.83881 9.20484 7.92131 9.1065 7.92131 9.1065C7.92131 9.1065 8.12381 8.88484 8.21798 8.76484C8.30965 8.64817 8.38715 8.53484 8.43715 8.454C8.53548 8.29567 8.56631 8.13317 8.51465 8.00734C8.28131 7.43734 8.03965 6.86984 7.79131 6.3065C7.74215 6.19484 7.59631 6.11484 7.46381 6.099C7.41881 6.094 7.37381 6.089 7.32881 6.08567C7.2169 6.08011 7.10476 6.08122 6.99298 6.089L7.16131 6.08317Z" fill="#156E3E" />
                        </svg>

                      </div>
                    </div>
                    <div className="ms-[21px]">
                      <p className="text-white poppins-bold">WhatsApp</p>
                      <p className="text-white poppins-regular mt-2">lorem ipsum</p>
                    </div>
                  </div>
                </div>

                <div className="mt-[24px]">
                  <div className="flex justify-start ">
                    <div className="">
                      <div className="bg-slicing w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded flex justify-center items-center">
                        <svg className="w-20 h-8" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.8565 0.666748C10.794 0.669248 11.2698 0.674248 11.6807 0.685915L11.8423 0.691748C12.029 0.698415 12.2132 0.706748 12.4357 0.716748C13.3223 0.758415 13.9273 0.898415 14.4582 1.10425C15.0082 1.31591 15.4715 1.60258 15.9348 2.06508C16.3586 2.48166 16.6865 2.98557 16.8957 3.54175C17.1015 4.07258 17.2415 4.67758 17.2832 5.56508C17.2932 5.78675 17.3015 5.97092 17.3082 6.15842L17.3132 6.32008C17.3257 6.73008 17.3307 7.20591 17.3323 8.14341L17.3332 8.76508V9.85675C17.3352 10.4646 17.3288 11.0724 17.314 11.6801L17.309 11.8417C17.3023 12.0292 17.294 12.2134 17.284 12.4351C17.2423 13.3226 17.1007 13.9267 16.8957 14.4584C16.6871 15.0149 16.3591 15.5189 15.9348 15.9351C15.5181 16.3587 15.0143 16.6865 14.4582 16.8959C13.9273 17.1017 13.3223 17.2417 12.4357 17.2834C12.2379 17.2927 12.0401 17.3011 11.8423 17.3084L11.6807 17.3134C11.2698 17.3251 10.794 17.3309 9.8565 17.3326L9.23483 17.3334H8.144C7.53588 17.3355 6.92777 17.3291 6.31983 17.3142L6.15816 17.3092C5.96034 17.3018 5.76256 17.2931 5.56483 17.2834C4.67816 17.2417 4.07316 17.1017 3.5415 16.8959C2.98539 16.6871 2.48168 16.3591 2.06566 15.9351C1.64153 15.5187 1.31335 15.0147 1.104 14.4584C0.898163 13.9276 0.758163 13.3226 0.716496 12.4351C0.707212 12.2373 0.698879 12.0396 0.691496 11.8417L0.68733 11.6801C0.671973 11.0724 0.665028 10.4646 0.666496 9.85675V8.14341C0.664171 7.53558 0.670282 6.92775 0.68483 6.32008L0.690663 6.15842C0.69733 5.97092 0.705663 5.78675 0.715663 5.56508C0.75733 4.67758 0.89733 4.07341 1.10316 3.54175C1.31242 2.985 1.64126 2.48093 2.0665 2.06508C2.48241 1.64131 2.98578 1.3134 3.5415 1.10425C4.07316 0.898415 4.67733 0.758415 5.56483 0.716748C5.7865 0.706748 5.9715 0.698415 6.15816 0.691748L6.31983 0.686748C6.92749 0.671942 7.53533 0.665552 8.14316 0.667581L9.8565 0.666748ZM8.99983 4.83342C7.89476 4.83342 6.83495 5.2724 6.05355 6.0538C5.27215 6.83521 4.83316 7.89501 4.83316 9.00008C4.83316 10.1052 5.27215 11.165 6.05355 11.9464C6.83495 12.7278 7.89476 13.1667 8.99983 13.1667C10.1049 13.1667 11.1647 12.7278 11.9461 11.9464C12.7275 11.165 13.1665 10.1052 13.1665 9.00008C13.1665 7.89501 12.7275 6.83521 11.9461 6.0538C11.1647 5.2724 10.1049 4.83342 8.99983 4.83342ZM8.99983 6.50008C9.32813 6.50003 9.65324 6.56464 9.95657 6.69022C10.2599 6.81581 10.5355 6.99991 10.7677 7.23202C10.9999 7.46413 11.1841 7.7397 11.3098 8.04299C11.4355 8.34628 11.5002 8.67136 11.5002 8.99967C11.5003 9.32797 11.4357 9.65307 11.3101 9.95641C11.1845 10.2597 11.0004 10.5354 10.7683 10.7676C10.5362 10.9997 10.2606 11.1839 9.95734 11.3096C9.65405 11.4353 9.32897 11.5 9.00066 11.5001C8.33762 11.5001 7.70174 11.2367 7.2329 10.7678C6.76406 10.299 6.50066 9.66312 6.50066 9.00008C6.50066 8.33704 6.76406 7.70116 7.2329 7.23231C7.70174 6.76347 8.33762 6.50008 9.00066 6.50008M13.3757 3.58341C13.0994 3.58341 12.8344 3.69316 12.6391 3.88851C12.4437 4.08386 12.334 4.34881 12.334 4.62508C12.334 4.90135 12.4437 5.1663 12.6391 5.36165C12.8344 5.557 13.0994 5.66675 13.3757 5.66675C13.6519 5.66675 13.9169 5.557 14.1122 5.36165C14.3076 5.1663 14.4173 4.90135 14.4173 4.62508C14.4173 4.34881 14.3076 4.08386 14.1122 3.88851C13.9169 3.69316 13.6519 3.58341 13.3757 3.58341Z" fill="#156E3E" />
                        </svg>



                      </div>
                    </div>
                    <div className="ms-[21px]">
                      <p className="text-white poppins-bold">Instagram</p>
                      <p className="text-white poppins-regular mt-2">lorem ipsum</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex justify-end">
                <div className="content-center">
                  <img
                    className="sm:w-[300px] sm:h-[300px] lg:w-[530px] lg:h-[500px] "
                    src="/images/slicing/map.png"
                    alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-slicing-foreground grid  content-center h-[100px]">
        <div className='container '>
          <div className='grid grid-cols-1 sm:grid-cols-3'>
            <div className="flex items-center justify-center sm:justify-start">
              <img src="/images/slicing/iconMountain.png" className="w-[60px] h-[23px]" alt="Flowbite Logo" />
              <p className="text-[20px] lg:text-[24px] text-white poppins-bold ms-1">lorem ipsum</p>
            </div>
            <div className="content-center">
              <p className='text-center text-[14px] lg:text-[16px] text-white poppins-regular'>© Copyright 2024 - lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
      
    </div >
  )
}

export default Home