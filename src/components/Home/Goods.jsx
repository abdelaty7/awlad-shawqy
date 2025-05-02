import React from 'react'

const Goods = () => {
  return (
    <>
    <div className='flex justify-center items-center gap-7 sm:gap-15 pt-20 sm:pt-25 pb-10 sm:pb-15 scroll-mt-21 sm:scroll-mt-11' id='goods'>
      <div className='flex items-center flex-1'>
        <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
        <div className='h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-amber-400 ml-2'></div>
      </div>
      <p className='text-[18.5px] sm:text-[22px] font-extrabold text-indigo-950 whitespace-nowrap'>
        امتيازات <span className='text-amber-400'>التعامل</span> مع أولاد شوقي
      </p>
      <div className='flex items-center flex-1'>
        <div className='h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-amber-400 mr-2'></div>
        <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
      </div>
    </div>
    <div className='flex flex-col items-center sm:flex-row gap-3 sm:gap-8 mx-7 sm:mx-15 justify-center pb-10'>
      <div className='bg-white border-b-3 sm:border-b-5 border-amber-400 w-full sm:w-83 rounded-xl p-3 sm:p-6 flex flex-col items-center'>
        <p className='text-[15.8px] sm:text-[17px] font-semibold text-indigo-950 mt-1 sm:mt-0 mb-2 sm:mb-4'>جودة مضمونة</p>
        <p className='font-medium text-[12.5px] sm:text-[14px] text-gray-700 tracking-wider mb-2 sm:mb-0'>في أولاد شوقي، بنؤمن إن الجودة هي الأساس في كل حاجة بنقدمها. علشان كده كل منتجاتنا مختارة بعناية، ومعتمدة ومطابقة للمواصفات القياسية المصرية والعالمية. إحنا مش بس بنوفرلك منتج بيؤدي الغرض، إحنا بنضمنلك إنه يعيش معاك فترة طويلة بأعلى درجات الأمان والكفاءة، سواء كنت بتجهز بيتك أو بتجدد مكانك.</p>
      </div>
      <div className='bg-white border-b-3 sm:border-b-5 border-amber-400 w-full sm:w-83 rounded-xl p-3 sm:p-6 flex flex-col items-center'>
        <p className='text-[15.8px] sm:text-[17px] font-semibold text-indigo-950 mt-1 sm:mt-0 mb-2 sm:mb-4'>أسعار تنافسية</p>
        <p className='font-medium text-[12.5px] sm:text-[14px] text-gray-700 tracking-wider mb-2 sm:mb-0'>عارفين كويس إن تجهيز أو تجديد بيتك بيحتاج تخطيط كويس للميزانية، وعشان كده إحنا حرصنا نوفرلك أفضل قيمة مقابل السعر. في أولاد شوقي، مش بس بتاخد منتج عالي الجودة، لكن كمان بتحصل عليه بسعر مناسب يناسب كل الإمكانيات بدون ما تضطر تتنازل عن احتياجاتك أو عن الذوق اللي بتحلم بيه.</p>
      </div>
      <div className='bg-white border-b-3 sm:border-b-5 border-amber-400 w-full sm:w-83 rounded-xl p-3 sm:p-6 flex flex-col items-center'>
        <p className='text-[15.8px] sm:text-[17px] font-semibold text-indigo-950 mt-1 sm:mt-0 mb-2 sm:mb-4'>توافر دائم للبضاعة</p>
        <p className='font-medium text-[12.5px] sm:text-[14px] text-gray-700 tracking-wider mb-2 sm:mb-0'>مفيش حاجة بتضايق أكتر من إنك تدور على حاجة وتلاقيها مش موجودة. عشان كده إحنا بنحرص دايمًا على توفر مخزون كامل ومتجدد من كل مستلزمات الكهرباء. سواء احتجت سلك معين، بريزة، كشاف إضاءة، أو حتى لمبة مودرن، هتلاقيه متوفر في أي وقت تزورنا فيه، وجاهزين نخدمك بسرعة ومن غير انتظار.</p>
      </div>
    </div>
    </>
  )
}

export default Goods