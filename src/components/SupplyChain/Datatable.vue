<template>
  <div class="datatable bg-white rounded-bl-xl rounded-br-xl">
    <div
      class="datatable__header flex justify-between items-center bg-[#425B76] px-5 font-bold text-white py-3 rounded-tl-xl rounded rounded-tr-xl"
      @click="isDetailsShown = !isDetailsShown"
    >
      Details
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-if="isDetailsShown"
      >
        <circle cx="13" cy="13" r="13" fill="#374F69" />
        <rect x="7" y="12" width="13" height="2" fill="white" />
      </svg>
      <svg
        v-else
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="13" fill="#374F69" />
        <rect x="7" y="12" width="13" height="2" fill="white" />
        <path d="M14.5 19.5H12.5V6.5H14.5V19.5Z" fill="white" />
      </svg>
    </div>
    <table class="datatable__content mb-6" v-show="isDetailsShown">
      <thead class="datatable__head pt-2.5 pb-3 pl-8">
        <th
          class="text-[#2E3842]"
          v-for="(header, index) in this.headers"
          :key="index"
        >
          {{ header }}
        </th>
      </thead>
      <tbody class="datatable__body">
        <tr
          v-for="(row, index) in paginatedUsers"
          :key="index"
          class="pl-8 py-2.5 border-b border-b-[#EBF0F5] flex items-center text-sm"
        >
          <td class="p-0 text-[#3E4C59]">{{ row.id }}: {{ row.operation }}</td>
          <td class="p-0 text-[#3E4C59]">{{ row.min }}</td>
          <td class="p-0 text-[#3E4C59]">{{ row.average }}</td>
          <td class="p-0 text-[#3E4C59]">{{ row.max }}</td>
          <td class="p-0 text-[#3E4C59]">{{ row.cylinderCount }}</td>
          <td class="p-0 text-[#3E4C59]">{{ row.median }}</td>
          <td class="pl-2">
            <img src="@/assets/images/green.svg" alt="" />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="datatable__pagination flex justify-end items-center gap-2 pr-8 mb-8"
      v-show="isDetailsShown"
    >
      <img src="@/assets/images/chevron.svg" alt="" />
      <div class="flex gap-[22px]">
        <div
          class="page text-[#799BBB] cursor-pointer text-sm p-1"
          v-for="(page, index) in pages"
          :key="index"
          @click="switchPage(page)"
          :class="{ 'text-[#455360]': page === pageNumber }"
        >
          {{ page }}
        </div>
      </div>
      <img src="@/assets/images/chevron.svg" class="rotate-180" alt="" />
      <span class="text-[#799BBB] text-sm"
        >Total: <span class="text-black">{{ pages }}</span></span
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDetailsShown: true,
      perPage: 10,
      pageNumber: 1,
      headers: [
        "Operation",
        "Min",
        "Average",
        "Max",
        "Cylinder Count",
        "Median",
        "Cylinders",
      ],
    };
  },
  methods: {
    ...mapActions(["getTable"]),
    switchPage(page) {
      this.pageNumber = page;
    },
    addIndexes() {
      this.$store.state.datatable.forEach((detail) => {
        detail.id = this.$store.state.datatable.indexOf(detail) + 1;
      });
    },
  },
  mounted() {
    this.getTable();
    this.addIndexes();
  },
  computed: {
    table() {
      return this.$store.state.datatable;
    },
    pages() {
      return Math.ceil(this.table.length / 10);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.perPage;
      let to = from + this.perPage;

      return this.table.slice(from, to);
    },
  },
};
</script>

<style lang="scss" scoped>
.datatable {
  display: grid;
  box-shadow: 0px 24px 24px rgba(202, 214, 226, 0.24);

  &__head {
    text-align: left;
    background: #f1f8ff;
  }

  &__head,
  &__body tr {
    display: grid;
    grid-template-columns: 1fr 135px 180px 190px 170px 156px 100px;
  }

  &__pagination {
    .page {
      &.active {
        color: #425b76;
      }
      &:hover {
        color: #425b76;
      }
    }
  }
}
</style>
