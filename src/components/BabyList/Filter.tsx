export const Filter = () => {
  return (
    <>
      <div className="flex justify-end pr-3 sticky top-3 z-50">
        <select className="select bg-gray-300 rounded-full select-sm text-xl">
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
