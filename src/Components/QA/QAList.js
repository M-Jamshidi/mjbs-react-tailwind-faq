import React, {Component} from 'react';
import Button from '../Layouts/Widget/Button';
import QA from './QA'

class QAList extends Component {

   state = {
      questions: [
         {
            id: 1,
            title: 'مشکل در Auth در React',
            slug: 'مشکل_در_Auth_در_React',
            avatar: 'https://static.roocket.ir/images/avatar/2021/4/17/iq5eICsbaGqWVbTH9xKlkkdWFdKVPh5dCEqZQw8r.png',
            time: '16:50',
            date: '1400/12/05',
            commentCount: '20',
            body: '<p>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید</p>'
         },
         {
            id: 2,
            title: 'مشکل در Auth در React2',
            slug: 'مشکل_در_Auth_در_React2',
            avatar: 'https://static.roocket.ir/public/images/useravatar/2020/4/4/1586000576.png',
            time: '14:48',
            date: '1400/12/12',
            commentCount: '15',
            body: '<p>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید</p>'
         },         
         {
            id: 3,
            title: 'مشکل در Auth در React3',
            slug: 'مشکل_در_Auth_در_React3',
            avatar: 'https://static.roocket.ir/public/images/useravatar/2020/7/3/1593762905.png',
            time: '08:20',
            date: '1400/12/15',
            commentCount: '23',
            body: '<p>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید</p>'
         },
         {
            id: 4,
            slug: 'مشکل_در_Auth_در_React4',
            title: 'مشکل در Auth در React4',
            avatar: 'https://static.roocket.ir/public/images/useravatar/2020/11/28/1606578356.png',
            time: '19:33',
            date: '1400/12/25',
            commentCount: '24',
            body: '<p>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید</p>'
         },
         {
            id: 5,
            slug: 'مشکل_در_Auth_در_React5',
            title: 'مشکل در Auth در React5',
            avatar: 'https://static.roocket.ir/images/avatar/2021/7/26/o663an9ZhLzhOndcyePsobLjz9eK0PnerHwhwrD8.png',
            time: '16:48',
            date: '1400/12/29',
            commentCount: '5',
            body: '<p>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید</p>'
         }
      ]
   }

   render() {

      // list of the questions
      let questions = this.state.questions;

      return(
         <>
            {
               questions.map(item => 
                  <QA key={item.id} data={item}>
                     <Button link={`question/${item.slug}`} bColor='border-mainGreenColor' color='text-mainGreenColor'> 
                        <span>مشاهده جزئیات</span>
                     </Button>
                  </QA>
               )
            }
         </>
      )
   }

}

export default QAList;