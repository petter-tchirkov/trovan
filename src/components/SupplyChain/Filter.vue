<template>
  <div class="supply-chain__filter filter rounded-xl bg-white">
    <div
      class="filter__header flex justify-between items-center bg-[#425B76] px-5 font-bold text-white py-3.5 rounded-tl-xl rounded rounded-tr-xl"
      @click="isFilterExpanded = !isFilterExpanded"
    >
      Filter
      <img
        :src="
          isFilterExpanded
            ? '../../src/assets/images/collapse.svg'
            : '../../src/assets/images/expand.svg'
        "
      />
    </div>
    <div class="filter__content" v-show="isFilterExpanded">
      <div class="filter__items flex gap-7 items-center mb-5 pl-5 pt-6">
        <label>
          Action Date
          <div class="filter__dates flex gap-6">
            <Datepicker
              class="w-36"
              v-model="startDate"
              placeholder="Start Date"
              utc
              :enableTimePicker="false"
            />
            <Datepicker
              class="w-36"
              v-model="endDate"
              placeholder="End Date"
              utc
              :enableTimePicker="false"
            />
          </div>
        </label>
        <label>
          Store Location
          <div class="dropdown relative w-[304px]">
            <button
              class="dropdown-toggle px-4 w-full py-2 text-gray-400 border border-[#799BBB] text-xs leading-tight rounded-md transition duration-150 ease-in-out flex items-center justify-between"
              type="button"
              id="dropdownMenuButton1tx"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Praslin deport Repair shop
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              class="dropdown-menu border border-[#799BBB] w-full min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg mt-1 hidden m-0 bg-clip-padding"
              aria-labelledby="dropdownMenuButton1tx"
            >
              <span
                class="text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-300"
                >Store Location</span
              >
              <li v-for="(location, index) in this.storeLocations" :key="index">
                <a
                  class="dropdown-item text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  >{{ location }}</a
                >
              </li>
            </ul>
          </div>
        </label>
        <label>
          Cylinder type
          <div class="dropdown relative w-[304px]">
            <button
              class="dropdown-toggle px-4 w-full py-2 text-gray-400 border border-[#799BBB] text-xs leading-tight rounded-md transition duration-150 ease-in-out flex items-center justify-between"
              type="button"
              id="dropdownMenuButton1tx"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              5kg composite
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              class="dropdown-menu border border-[#799BBB] min-w-max w-full absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg mt-1 hidden m-0 bg-clip-padding"
              aria-labelledby="dropdownMenuButton1tx"
            >
              <span
                class="text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-300"
                >5kg composite</span
              >
              <li v-for="(type, index) in this.cylinderTypes" :key="index">
                <a
                  class="dropdown-item text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  >{{ type }}</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  >5kg composite</a
                >
              </li>
            </ul>
          </div>
        </label>
      </div>
      <div class="filter__actions flex gap-7 pb-9 pl-5">
        <button class="py-2.5 px-[52px] bg-[#0085FF] rounded-md text-white">
          Save
        </button>
        <button class="py-2.5 px-[52px] bg-[#799BBB] rounded-md text-white">
          Clear
        </button>
        <button class="py-2.5 px-[52px] bg-[#425B76] rounded-md text-white">
          Filter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: null,
      endDate: null,
      isFilterExpanded: true,
      storeLocations: [
        "Praslin deport Repair shop",
        "Praslin deport Repair shop",
        "Praslin deport Repair shop",
      ],
      cylinderTypes: ["5kg composite", "5kg composite", "5kg composite"],
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  box-shadow: 0px 24px 24px rgba(202, 214, 226, 0.24);
}
.accordion-button:not(.collapsed) {
  color: #fff;
  background-color: #425b76;
}
</style>
