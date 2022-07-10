import { SocialLink } from '../parts'

export const FooterMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="pl-6 p-5 bg-gray-300 dark:bg-dark-blue">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <SocialLink type="opensea" size="sm" />
                <SocialLink type="twitter" size="sm" />
              </div>
              <p className="text-sm text-gray-400">&copy; 2022 NEOBABY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
