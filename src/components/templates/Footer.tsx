import { CopyRight, SocialLink } from '../parts'

export const Footer = () => {
  return (
    <>
      <div className="px-6 py-3 md:px-0 bg-gray-300 dark:bg-dark-blue">
        <div className="max-w-5xl mx-auto md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <SocialLink type="opensea" size="sm" />
              <SocialLink type="twitter" size="sm" />
            </div>
            <CopyRight />
          </div>
        </div>
      </div>
    </>
  )
}
