export const OpenSeaGuideMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <div className=" bg-gray-700 p-6">
          <div className="flex flex-col justify-center gap-3">
            <p className="text-4xl text-white">Visit NEOBABY in OpenSea</p>
            <div className="flex items-center">
              <a href="https://opensea.io/collection/neobaby">
                <button className="btn rounded-full w-fit h-fit px-6 py-2 text-2xl border-white bg-transparent text-white hover:bg-opacity-50">
                  view in opensea
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
