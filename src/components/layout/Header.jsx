import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Icon from '../../assets/icon.svg'

const Header = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className='flex justify-center'>
      <div className='app-container z-30 fixed text-white flex justify-between pt-[25px] mx-auto'>
        <div className='flex items-center gap-[70px]'>
          <NavLink to={'/'}>
            <img src={Logo} alt='' />
          </NavLink>

          <div className='font-medium text-xl text-[#FFFFFF]'>
            <div className='flex ml-[680px] mt-[5px]'>
              <div className='flex gap-[40px]'>
                {/* Movies кнопкасын NavLink менен байланыштырдык */}
                <NavLink
                  to='/movies'
                  className='w-[59px] h-[24px] font-[Poppins] text-base font-semibold text-[#A8AEBF]'
                >
                  Movies
                </NavLink>

                <NavLink
                  to='/tv shows'
                  className='w-[80px] h-[24px] font-[Poppins] text-base font-semibold text-[#A8AEBF]'
                >
                  TV Shows
                </NavLink>

                <p className='w-[101px] h-[24px] font-[Poppins] text-base font-semibold text-[#A8AEBF] ml-[5px]'>
                  Suggest me
                </p>
              </div>
              <img
                width={16}
                height={16}
                className='ml-[8px]'
                src={Icon}
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='pt-[30px]'>
          <p
            className='font-medium text-[19px] cursor-pointer'
            onClick={changeLanguage}
          >
            {t('language')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
