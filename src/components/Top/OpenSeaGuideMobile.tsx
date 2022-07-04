export const OpenSeaGuideMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className=" bg-gray-700 dark:bg-slate-600 p-6 py-12 flex items-end">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-4xl text-white">Visit NEOBABY in OpenSea</p>
            <div className="flex items-center">
              <a href="https://opensea.io/collection/neobaby">
                <button
                  className="btn rounded-full font-normal w-fit h-fit px-6 py-2 text-2xl
                            text-black bg-white hover:bg-opacity-50
                            border-2 border-black shadow-flat-sm shadow-black
                            dark:text-white dark:bg-light-slate dark:border-dark-slate dark:shadow-dark-slate"
                >
                  view in opensea
                </button>
              </a>
            </div>
          </div>
          <div className="mx-auto -mb-4">
            <figure>
              <img
                src="https://storage.googleapis.com/mybits-test/baby-silhouette.webp"
                alt="image"
                className="w-28"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
