import TelIcon from '../../assets/tel.svg'
import EmailIcon from '../../assets/email.svg'
import TelegramIcon from '../../assets/telegram.svg'
import Button from '../UI/Button/Button'

const icons = [TelIcon, EmailIcon, TelegramIcon]

const Footer = () => {
  return (
    <div className='bg-[#1a1a1a]'>
      <div className='app-container py-[48px] text-white flex justify-between'>
        <div>
          <h4 className='mb-[20px] text-xl font-medium'>Cinemax</h4>
          <div className="font-medium">
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
          <h4 className='mb-[20px] text-xl font-medium'>Помощь</h4>
          <div className="font-medium">
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
          <h4 className='mb-[20px] text-xl font-medium'>Поддержка</h4>
          <p className="font-medium">Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</p>
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
          <Button className={'py-[5px] px-[20px] mt-6 font-medium'}>Написать в чате</Button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
