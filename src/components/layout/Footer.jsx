import TelIcon from '../../assets/tel.svg'
import EmailIcon from '../../assets/email.svg'
import TelegramIcon from '../../assets/telegram.svg'
import Button from '../UI/Button/Button'

const icons = [TelIcon, EmailIcon, TelegramIcon]

const Footer = () => {
  return (
    <div className='bg-[#1a1a1a] mt-[150px]'>
      <div className='app-container py-[48px] text-white flex justify-between'>
        <div>
          <h4 class="w-[80px] h-[20px] font-[Montserrat] text-[18px] font-medium mb-5">Cinemax</h4>
          <div class="w-[99px] h-[20px] font-[Montserrat] text-[16px] font-normal">
          {['О нас', 'Блог', 'Вакансии', 'Акции'].map(item => {
            return (
              <p className='mb-[20px]' key={item}>
                {item}
              </p>
            )
          })}
          </div>
        </div>
        <div>
          <h4 class="w-[80px] h-[20px] font-[Montserrat] text-[18px] font-medium mb-5">Помощь</h4>
          <div class="w-[155px] h-[20px] font-[Montserrat] text-[16px] font-normal">
          {['Вопросы и ответы', 'Контакты'].map(item => {
            return (
              <p className='mb-[20px]' key={item}>
                {item}
              </p>
            )
          })}
          </div>
        </div>

        <div className='w-[255px] '>
          <h4 class="w-[80px] h-[20px] font-[Montserrat] text-[18px] font-medium mb-5">Поддержка</h4>
          <p class="w-[300px] h-[56px] font-montserrat text-base font-normal ">Мы всегда готовы вам помочь.
             Наши операторы онлайн 24/7</p>
          <div className='flex gap-[20px] mt-5'>
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className='w-[26px] flex items-center justify-center h-[26px] bg-[#EF4234] rounded-full'
                >
                  <img src={icon} alt='' />
                </div>
              )
            })}
          </div>
          <Button className={'py-[5px] px-[20px] font-[Montserrat] mt-6 font-medium'}>Написать в чате</Button>
        </div>
      </div>
      <div className="bg-[#131416] h-[40px]">
        <div className="my-container flex justify-between">
          <p className="text-[#FFFFFF] mt-[10px] font-[Montserrat] font-medium text-[15px]">© 2015-2024 Cinemax</p>
          <p className="text-[#FFFFFF] mt-[10px] font-[Montserrat] font-medium text-[15px]">Пользовательские соглашения</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
