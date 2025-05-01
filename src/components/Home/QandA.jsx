import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const QandA = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-7 sm:gap-15 pt-25 pb-10 sm:pb-15 scroll-mt-20 sm:scroll-mt-10' id='qna'>
        <div className='flex items-center flex-1'>
          <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
          <div className='h-3 w-3 rounded-full bg-amber-400 ml-2'></div>
        </div>
        <p className='text-[19px] sm:text-[22px] font-extrabold text-indigo-950 whitespace-nowrap'>
          أسئلة و <span className='text-amber-400'>أجوبه</span> شائعة
        </p>
        <div className='flex items-center flex-1'>
          <div className='h-3 w-3 rounded-full bg-amber-400 mr-2'></div>
          <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
        </div>
      </div>

      <div className='flex flex-col sm:px-45 pb-20 mx-7 gap-2.5 sm:gap-3'>
      <Accordion
        sx={{
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#1e1a4d' }} />} // لون الأيقونة
          sx={{
            backgroundColor: 'white',
            borderBottom: '2px solid #ffcd2f',
          }}
        >
          <span className='text-[14.9px] sm:text-[15px] my-0.5 font-semibold text-indigo-950'>
            ليه الموقع دا معمول؟
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#374151' }}>
          <p className='text-gray-700 text-[13px] sm:text-[14px] mb-1 mt-2 font-medium'>
            الموقع دا معمول علشان نعرض شغلنا بشكل احترافي، ونوصّل للناس إننا مش بنبيع وبس، لأ إحنا جزء من خطة توسّع حقيقية وفاهمين يعني إيه تطور رقمي.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#1e1a4d' }} />} // لون الأيقونة
          sx={{
            backgroundColor: 'white',
            borderBottom: '2px solid #ffcd2f',
          }}
        >
          <span className='text-[14.9px] sm:text-[15px] my-0.5 font-semibold text-indigo-950'>
            ليه أول ما دخلت الموقع مفيش منتجات قدامي على طول؟
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#374151' }}>
          <p className='text-gray-700 text-[13px] sm:text-[14px] mb-1 mt-2 font-medium'>
            لأننا مش مجرد موقع تجارة إلكترونية بيعرض منتجين والسلام. إحنا مهتمين إن العميل يفهم هو بيشتري منين، يتعرف علينا الأول، يعرف إحنا مين وبنشتغل إزاي، وبعد كده يشوف المنتجات.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#1e1a4d' }} />} // لون الأيقونة
          sx={{
            backgroundColor: 'white',
            borderBottom: '2px solid #ffcd2f',
          }}
        >
          <span className='text-[14.9px] sm:text-[15px] my-0.5 font-semibold text-indigo-950'>
            طب ليه مش كاتبين الأسعار؟
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#374151' }}>
          <p className='text-gray-700 text-[13px] sm:text-[14px] mb-1 mt-2 font-medium'>
            الأسعار بتتغير من وقت للتاني، وعشان كده بنفضل إنك تتواصل مع أقرب فرع ليك وتسأل هناك. ده كمان بيضمن إنك تعرف المنتج متوفر ولا لأ.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#1e1a4d' }} />} // لون الأيقونة
          sx={{
            backgroundColor: 'white',
            borderBottom: '2px solid #ffcd2f',
          }}
        >
          <span className='text-[14.9px] sm:text-[15px] my-0.5 font-semibold text-indigo-950'>
            طب ليه الأسعار مش معروضة بشكل عام زي باقي المواقع؟
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#374151' }}>
          <p className='text-gray-700 text-[13px] sm:text-[14px] mb-1 mt-2 font-medium'>
            بصراحة، إحنا بنفضّل إن أسعارنا تكون متاحة مباشر للعملاء مش على الإنترنت، وده لحماية شغلنا من المنافسين، وفي نفس الوقت نضمن إن العميل ياخد المعلومة الصح من مصدرها.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#1e1a4d' }} />} // لون الأيقونة
          sx={{
            backgroundColor: 'white',
            borderBottom: '2px solid #ffcd2f',
          }}
        >
          <span className='text-[14.9px] sm:text-[15px] my-0.5 font-semibold text-indigo-950'>
            هل ممكن أعرف من الموقع المنتج متوفر ولا لأ؟
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#374151' }}>
          <p className='text-gray-700 text-[13px] sm:text-[14px] mb-1 mt-2 font-medium'>
            طبعًا، من خلال الموقع تقدر تعرف المنتجات المتوفرة، وأي شركات إحنا بنتعامل معاها، عشان تسهّل على نفسك المشوار قبل ما تنزل الفرع.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#1e1a4d' }} />} // لون الأيقونة
          sx={{
            backgroundColor: 'white',
            borderBottom: '2px solid #ffcd2f',
          }}
        >
          <span className='text-[14.9px] sm:text-[15px] my-0.5 font-semibold text-indigo-950'>
            هل الموقع بيبيع أونلاين؟
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#374151' }}>
          <p className='text-gray-700 text-[13px] sm:text-[14px] mb-1 mt-2 font-medium'>
            لا، مش حالياً. الموقع للتعريف بالمحل وبالخدمات والمنتجات اللي بنقدمها، مش للبيع المباشر أونلاين.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          boxShadow: 'none',
          borderRadius: 'none',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#1e1a4d' }} />} // لون الأيقونة
          sx={{
            backgroundColor: 'white',
            borderBottom: '2px solid #ffcd2f',
          }}
        >
          <span className='text-[14.9px] sm:text-[15px] my-0.5 font-semibold text-indigo-950'>
            إزاي أقدر أعرف أقرب فرع ليكم؟
          </span>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#374151' }}>
          <p className='text-gray-700 text-[13px] sm:text-[14px] mb-1 mt-2 font-medium'>
            هتلاقي على الموقع جزء فيه العناوين بالتفصيل لكل الفروع، تقدر تشوف الأقرب ليك وتروح تسأل أو تتواصل معاهم على طول.
          </p>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  )
}

export default QandA