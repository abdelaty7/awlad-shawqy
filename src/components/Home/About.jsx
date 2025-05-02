import React from 'react'

const About = () => {
  return (
    <div className='bg-indigo-950 text-white sm:h-100 px-7 sm:px-15 flex flex-col sm:flex-row items-end sm:items-center scroll-mt-26 sm:scroll-mt-16' id='about'>
      <img src="light.webp" className="w-30 sm:w-65 ml-5 mt-1 sm:-mt-10 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-not-allowed" />
      <div className='-mt-3 sm:mt-0'>
        <p className='text-[19px] sm:text-[22px] font-semibold text-amber-400 mb-1.5 sm:mb-2.5'>من نحن؟</p>
        <p className='text-[12.99px] sm:text-[14.5px] text-gray-200/90 tracking-wider font-extralight sm:font-light leading-5.5 sm:leading-6 mb-13.5 sm:mb-0'>بدأنا رحلة أولاد شوقي بشغف حقيقي لتقديم كل ما يلزم عالم الكهرباء تحت سقف واحد. بخبرة سنين طويلة وثقة عملائنا اللي بنعتز بيها، قدرنا نوفر تشكيلة واسعة من أجود أنواع المفاتيح، البرايز، الأسلاك، الكابلات، وحدات الإضاءة الحديثة والكلاسيكية، بالإضافة لمجموعة مميزة من الكشافات ومستلزمات الكهرباء المتنوعة.
        في أولاد شوقي، الجودة مش خيار، دي أساس، وعشان كده كل منتجاتنا معتمدة ومطابقة لأعلى معايير الأمان والسلامة. بنؤمن إن كل بيت جديد أو مجدد محتاج حلول ذكية وأسعار عادلة، وعشان كده دايمًا بنحرص نوفر أحدث الموديلات اللي تناسب كل الأذواق والميزانيات.</p>
      </div>
    </div>
  )
}

export default About