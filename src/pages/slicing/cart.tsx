/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footer from './components/footer';
import Navbar from './components/navbar'

function Cart() {
  return (
    <div>
      <Navbar />

      <div className='bg-white  pt-[50px]'>
        <div className='container'>
          <div className=' '>
            <p className='text-[10px] md:text-[16px] lg:text-[18px] poppins-bold'>Home / <span className='text-slicing-foreground poppins-bold'>Keranjang</span></p>

          </div>

          <div className='pt-[50px]'>
            <p className='text-[14px] md:text-[20px] lg:text-[24px] poppins-bold'>Jadwal Sewa</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>

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

            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-[20px]'>
            <div>
              <div className='border rounded border-slicing-grey1'>
                <div className='p-[20px]'>
                  <div>
                    <p className='lg:text-[24px] md:text-[20px] text-[14px] poppins-bold'>Keranjang</p>

                  </div>
                  <div className='py-[10px]'>
                    <div className='grid grid-cols-5 sm:grid-cols-4 gap-5  '>
                      <div className='col-span-2 sm:col-span-1  bg-slicing-deep rounded content-center '>
                        <div className=''>
                          <div className='flex justify-center'>
                            <img src="/images/slicing/redBag.png" className='w-[100px] h-[100px]' alt="" />

                          </div>
                        </div>
                      </div>
                      <div className='col-span-3 sm:col-span-3'>
                        <div className='flex justify-between py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Carrier 60L + Rain Cover</p>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Rp 25.000</p>
                        </div>
                        <div className='flex justify-start py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[10px] poppins-bold text-slicing-grey'>Durasi: 1 hari</p>
                        </div>
                        <div className='flex justify-between py-[10px]'>
                          <div>
                            <select id="countries" className=" border rounded text-gray-900 focus:ring-slicing-foreground focus:border-slicing-foreground block w-[80px] p-2.5 ">
                              <option selected>1</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                          <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.0007 4V5.33333H5.33398V8H6.66732V25.3333C6.66732 26.0406 6.94827 26.7189 7.44837 27.219C7.94846 27.719 8.62674 28 9.33398 28H22.6673C23.3746 28 24.0528 27.719 24.5529 27.219C25.053 26.7189 25.334 26.0406 25.334 25.3333V8H26.6673V5.33333H20.0007V4H12.0007ZM12.0007 10.6667H14.6673V22.6667H12.0007V10.6667ZM17.334 10.6667H20.0007V22.6667H17.334V10.6667Z" fill="#D10D0D" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-[10px]' >
                    <hr className='border-t-2 border-slicing-grey1' />
                  </div>
                  <div className='py-[10px]'>
                    <div className='grid grid-cols-5 sm:grid-cols-4 gap-5  '>
                      <div className='col-span-2 sm:col-span-1  bg-slicing-deep rounded content-center '>
                        <div className=''>
                          <div className='flex justify-center'>
                            <img src="/images/slicing/camp.png" className='w-[100px] h-[100px]' alt="" />

                          </div>
                        </div>
                      </div>
                      <div className='col-span-3 sm:col-span-3'>
                        <div className='flex justify-between py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Tenda 4-5 Orang</p>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Rp 35.000</p>
                        </div>
                        <div className='flex justify-start py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[10px] poppins-bold text-slicing-grey'>Durasi: 1 hari</p>
                        </div>
                        <div className='flex justify-between py-[10px]'>
                          <div>
                            <select id="countries" className=" border rounded text-gray-900 focus:ring-slicing-foreground focus:border-slicing-foreground block w-[80px] p-2.5 ">
                              <option selected>1</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                          <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.0007 4V5.33333H5.33398V8H6.66732V25.3333C6.66732 26.0406 6.94827 26.7189 7.44837 27.219C7.94846 27.719 8.62674 28 9.33398 28H22.6673C23.3746 28 24.0528 27.719 24.5529 27.219C25.053 26.7189 25.334 26.0406 25.334 25.3333V8H26.6673V5.33333H20.0007V4H12.0007ZM12.0007 10.6667H14.6673V22.6667H12.0007V10.6667ZM17.334 10.6667H20.0007V22.6667H17.334V10.6667Z" fill="#D10D0D" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-[10px]' >
                    <hr className='border-t-2 border-slicing-grey1' />
                  </div>
                  <div className='py-[10px]'>
                    <div className='grid grid-cols-5 sm:grid-cols-4 gap-5  '>
                      <div className='col-span-2 sm:col-span-1  bg-slicing-deep rounded content-center '>
                        <div className=''>
                          <div className='flex justify-center'>
                            <img src="/images/slicing/Sepatu.png" className='w-[100px] h-[100px]' alt="" />

                          </div>
                        </div>
                      </div>
                      <div className='col-span-3 sm:col-span-3'>
                        <div className='flex justify-between py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Sepatu</p>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Rp 25.000</p>
                        </div>
                        <div className='flex justify-start py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[10px] poppins-bold text-slicing-grey'>Durasi: 1 hari</p>
                        </div>
                        <div className='flex justify-between py-[10px]'>
                          <div>
                            <select id="countries" className=" border rounded text-gray-900 focus:ring-slicing-foreground focus:border-slicing-foreground block w-[80px] p-2.5 ">
                              <option selected>1</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                          <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.0007 4V5.33333H5.33398V8H6.66732V25.3333C6.66732 26.0406 6.94827 26.7189 7.44837 27.219C7.94846 27.719 8.62674 28 9.33398 28H22.6673C23.3746 28 24.0528 27.719 24.5529 27.219C25.053 26.7189 25.334 26.0406 25.334 25.3333V8H26.6673V5.33333H20.0007V4H12.0007ZM12.0007 10.6667H14.6673V22.6667H12.0007V10.6667ZM17.334 10.6667H20.0007V22.6667H17.334V10.6667Z" fill="#D10D0D" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-[10px]' >
                    <hr className='border-t-2 border-slicing-grey1' />
                  </div>
                  <div className='py-[10px]'>
                    <div className='grid grid-cols-5 sm:grid-cols-4 gap-5  '>
                      <div className='col-span-2 sm:col-span-1  bg-slicing-deep rounded content-center '>
                        <div className=''>
                          <div className='flex justify-center'>
                            <img src="/images/slicing/sleepingBag.png" className='w-[100px] h-[100px]' alt="" />

                          </div>
                        </div>
                      </div>
                      <div className='col-span-3 sm:col-span-3'>
                        <div className='flex justify-between py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Sleeping Bag</p>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Rp 10.000</p>
                        </div>
                        <div className='flex justify-start py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[10px] poppins-bold text-slicing-grey'>Durasi: 1 hari</p>
                        </div>
                        <div className='flex justify-between py-[10px]'>
                          <div>
                            <select id="countries" className=" border rounded text-gray-900 focus:ring-slicing-foreground focus:border-slicing-foreground block w-[80px] p-2.5 ">
                              <option selected>1</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                          <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.0007 4V5.33333H5.33398V8H6.66732V25.3333C6.66732 26.0406 6.94827 26.7189 7.44837 27.219C7.94846 27.719 8.62674 28 9.33398 28H22.6673C23.3746 28 24.0528 27.719 24.5529 27.219C25.053 26.7189 25.334 26.0406 25.334 25.3333V8H26.6673V5.33333H20.0007V4H12.0007ZM12.0007 10.6667H14.6673V22.6667H12.0007V10.6667ZM17.334 10.6667H20.0007V22.6667H17.334V10.6667Z" fill="#D10D0D" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-[10px]' >
                    <hr className='border-t-2 border-slicing-grey1' />
                  </div>
                  <div className='py-[10px]'>
                    <div className='grid grid-cols-5 sm:grid-cols-4 gap-5  '>
                      <div className='col-span-2 sm:col-span-1  bg-slicing-deep rounded content-center '>
                        <div className=''>
                          <div className='flex justify-center'>
                            <img src="/images/slicing/kompor.png" className='w-[100px] h-[100px]' alt="" />

                          </div>
                        </div>
                      </div>
                      <div className='col-span-3 sm:col-span-3'>
                        <div className='flex justify-between py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Kompor</p>
                          <p className='lg:text-[18px] md:text-[16px] text-[12px] poppins-bold'>Rp 10.000</p>
                        </div>
                        <div className='flex justify-start py-[10px]'>
                          <p className='lg:text-[18px] md:text-[16px] text-[10px] poppins-bold text-slicing-grey'>Durasi: 1 hari</p>
                        </div>
                        <div className='flex justify-between py-[10px]'>
                          <div>
                            <select id="countries" className=" border rounded text-gray-900 focus:ring-slicing-foreground focus:border-slicing-foreground block w-[80px] p-2.5 ">
                              <option selected>1</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                          <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.0007 4V5.33333H5.33398V8H6.66732V25.3333C6.66732 26.0406 6.94827 26.7189 7.44837 27.219C7.94846 27.719 8.62674 28 9.33398 28H22.6673C23.3746 28 24.0528 27.719 24.5529 27.219C25.053 26.7189 25.334 26.0406 25.334 25.3333V8H26.6673V5.33333H20.0007V4H12.0007ZM12.0007 10.6667H14.6673V22.6667H12.0007V10.6667ZM17.334 10.6667H20.0007V22.6667H17.334V10.6667Z" fill="#D10D0D" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='py-[10px]' >
                    <hr className='border-t-2 border-slicing-grey1' />
                  </div>


                </div>
              </div>
            </div>
            <div>
              <div className='border border-slicing-grey1 rounded-t'>
                <div className='flex justify-center bg-slicing-foreground rounded-t'>
                  <p className='lg:text-[18px] md:text-[16px] text-[14px] text-white poppins-bold py-[10px]'>Rincian</p>
                </div>
                <div className='px-[20px]'>
                  <div className='flex justify-between py-[10px]'>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Carrier 60L + Rain Cover</p>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Rp 25.000</p>
                  </div>
                  <div className='flex justify-between py-[10px]'>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Tenda 4-5 Orang</p>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Rp 35.000</p>
                  </div>
                  <div className='flex justify-between py-[10px]'>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Sepatu</p>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Rp 25.000</p>
                  </div>
                  <div className='flex justify-between py-[10px]'>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Sleeping Bag</p>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Rp 10.000</p>
                  </div>
                  <div className='flex justify-between py-[10px]'>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Kompor Windproof</p>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Rp 10.000</p>
                  </div>
                </div>
                <div className='px-[20px] '>
                  <hr className='border-t-2 border-slicing-grey1' />
                </div>
                <div className='px-[20px]'>
                  <div className='flex justify-between py-[10px]'>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Subtotal </p>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Rp 90.000</p>
                  </div>
                  <div className='flex justify-between py-[10px]'>
                    <p className='text-slicing-grey poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Ongkos Kirim</p>
                    <p className='poppins-bold lg:text-[18px] md:text-[16px] text-[12px] text-slicing-foreground'>Gratis</p>
                  </div>
                  <div className='flex justify-between py-[10px]'>
                    <p className='poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Total</p>
                    <p className='poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Rp 90.000</p>
                  </div>
                </div>
                <div className='px-[20px] '>
                  <hr className='border-t-2 border-slicing-grey1' />
                </div>
                <div className='px-[20px] '>
                  <div className='flex justify-start py-[10px]'>
                    <p className='poppins-bold lg:text-[18px] md:text-[16px] text-[12px]'>Pilih metode pembayaran</p>
                  </div>
                  <div className=''>
                    <div className='grid grid-cols-3 sm:grid-cols-4 gap-3'>
                      <div className=''>
                        <div className=''>
                          <svg className="w-[80px] h-[35px] sm:w-[110px] sm:h-[45px] " viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="117.24" height="46.003" rx="5" stroke="#EAEAEA" stroke-width="2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12H107.24V36.003H12V12Z" fill="white" fill-opacity="0.01" />
                            <path d="M22.2965 34.2885C27.9831 34.2885 32.5931 29.6829 32.5931 24.0016C32.5931 18.3204 27.9831 13.7148 22.2965 13.7148C16.6099 13.7148 12 18.3204 12 24.0016C12 29.6829 16.6099 34.2885 22.2965 34.2885Z" fill="#00AED6" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2965 23.6823C28.2624 23.0566 27.9811 22.4694 27.5136 22.0481C27.0461 21.6268 26.43 21.4055 25.7991 21.4321H19.2955C19.239 21.4319 19.183 21.4206 19.1308 21.3989C19.0786 21.3773 19.0312 21.3456 18.9913 21.3058C18.9515 21.2659 18.9199 21.2187 18.8984 21.1667C18.8769 21.1148 18.866 21.0592 18.8662 21.003C18.8662 20.766 19.0582 20.574 19.2955 20.574H25.8853C25.8688 20.1418 25.7146 19.7259 25.4449 19.3862C25.1751 19.0466 24.8037 18.8006 24.3841 18.6837C22.4641 18.345 20.499 18.345 18.579 18.6837C18.0441 18.8166 17.5619 19.106 17.1947 19.5142C16.8276 19.9224 16.5925 20.4306 16.52 20.973C16.2154 22.992 16.2154 25.0448 16.52 27.0638C16.6316 27.6362 16.9157 28.1615 17.3346 28.5702C17.7535 28.979 18.2876 29.2519 18.8662 29.3531C21.2495 29.6489 23.6607 29.6489 26.044 29.3531C26.5623 29.2458 27.0335 28.9795 27.3908 28.5918C27.7481 28.2041 27.9735 27.7146 28.035 27.1928C28.2466 26.0346 28.3358 24.8585 28.2965 23.6823ZM26.1604 25.1225V25.5036C26.1606 25.5597 26.1496 25.6154 26.1282 25.6673C26.1067 25.7193 26.0751 25.7665 26.0353 25.8063C25.9954 25.8462 25.948 25.8778 25.8958 25.8995C25.8436 25.9212 25.7876 25.9324 25.7311 25.9326C25.6745 25.9324 25.6185 25.9212 25.5663 25.8995C25.5141 25.8778 25.4667 25.8462 25.4268 25.8063C25.387 25.7665 25.3554 25.7193 25.3339 25.6673C25.3125 25.6154 25.3015 25.5597 25.3017 25.5036V25.1225C25.2039 25.0362 25.1349 24.9224 25.1038 24.7962C25.0727 24.67 25.081 24.5375 25.1275 24.4161C25.1741 24.2947 25.2568 24.1902 25.3646 24.1165C25.4723 24.0428 25.6002 24.0033 25.7311 24.0034C25.862 24.0033 25.9898 24.0428 26.0976 24.1165C26.2053 24.1902 26.288 24.2947 26.3346 24.4161C26.3811 24.5375 26.3894 24.67 26.3583 24.7962C26.3272 24.9224 26.2582 25.0362 26.1604 25.1225Z" fill="white" />
                            <path d="M40.6326 29.117C41.0604 29.7286 41.638 30.222 42.3112 30.5507C42.9843 30.8793 43.7308 31.0323 44.48 30.9953C46.2745 30.9953 47.5927 29.8506 47.5927 28.2949V27.4743H47.5489C46.5663 28.4344 45.2253 28.9355 43.8542 28.8575C42.7878 28.8867 41.733 28.6322 40.7992 28.1204C39.8653 27.6086 39.0865 26.8583 38.5434 25.9471C37.9966 25.0333 37.7034 23.9922 37.6936 22.9295C37.6838 21.8668 37.9577 20.8205 38.4875 19.8969C39.0143 18.9764 39.7796 18.2126 40.7041 17.6845C41.6286 17.1564 42.6787 16.8833 43.7453 16.8935C44.4376 16.8495 45.1316 16.9454 45.7854 17.1754C46.4392 17.4054 47.0392 17.7648 47.5489 18.2317H47.5927V17.1095H50.6616V28.2529C50.6616 31.4918 48.0916 33.7376 44.48 33.7376C43.3127 33.8002 42.1472 33.5859 41.0799 33.1127C40.0126 32.6395 39.0742 31.9209 38.3423 31.0163L40.6326 29.117ZM47.4642 22.1832C47.4642 20.8885 45.9933 19.7003 44.3515 19.7003C42.2759 19.7003 40.8927 20.953 40.8927 22.8312C40.8322 23.7224 41.1648 24.594 41.8073 25.2135C42.1234 25.5198 42.5036 25.7534 42.9207 25.8978C43.3379 26.0422 43.782 26.0939 44.2215 26.0491C46.016 26.0491 47.4642 24.927 47.4642 23.5228V22.1832ZM58.7419 16.7855C62.482 16.7855 65.2061 19.4408 65.2061 22.8312C65.2061 26.2217 62.482 28.8785 58.7419 28.8785C57.6327 28.9497 56.5251 28.7165 55.5406 28.2044C54.5561 27.6924 53.7327 26.9213 53.1605 25.9756C52.5848 25.0266 52.2806 23.9398 52.2806 22.832C52.2806 21.7242 52.5848 20.6374 53.1605 19.6883C53.7327 18.7427 54.5561 17.9716 55.5406 17.4596C56.5251 16.9475 57.6327 16.7143 58.7419 16.7855ZM58.7419 19.5908C57.8801 19.5995 57.057 19.9472 56.4533 20.5576C55.8496 21.1679 55.5146 21.991 55.5219 22.8462C55.5227 23.7014 55.8654 24.5214 56.4747 25.1261C57.0841 25.7308 57.9103 26.0709 58.7721 26.0716C59.6339 26.0669 60.4586 25.723 61.0651 25.1155C61.6716 24.508 62.0105 23.6864 62.0073 22.8312C62.0273 22.399 61.9563 21.9674 61.7988 21.5639C61.6414 21.1605 61.4008 20.794 61.0927 20.4879C60.7861 20.1833 60.4183 19.9462 60.0133 19.7919C59.6083 19.6376 59.1751 19.5681 58.7419 19.5908ZM66.866 17.1095H69.9349V18.1236H69.9802C70.4755 17.668 71.0573 17.3149 71.6917 17.0852C72.3262 16.8554 73.0004 16.7535 73.675 16.7855C76.9706 16.8455 79.6131 19.5278 79.6192 22.8207C79.6252 26.1152 76.9917 28.8065 73.6961 28.8785C72.396 28.9085 71.1261 28.481 70.1087 27.6694H70.0649V33.4136H66.866V17.1095ZM73.1791 19.6148C71.492 19.6148 70.0649 20.8015 70.0649 22.0976V23.5438C70.0649 24.927 71.4497 26.0701 73.1988 26.0701C74.0585 26.0646 74.8809 25.7204 75.485 25.1133C76.0891 24.5063 76.4255 23.6859 76.4203 22.8327C76.4205 22.4102 76.3368 21.9917 76.174 21.6012C76.0113 21.2107 75.7726 20.8558 75.4716 20.5569C75.1706 20.2579 74.8133 20.0207 74.4199 19.8589C74.0266 19.697 73.6049 19.6135 73.1791 19.6133V19.6148ZM85.7826 21.7301C87.8794 21.4496 88.5067 21.148 88.5067 20.5644C88.5067 19.8084 87.7055 19.3553 86.4749 19.3553C85.8308 19.3025 85.1889 19.4803 84.6654 19.8565C84.1419 20.2326 83.7713 20.7823 83.6208 21.4061L80.5942 20.7805C81.0266 18.4477 83.4273 16.7855 86.3873 16.7855C89.7373 16.7855 91.8144 18.4912 91.8144 21.2755V28.5545H88.9376V27.3018H88.8922C88.4132 27.8424 87.8149 28.2659 87.1439 28.5394C86.4729 28.8129 85.7473 28.9289 85.0237 28.8785C82.4945 28.8785 80.7454 27.4968 80.7454 25.4656C80.7454 23.3278 82.1725 22.2267 85.7826 21.7301ZM88.7652 22.9393H88.7229C88.4402 23.3503 87.8355 23.5873 86.2799 23.8694C84.3993 24.2144 83.7296 24.5805 83.7296 25.2495C83.7296 25.9411 84.292 26.2442 85.5014 26.2442C87.3397 26.2442 88.7668 25.4011 88.7668 24.2999L88.7652 22.9393ZM97.9023 27.9289L92.6066 17.1095H96.1305L99.6105 24.5805H99.6529L103.091 17.1095H106.636L98.7035 33.4166H95.1796L97.9023 27.9289Z" fill="black" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className=''>
                          <svg className=" w-[80px] h-[35px] sm:w-[110px] sm:h-[45px] " viewBox="0 0 102 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.41748" y="1" width="98.971" height="46.0015" rx="5" stroke="#EAEAEA" stroke-width="2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.6164 32.2415C31.2454 34.4953 28.0875 35.7334 24.8164 35.6915C21.5291 35.7411 18.3528 34.5029 15.9664 32.2415C14.8436 31.1527 13.9509 29.8494 13.3412 28.4091C12.7316 26.9687 12.4175 25.4206 12.4175 23.8565C12.4175 22.2925 12.7316 20.7443 13.3412 19.304C13.9509 17.8636 14.8436 16.5603 15.9664 15.4715C18.3498 13.1967 21.5321 11.9503 24.8264 12.0015C28.0975 11.9597 31.2554 13.1977 33.6264 15.4515C34.7505 16.5396 35.6443 17.8426 36.2547 19.2831C36.8652 20.7236 37.1797 22.2721 37.1797 23.8365C37.1797 25.401 36.8652 26.9495 36.2547 28.3899C35.6443 29.8304 34.7505 31.1334 33.6264 32.2215M24.8264 15.8615C23.7823 15.8514 22.747 16.053 21.7829 16.454C20.8188 16.855 19.9459 17.4472 19.217 18.1948C18.4881 18.9425 17.9182 19.83 17.5417 20.8039C17.1652 21.7779 16.9899 22.818 17.0264 23.8615C17.0264 24.8832 17.2277 25.8949 17.6186 26.8388C18.0096 27.7827 18.5827 28.6404 19.3051 29.3628C20.0276 30.0852 20.8852 30.6583 21.8291 31.0493C22.7731 31.4403 23.7847 31.6415 24.8064 31.6415C25.8281 31.6415 26.8398 31.4403 27.7837 31.0493C28.7276 30.6583 29.5853 30.0852 30.3077 29.3628C31.0301 28.6404 31.6032 27.7827 31.9942 26.8388C32.3852 25.8949 32.5864 24.8832 32.5864 23.8615C32.6228 22.8214 32.4487 21.7846 32.0747 20.8134C31.7006 19.8421 31.1343 18.9564 30.4097 18.2094C29.685 17.4623 28.817 16.8693 27.8576 16.4658C26.8982 16.0624 25.8672 15.8568 24.8264 15.8615ZM62.8264 14.7915L53.3164 36.0015L52.7764 35.9015C50.0564 35.4115 49.5064 34.7315 48.2364 31.9715L41.1064 16.4415H38.4264V12.6715H48.5564V16.4415H46.1364L51.8664 29.2915L57.4264 16.4415H54.4264V12.6715H62.8264V14.7915ZM85.8264 32.2415C83.4248 34.4595 80.2756 35.6912 77.0064 35.6912C73.7372 35.6912 70.5881 34.4595 68.1864 32.2415C67.0636 31.1527 66.1709 29.8494 65.5612 28.4091C64.9516 26.9687 64.6375 25.4206 64.6375 23.8565C64.6375 22.2925 64.9516 20.7443 65.5612 19.304C66.1709 17.8636 67.0636 16.5603 68.1864 15.4715C70.5881 13.2535 73.7372 12.0218 77.0064 12.0218C80.2756 12.0218 83.4248 13.2535 85.8264 15.4715C86.953 16.5582 87.8491 17.8607 88.4611 19.3014C89.0731 20.742 89.3885 22.2913 89.3885 23.8565C89.3885 25.4218 89.0731 26.971 88.4611 28.4116C87.8491 29.8523 86.953 31.1548 85.8264 32.2415ZM77.0764 15.8615C76.0319 15.8515 74.9961 16.053 74.0315 16.4539C73.0669 16.8548 72.1934 17.4468 71.4637 18.1943C70.7339 18.9418 70.1631 19.8292 69.7855 20.8032C69.4078 21.7772 69.2313 22.8175 69.2664 23.8615C69.2664 24.8832 69.4677 25.8949 69.8586 26.8388C70.2496 27.7827 70.8227 28.6404 71.5451 29.3628C72.2676 30.0852 73.1252 30.6583 74.0691 31.0493C75.0131 31.4403 76.0247 31.6415 77.0464 31.6415C78.0681 31.6415 79.0798 31.4403 80.0237 31.0493C80.9676 30.6583 81.8253 30.0852 82.5477 29.3628C83.2701 28.6404 83.8432 27.7827 84.2342 26.8388C84.6252 25.8949 84.8264 24.8832 84.8264 23.8615C84.8642 22.8219 84.6914 21.7853 84.3185 20.8141C83.9455 19.8429 83.3802 18.9571 82.6563 18.2099C81.9324 17.4627 81.065 16.8695 80.1062 16.4659C79.1473 16.0624 78.1167 15.8568 77.0764 15.8615Z" fill="#4B2489" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className=''>
                          <svg className=" w-[80px] h-[35px] sm:w-[110px] sm:h-[45px] " viewBox="0 0 107 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.56543" y="1" width="103.943" height="46" rx="5" stroke="#EAEAEA" stroke-width="2" />
                            <path d="M23.8297 35.9894C22.0097 35.9212 20.1927 35.4022 18.5973 34.495C17.1012 33.6443 15.7724 32.4369 14.7779 31.0245C13.5112 29.2256 12.8001 27.2542 12.592 24.9641C12.5566 24.575 12.5566 23.4276 12.5919 23.0365C12.742 21.3764 13.1155 20.0188 13.8097 18.6099C14.1923 17.8335 14.5701 17.2229 15.058 16.5927C16.5331 14.6872 18.3723 13.3704 20.6613 12.581C21.1828 12.4011 21.9424 12.2192 22.569 12.1241C23.6542 11.9594 24.9272 11.9586 25.9934 12.1218C27.4652 12.3471 28.8175 12.8207 30.0886 13.5562C33.0405 15.264 35.1558 18.2599 35.8092 21.6581C36.045 22.8844 36.0906 24.1708 35.9443 25.4684C35.8543 26.2668 35.6445 27.1828 35.3668 27.9898C34.4266 30.722 32.5201 33.0405 30.0402 34.4676C28.4939 35.3575 26.5886 35.9187 24.9008 35.9814C24.7412 35.9873 24.5304 35.9951 24.4322 35.9987C24.334 36.0023 24.0629 35.9981 23.8297 35.9894ZM21.2661 28.642C22.0002 28.5279 22.4679 28.3973 23.8297 27.9263C24.1856 27.8033 24.7562 27.606 25.0976 27.4881C26.418 27.0318 27.186 26.8608 28.0469 26.8316C29.0556 26.7973 29.9836 27.0328 30.7795 27.525C30.8809 27.5878 30.9524 27.616 31.0141 27.6176C31.0981 27.6199 31.1044 27.6153 31.1316 27.5332C31.1546 27.4635 31.1592 26.7606 31.1544 23.9807L31.1485 20.515L31.0994 20.4093C31.0336 20.2677 30.8964 20.1222 30.7165 20.0032C30.1905 19.6555 29.6181 19.4254 28.9953 19.3116C28.6822 19.2544 27.9238 19.2421 27.6007 19.2891C26.7821 19.408 25.9636 19.6722 23.6624 20.5606C22.8787 20.8631 22.2941 21.0567 21.7992 21.1775C20.2759 21.5493 19.0784 21.3816 17.8833 20.629C17.6202 20.4633 17.5492 20.4477 17.4877 20.5421C17.4503 20.5993 17.4478 20.7932 17.4416 24.0329C17.4343 27.823 17.4279 27.6404 17.5733 27.8176C17.6096 27.8619 17.7237 27.9493 17.8268 28.0118C18.4091 28.3651 19.1187 28.608 19.791 28.684C20.0905 28.7179 20.9325 28.6939 21.2661 28.642ZM40.475 30.0696C40.4689 30.0537 40.4666 27.3275 40.4697 24.0115L40.4754 17.9823H42.8295C45.3763 17.9823 45.3929 17.983 45.9757 18.1091C47.993 18.5456 49.6748 20.0665 50.3461 22.0615C50.7529 23.2705 50.7694 24.6289 50.3921 25.863C50.0248 27.0647 49.2486 28.1716 48.2474 28.9217C47.5869 29.4166 46.822 29.7702 46.0179 29.9525C45.4272 30.0865 45.5249 30.0821 42.9017 30.0907C40.9423 30.0971 40.4838 30.0931 40.475 30.0696ZM44.86 27.4743C45.5625 27.4386 46.0272 27.289 46.5893 26.9177C46.8849 26.7224 47.3202 26.2882 47.5132 25.9961C48.328 24.7633 48.3115 23.2135 47.4708 22.0167C47.3012 21.7753 46.9449 21.4107 46.7075 21.2356C46.3767 20.9916 45.914 20.7761 45.5187 20.6821C45.1909 20.6041 45.0279 20.5944 44.026 20.593L43.0307 20.5917L43.0249 24.032L43.0192 27.4723L43.0973 27.4808C43.2628 27.4987 44.467 27.4943 44.86 27.4743ZM55.0851 26.4043C55.0924 22.7621 55.0932 22.7075 55.14 22.4197C55.3041 21.411 55.6691 20.5819 56.2745 19.8426C57.2964 18.5947 58.7748 17.9196 60.3566 17.9785C61.1103 18.0066 61.7427 18.1663 62.4094 18.4971C63.7659 19.17 64.7723 20.4483 65.1285 21.9509C65.2706 22.5502 65.2628 22.3061 65.2707 26.3817L65.2779 30.0967H64.0054H62.7329V28.7967V27.4968H60.1894H57.6459L57.6401 28.7911L57.6343 30.0855L56.356 30.0913L55.0777 30.097L55.0851 26.4043ZM62.7211 23.8882C62.7204 22.8064 62.7137 22.7303 62.5847 22.3417C62.2882 21.4479 61.4945 20.7626 60.5857 20.6154C60.3311 20.5742 59.7825 20.5979 59.5533 20.66C58.7309 20.8829 58.0686 21.5054 57.7825 22.3242C57.6566 22.6845 57.6457 22.8107 57.6456 23.9051V24.897L60.1837 24.8913L62.7218 24.8856L62.7211 23.8882ZM69.7105 26.5274C69.7136 24.183 69.7236 22.8619 69.7395 22.6779C69.8307 21.6249 70.2758 20.5688 70.9726 19.7519C72.1594 18.3605 73.9787 17.7179 75.7559 18.0624C77.738 18.4467 79.3214 20.0069 79.7683 22.016C79.9057 22.6342 79.8995 22.4365 79.9081 26.4377L79.916 30.0967H78.6321H77.3481L77.3479 26.5498C77.3479 23.5856 77.3425 22.9679 77.3158 22.7899C77.2451 22.3194 77.0496 21.8743 76.7595 21.5236C76.3733 21.057 75.8722 20.7526 75.2837 20.6274C75.0767 20.5834 74.5723 20.5834 74.3413 20.6274C73.2671 20.832 72.4194 21.7468 72.2853 22.846C72.2683 22.9852 72.2607 24.1405 72.2606 26.5722V30.0967L70.9832 30.0967L69.7058 30.0967L69.7105 26.5274ZM84.3099 26.6271C84.3099 24.4494 84.3184 23.0453 84.3329 22.8561C84.3954 22.0385 84.5995 21.3166 84.9504 20.6719C85.6163 19.4484 86.7076 18.5537 87.9915 18.1785C88.4459 18.0457 88.7571 17.9954 89.2299 17.9782C90.6412 17.9269 91.9699 18.4527 92.9782 19.4615C93.6426 20.1262 94.1473 21.0316 94.3601 21.9404C94.5022 22.5473 94.4937 22.2795 94.5013 26.3705L94.5083 30.0967H93.2358H91.9633V28.7967V27.4968H89.4196H86.8759V28.7967V30.0967H85.5929H84.3099L84.3099 26.6271ZM91.9588 24.0115C91.9657 23.0931 91.9512 22.8467 91.8712 22.5225C91.6945 21.8069 91.1678 21.1588 90.5018 20.8375C89.5442 20.3755 88.4075 20.5646 87.6574 21.3107C87.3512 21.6154 87.1369 21.9597 87.0012 22.3653C86.8875 22.7052 86.8759 22.849 86.8759 23.9137V24.897L89.414 24.8913L91.9522 24.8856L91.9588 24.0115Z" fill="#0066FF" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className=''>
                          <svg className=" w-[80px] h-[35px] sm:w-[110px] sm:h-[45px] " viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.68555" y="1" width="85.3144" height="45.9996" rx="5" stroke="#156E3E" stroke-width="2" />
                            <path d="M33.4355 15.9181L49.7634 15.9181L49.7634 25.7142L42.9135 25.7142L49.7635 31.9834L43.9444 31.9834L37.2267 25.7142L37.2267 31.9834L33.4355 31.9834L33.4355 22.0248L45.4071 22.0248L45.4071 19.641L33.4355 19.641L33.4355 15.9181Z" fill="black" />
                            <path d="M51.459 31.9834L55.4495 31.9834L55.4494 15.8855L51.459 15.8855L51.459 31.9834Z" fill="black" />
                            <path d="M19.5024 28.0977L19.5024 15.9181L16.3765 15.9181C15.8113 15.9181 15.3789 16.3429 15.3789 16.8647C15.3789 19.7391 15.3457 28.1958 15.3457 31.0038C15.3457 31.5263 15.7781 31.9834 16.3101 31.9834C18.4716 31.9834 24.6898 31.9834 25.5873 31.9834L25.5873 28.0977L19.5024 28.0977Z" fill="black" />
                            <path d="M27.6494 35.9995C28.0157 35.9995 30.8087 35.9995 31.7402 35.9995C31.7402 35.9995 31.7402 28.0649 31.7402 27.9343C30.4097 27.9343 29.0138 27.9343 27.6494 27.9343C27.6494 30.6118 27.6494 33.2893 27.6494 35.9995Z" fill="black" />
                            <path d="M21.4975 15.9177C21.4975 15.9835 21.4975 19.9338 21.4975 19.9338C23.3266 19.9338 25.6539 19.9338 27.649 19.9338C27.649 22.7101 27.649 25.9424 27.649 25.9424C28.5804 25.9424 31.3735 25.9424 31.7398 25.9424L31.7398 16.8978C31.7398 16.3749 31.3068 15.95 30.7756 15.9177C28.7805 15.9177 24.0579 15.9177 21.4975 15.9177Z" fill="black" />
                            <path d="M21.4976 21.8927C21.4976 23.2318 21.4976 24.5709 21.4976 25.9746C21.8301 25.9746 22.1959 25.9746 22.5284 25.9746C23.46 25.9746 24.6231 25.9746 25.5545 25.9746C25.5545 25.9746 25.5545 21.9585 25.5545 21.8927C24.2241 21.8927 22.861 21.8927 21.4976 21.8927ZM24.3575 24.7336C23.9584 24.7336 23.4927 24.7336 23.1265 24.7336C22.994 24.7336 22.861 24.7336 22.6947 24.7336C22.6947 24.1784 22.6947 23.6566 22.6947 23.1014C23.2599 23.1014 23.7923 23.1014 24.3575 23.1014C24.3575 23.1337 24.3575 24.7336 24.3575 24.7336Z" fill="black" />
                            <path d="M75.0354 27.9341L75.0354 33.9422C75.0354 34.4646 74.5697 34.8892 74.0385 34.8892L67.9199 34.8892L67.9199 35.8687L75.0354 35.8687L75.0694 35.8687C75.5679 35.8687 75.9996 35.4442 75.9996 34.9217L75.9996 34.8892L75.9996 27.9341L75.0354 27.9341Z" fill="black" />
                            <path d="M13.6832 19.9018L13.6832 13.8932C13.6832 13.3714 14.0822 12.9789 14.6142 12.9789L20.7329 12.9789C20.7662 12.9789 20.7662 12.9466 20.7662 12.9466L20.7662 12.0323C20.7662 12.0323 20.7662 12 20.7329 12L13.6832 12C13.1179 12 12.6855 12.4248 12.6855 12.9789L12.6855 19.9018C12.6855 19.9341 12.7188 19.9341 12.7188 19.9341L13.65 19.9341C13.65 19.9341 13.6832 19.9341 13.6832 19.9018Z" fill="black" />
                            <path d="M73.306 19.9018L73.306 15.918L57.1782 15.918L57.1782 21.8931L57.1782 25.9103L67.9199 25.9103L67.92 27.9018L57.1782 27.9018L57.1782 31.918L73.306 31.918L73.306 21.9266L62.5655 21.9266L62.5654 19.9018L73.306 19.9018Z" fill="black" />
                          </svg>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                <div className='px-[20px] '>
                  <div className='flex justify-center py-[20px] px-[50px]'>

                    <button type="button" className=" px-5 py-2.5  text-white inline-flex items-center justify-center bg-slicing-foreground rounded poppins-bold text-[12px] md:text-[14px] lg:text-[18px]
                    w-[300px]">
                      <svg width="25" height="16" className='me-[5px]' viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 0.803223H1.7C1.03738 0.803223 0.5 1.3406 0.5 2.00322V14.0032C0.5 14.6658 1.03738 15.2032 1.7 15.2032H23.3C23.9626 15.2032 24.5 14.6658 24.5 14.0032V2.00322C24.5 1.3406 23.9626 0.803223 23.3 0.803223ZM2.3 13.4032V11.0032C3.62563 11.0032 4.7 12.0776 4.7 13.4032H2.3ZM2.3 5.00322V2.60322H4.7C4.7 3.92885 3.62563 5.00322 2.3 5.00322ZM12.5 11.6032C10.8429 11.6032 9.5 9.9911 9.5 8.00322C9.5 6.01497 10.8433 4.40322 12.5 4.40322C14.1568 4.40322 15.5 6.01497 15.5 8.00322C15.5 9.99185 14.1564 11.6032 12.5 11.6032ZM22.7 13.4032H20.3C20.3 12.0776 21.3744 11.0032 22.7 11.0032V13.4032ZM22.7 5.00322C21.3744 5.00322 20.3 3.92885 20.3 2.60322H22.7V5.00322Z" fill="white" />
                      </svg>



                      Bayar
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>

      <Footer />
    </div >
  )
}

export default Cart