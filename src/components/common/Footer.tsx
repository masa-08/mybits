import { CopyRight, SocialLink } from '../parts'

export const Footer = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="p-3 pl-6 mt-12 bg-gray-300 dark:bg-dark-blue">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <SocialLink type="opensea" size="sm" />
                <SocialLink type="twitter" size="sm" />
              </div>
              <CopyRight />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
