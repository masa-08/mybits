export const Filter = () => {
  return (
    <>
      <div className="flex justify-end sticky top-3 z-50">
        <select className="select bg-black rounded-full select-sm text-xl text-white">
          <option disabled selected>
            Filter
          </option>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
    </>
  )
}
