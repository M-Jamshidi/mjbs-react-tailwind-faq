import React from 'react';
import Avatar from '../Layouts/Widget/Avatar';
import Button from '../Layouts/Widget/Button';
import Img from './../../Resources/avatar.jpg';

function QA() {
   return(
      <div className='shadow-box bg-mainLightestColor mt-4 rounded-md font-Shabnam text-sm text-mainDarkColor'>
         <div className='flex flex-row-reverse items-center justify-between bg-white py-2 px-4 rounded-md shadow-nav'>
            <div className='flex flex-row-reverse items-center'>
               <Avatar img={Img} height='8'/>
               <h2 className='mr-4 rtl-direction font-bold'>مشکل در Auth در React</h2>
            </div>
            <div className='flex flex-row-reverse items-center'>
               <div className='flex flex-row-reverse '>
                  <span className='text-mainGrayDarkColor'>ساعت</span>
                  <span className='mx-1 text-mainGrayDarkColor'>:</span>
                  <span className='font-ShabnamDigits'>16:48</span>
                  <span className='mx-4 text-secondaryLightColor'>|</span>
                  <span className='text-mainGrayDarkColor'>تاریخ</span>
                  <span className='mx-1 text-mainGrayDarkColor'>:</span>
                  <span className='font-ShabnamDigits'>1400/12/05</span>
               </div>
               <div className='flex flex-row-reverse items-center mr-8'>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 2C5.02208 2 2 5.02208 2 8.75C2 9.43791 2.14554 10.1468 2.35732 10.8091L2.36068 10.8196C2.57868 11.5014 2.74647 12.0261 2.86295 12.4222C2.97485 12.8028 3.05981 13.1293 3.08134 13.3849C3.10678 13.6867 3.12001 13.9487 3.08147 14.2236C3.04294 14.4985 2.9582 14.7467 2.85076 15.0299C2.79524 15.1763 2.71923 15.3302 2.6228 15.5H8.75C12.4779 15.5 15.5 12.4779 15.5 8.75C15.5 5.02208 12.4779 2 8.75 2ZM0.631647 15.8254C0.548607 15.9462 0.5 16.0924 0.5 16.25C0.5 16.6642 0.835786 17 1.25 17H8.75C13.3063 17 17 13.3063 17 8.75C17 4.19365 13.3063 0.5 8.75 0.5C4.19365 0.5 0.5 4.19365 0.5 8.75C0.5 9.63943 0.686196 10.5079 0.928582 11.2659C1.15063 11.9604 1.31298 12.4683 1.42388 12.8454C1.53994 13.2401 1.57966 13.4281 1.58664 13.5109C1.61071 13.7964 1.60979 13.9169 1.59599 14.0154C1.58219 14.1138 1.54994 14.2299 1.44829 14.4979C1.3664 14.7137 1.17416 15.0116 0.631647 15.8254Z" fill="#9CAEBB"/>
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66663 7.08334C4.66663 6.66913 5.00241 6.33334 5.41663 6.33334H12.0833C12.4975 6.33334 12.8333 6.66913 12.8333 7.08334C12.8333 7.49756 12.4975 7.83334 12.0833 7.83334H5.41663C5.00241 7.83334 4.66663 7.49756 4.66663 7.08334Z" fill="#9CAEBB"/>
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66663 10.4167C4.66663 10.0024 5.00241 9.66666 5.41663 9.66666H8.74996C9.16417 9.66666 9.49996 10.0024 9.49996 10.4167C9.49996 10.8309 9.16417 11.1667 8.74996 11.1667H5.41663C5.00241 11.1667 4.66663 10.8309 4.66663 10.4167Z" fill="#9CAEBB"/>
                  </svg>
                  <span className='font-ShabnamDigits font-light text-mainGrayDarkColor mr-2'>20</span>
               </div>
            </div>
         </div>
         <div className='px-4 py-4 rtl-direction'>
            <p className='leading-6'>
               لورم ایپسوم یا طرح‌نما
                (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و 
               طراحی گرافیک گفته می‌شود. 
               طراح گرافیک از این متن به عنوان عنصری از 
               ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری
                و کلی طرح سفارش گرفته شده استفاده می نماید
            </p>
         </div>
         <div className='px-4 pt-2 pb-4'>
            <div className='w-max'>
               <Button href='localhost:3000' bColor='border-mainGreenColor' color='text-mainGreenColor' type='border'> 
                  <span>مشاهده جزئیات</span>
               </Button>
            </div>
         </div>
      </div>
   )
}

export default QA;