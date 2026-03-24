import { useTranslation } from 'react-i18next';


function Footer() {
  const { t } = useTranslation();

  return (
    <div className='bg-[#19252c] text-white py-10 px-20 text-sm lg:flex justify-between'>
        <div className='text-center mb-4 lg:mb-0'>
          © 2026 <span className="font-semibold bg-gradient-to-r from-[#ff715a] via-[#ff8c78] to-[#ffb58a] bg-clip-text text-transparent">{t("full_name")}</span> • {t("footer_all_rights")}
        </div>
        <div className='text-center'>
          {t("footer_designed_by")} <span className="font-semibold bg-gradient-to-r from-[#ff715a] via-[#ff8c78] to-[#ffb58a] bg-clip-text text-transparent">{t("full_name")}</span>
        </div>
    </div>
  )
}

export default Footer