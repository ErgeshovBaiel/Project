import { useTranslation } from 'react-i18next';
import search from "../../assets/search.svg"

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className='app-container'>
      <div style={{
        width: '344px',
        height: '64px',
        padding: '12px 16px',
        gap: '16px',
        borderRadius: '12px',
        border: '1px solid #323B54',
        display: 'flex',
        alignItems: 'center',
        marginTop: "20px",
      }}>
        <img width={24} height={24} src={search} alt="" className=' ml-[10px]'/>
        <input
          style={{
            width: '100%',
            height: '100%',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '16px',
            color: '#475069',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            marginLeft: '10px',
          }}
          type="text"
          placeholder={t('Search Movies or TV Shows')}
          className="placeholder-color font-[Poppins]"
        />
      </div>

      <style>
        {`
          .placeholder-color::placeholder {
            color: #475069;
          }
        `}
      </style>
    </div>
  );
};

export default Search;