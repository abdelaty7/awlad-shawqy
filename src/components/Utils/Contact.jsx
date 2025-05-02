import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='bg-gray-200 scroll-mt-26 sm:scroll-mt-16' id='contact'>
      {/* عنوان القسم */}
      <div className='flex justify-center items-center gap-7 sm:gap-15 pt-16 pb-10 sm:pb-12'>
      <div className='flex items-center flex-1'>
        <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
        <div className='h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-amber-400 ml-2'></div>
      </div>
      <p className='text-[18.5px] sm:text-[22px] font-extrabold text-indigo-950 whitespace-nowrap'>
        فروعنا
      </p>
      <div className='flex items-center flex-1'>
        <div className='h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-amber-400 mr-2'></div>
        <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
      </div>
    </div>

      {/* محتوى الفروع */}
      <div className='flex flex-col sm:flex-row sm:px-15 pb-10 sm:pb-15 sm:gap-7'>
        {/* القسم الأول */}
        <div className='flex flex-col gap-2 sm:gap-4 sm:w-3/7 mx-7 sm:h-72 mb-10 sm:mb-0'>
          <div className='flex gap-1.5 items-center'>
            <div className='py-1 px-2.5 mb-0.5 sm:mb-0 rounded-full border-3 border-amber-400 bg-gray-100 z-1'>
              <FontAwesomeIcon icon={faLocationDot} className="text-indigo-900 mt-1" style={{ fontSize: '23px' }} />
            </div>
            <div className='py-2.5 sm:py-2 rounded-full w-full sm:w-91 -mr-12 flex items-center bg-indigo-900'>
              <span className='text-white text-[11.5px] sm:text-[13.5px] pr-12.5 sm:pr-14 sm:pl-6'> حلوان، الشارع الغربي، بجوار نادي مركز شباب غرب </span>
            </div>
          </div>
          <div className='flex gap-1.5 items-center'>
            <div className='py-1 px-2.5 mb-0.5 sm:mb-0 rounded-full border-3 border-amber-400 bg-gray-100 z-1'>
              <FontAwesomeIcon icon={faLocationDot} className="text-indigo-900 mt-1" style={{ fontSize: '23px' }} />
            </div>
            <div className='py-2.5 sm:py-2 rounded-full w-full sm:w-91 -mr-12 flex items-center bg-indigo-900'>
              <span className='text-white text-[11.5px] sm:text-[13.5px] pr-12.5 sm:pr-14 sm:pl-6'> حلوان، شارع أحمد راغب باشا، تقاطع شارع البرهان </span>
            </div>
          </div>
          <div className='flex gap-1.5 items-center'>
            <div className='py-1 px-2.5 mb-0.5 sm:mb-0 rounded-full border-3 border-amber-400 bg-gray-100 z-1'>
              <FontAwesomeIcon icon={faLocationDot} className="text-indigo-900 mt-1" style={{ fontSize: '23px' }} />
            </div>
            <div className='py-2.5 sm:py-2 rounded-full w-full sm:w-91 -mr-12 flex items-center bg-indigo-900'>
              <span className='text-white text-[11.5px] sm:text-[13.5px] pr-12.5 sm:pr-14 sm:pl-6'> حلوان، شارع مصطفى صفوت، تقاطع شارع البرهان </span>
            </div>
          </div>
          <div className='hidden sm:flex w-full mt-3.5 border-b-2 border-amber-400/65'></div>
          <div className='hidden sm:flex gap-7'>
            <div className='flex flex-col mt-2 items-start gap-5 border-l-2 border-amber-400/65 w-fit pl-10'>
              <img src="v-cash.png" alt="vodafon cash" className='w-32' />
              <img src="insta-pay.png" alt="insta pay" className='w-31.5' />
            </div>
            <div className='flex mt-2.5 items-center'>
              <p className='text-[13.5px] font-semibold text-indigo-950/75'>ندعم الدفع بواسطة <span className='text-red-600/85'>فودافون كاش</span> و <span className='text-violet-600/85'>انستا باي</span></p>
            </div>
          </div>
        </div>

        {/* القسم الثاني */}
        <div className='sm:w-4/7 bg-gray-200 h-80 mx-7 rounded-sm overflow-hidden'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727.5019585635362!2d31.320812314139904!3d29.846907321517754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837685cf4955f%3A0xf9f31c3cb2d8da8f!2z2YfYp9mG2Yog2LTZiNmC2Yog2YTZhNij2K_ZiNin2Kog2YPZh9ix2KjYp9im2YrZhw!5e0!3m2!1sen!2seg!4v1746007898498!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact