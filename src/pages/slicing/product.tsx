/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'

function Product() {
  return (
    <div>
      <Navbar />

      <div className='bg-white  pt-[50px]'>
        <div className='container'>
          <div className=' '>
            <p className='text-[10px] md:text-[16px] lg:text-[18px] poppins-bold'>Home / <span className='text-slicing-foreground poppins-bold'>Sewa Alat</span></p>

          </div>

          <div className='pt-[50px]'>
            <p className='text-[14px] md:text-[20px] lg:text-[24px] poppins-bold'>Tentukan Jadwal</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>

              <div id="date-range-picker" date-rangepicker className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input id="datepicker-range-start" name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-slicing-foreground focus:border-slicing-foreground block w-full ps-10 p-2.5  " placeholder="Tanggal Sewa" />
                </div>
                <span className="mx-4 text-gray-500">
                  <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9355 0.668654C13.2355 0.3687 13.6424 0.200195 14.0667 0.200195C14.4909 0.200195 14.8978 0.3687 15.1979 0.668654L22.3979 7.86865C22.6978 8.1687 22.8663 8.57559 22.8663 8.99986C22.8663 9.42412 22.6978 9.83101 22.3979 10.1311L15.1979 17.3311C14.8961 17.6225 14.4919 17.7838 14.0724 17.7801C13.6529 17.7765 13.2516 17.6082 12.955 17.3116C12.6583 17.0149 12.49 16.6136 12.4864 16.1941C12.4828 15.7746 12.644 15.3704 12.9355 15.0687L17.2667 10.5999H2.06667C1.64233 10.5999 1.23536 10.4313 0.935304 10.1312C0.635246 9.83117 0.466675 9.4242 0.466675 8.99986C0.466675 8.57551 0.635246 8.16854 0.935304 7.86848C1.23536 7.56843 1.64233 7.39985 2.06667 7.39985H17.2667L12.9355 2.93105C12.6355 2.63101 12.467 2.22412 12.467 1.79985C12.467 1.37559 12.6355 0.968698 12.9355 0.668654Z" fill="#156E3E" />
                  </svg>

                </span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input id="datepicker-range-end" name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-slicing-foreground focus:border-slicing-foreground  block w-full ps-10 p-2.5 " placeholder="Tanggal Kembali" />
                </div>
              </div>

              <div className='ms-[5px] grid content-center'>
                <div>
                  <button type="button" className="px-3 py-2 inline-flex items-center text-white bg-slicing-foreground rounded">

                    Terapkan
                    <svg width="24" height="24" className='ms-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5005 13.9995H14.7105L14.4305 13.7295C15.0554 13.0035 15.5122 12.1483 15.768 11.2251C16.0239 10.3019 16.0725 9.33364 15.9105 8.38949C15.4405 5.60949 13.1205 3.38949 10.3205 3.04949C9.33608 2.92495 8.33625 3.02726 7.39749 3.34858C6.45872 3.66989 5.60591 4.20171 4.90429 4.90332C4.20268 5.60493 3.67087 6.45775 3.34955 7.39651C3.02823 8.33527 2.92593 9.3351 3.05046 10.3195C3.39046 13.1195 5.61046 15.4395 8.39046 15.9095C9.33462 16.0715 10.3029 16.0229 11.2261 15.767C12.1492 15.5112 13.0044 15.0544 13.7305 14.4295L14.0005 14.7095V15.4995L18.2505 19.7495C18.6605 20.1595 19.3305 20.1595 19.7405 19.7495C20.1505 19.3395 20.1505 18.6695 19.7405 18.2595L15.5005 13.9995ZM9.50046 13.9995C7.01046 13.9995 5.00046 11.9895 5.00046 9.49949C5.00046 7.00949 7.01046 4.99949 9.50046 4.99949C11.9905 4.99949 14.0005 7.00949 14.0005 9.49949C14.0005 11.9895 11.9905 13.9995 9.50046 13.9995Z" fill="white" />
                    </svg>



                  </button>

                </div>


              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5005 13.9995H14.7105L14.4305 13.7295C15.0554 13.0035 15.5122 12.1483 15.768 11.2251C16.0239 10.3019 16.0725 9.33364 15.9105 8.38949C15.4405 5.60949 13.1205 3.38949 10.3205 3.04949C9.33608 2.92495 8.33625 3.02726 7.39749 3.34858C6.45872 3.66989 5.60591 4.20171 4.90429 4.90332C4.20268 5.60493 3.67087 6.45775 3.34955 7.39651C3.02823 8.33527 2.92593 9.3351 3.05046 10.3195C3.39046 13.1195 5.61046 15.4395 8.39046 15.9095C9.33462 16.0715 10.3029 16.0229 11.2261 15.767C12.1492 15.5112 13.0044 15.0544 13.7305 14.4295L14.0005 14.7095V15.4995L18.2505 19.7495C18.6605 20.1595 19.3305 20.1595 19.7405 19.7495C20.1505 19.3395 20.1505 18.6695 19.7405 18.2595L15.5005 13.9995ZM9.50046 13.9995C7.01046 13.9995 5.00046 11.9895 5.00046 9.49949C5.00046 7.00949 7.01046 4.99949 9.50046 4.99949C11.9905 4.99949 14.0005 7.00949 14.0005 9.49949C14.0005 11.9895 11.9905 13.9995 9.50046 13.9995Z" fill="black" />
                    </svg>

                  </div>
                  <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-slicing-foreground focus:border-slicing-foreground block w-full p-2.5 " placeholder="Cari Alat"
                    // onFocus={handlePasswordFocus}
                    // onBlur={handlePasswordBlur}
                    required />
                </div>
              </div>


            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[20px]'>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-md rounded    ">
                <img className=" bg-slicing-deep rounded-t" src="/images/slicing/sleepingBag.png" alt="" />
                <div className="p-5">
                  <p className='text-[12px] lg:text-[14px]  xl:text-[20px] poppins-bold truncate'>Carrier 60L + Rain Cover</p>
                  <p className="text-[12px] lg:text-[12px]  xl:text-[18px] text-slicing-grey poppins-regular mt-2">Rp. 10.000 <span className='text-end'> / hari</span></p>
                  <div className='flex justify-center mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#156E3E" />
                    </svg>
                    <p className="ms-3 text-[10px] lg:text-[12px]  xl:text-[18px]  text-slicing-foreground poppins-bold">

                      Masukan Keranjang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Product