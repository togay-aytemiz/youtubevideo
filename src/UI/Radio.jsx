const Radio = () => {

    const style = {
        radio: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700  dark:bg-gray-600 dark:border-gray-500 outline-0`,
        input: `w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`,
        
      };


  return (
    <div>
      <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
        Lütfen bir video seçin
      </h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white max-w-lg">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="horizontal-list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              className={style.radio}
            />
            <label for="horizontal-list-radio-license" className={style.input}>
              Video #1{" "}
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value=""
              name="list-radio"
              className={style.radio}
            />
            <label for="horizontal-list-radio-id" className={style.input}>
              Video #2
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="horizontal-list-radio-military"
              type="radio"
              value=""
              name="list-radio"
              className={style.radio}
            />
            <label for="horizontal-list-radio-military" className={style.input}>
              Video #3
            </label>
          </div>
        </li>
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input
              id="horizontal-list-radio-passport"
              type="radio"
              value=""
              name="list-radio"
              className={style.radio}
            />
            <label for="horizontal-list-radio-passport" className={style.input}>
              Video #4
            </label>
          </div>
        </li>
      </ul></div>
  )
}
export default Radio