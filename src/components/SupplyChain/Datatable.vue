<template>
  <div class="datatable">
    <div
      class="datatable__header flex justify-between items-center bg-[#425B76] px-5 font-bold text-white py-3 rounded-tl-xl rounded rounded-tr-xl"
      @click="isDetailsShown = !isDetailsShown"
    >
      Details
      <img
        :src="
          isDetailsShown
            ? '../../src/assets/images/collapse.svg'
            : '../../src/assets/images/expand.svg'
        "
      />
    </div>
    <table class="datatable__content mb-6" v-show="isDetailsShown">
      <thead class="datatable__head pt-2.5 pb-3 pl-8">
        <th v-for="(header, index) in this.headers" :key="index">
          {{ header }}
        </th>
      </thead>
      <tbody class="datatable__body">
        <tr
          v-for="(row, index) in paginatedUsers"
          :key="index"
          class="pl-8 py-2.5 border-b border-b-[#EBF0F5] flex items-center text-sm"
        >
          <td class="p-0">{{ row.id }}: {{ row.operation }}</td>
          <td class="p-0">{{ row.min }}</td>
          <td class="p-0">{{ row.average }}</td>
          <td class="p-0">{{ row.max }}</td>
          <td class="p-0">{{ row.cylinderCount }}</td>
          <td class="p-0">{{ row.median }}</td>
          <td class="p-0">
            <img
              :src="
                row.cylinders === 'green'
                  ? '../../src/assets/images/green.svg'
                  : '../../src/assets/images/red.svg'
              "
              alt=""
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="datatable__pagination flex justify-end items-center gap-2 pr-8 mb-8"
      v-show="isDetailsShown"
    >
      <img src="@/assets/images/chevron.svg" alt="" />
      <div
        class="page text-[#799BBB] cursor-pointer hover:bg-gray-400 p-1"
        v-for="(page, index) in pages"
        :key="index"
        @click="switchPage(page)"
        :class="{ 'text-[#425b76] bg-gray-400': page === pageNumber }"
      >
        {{ page }}
      </div>
      <img src="@/assets/images/chevron.svg" class="rotate-180" alt="" />
      <span class="text-[#799BBB]"
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
  },
  mounted() {
    this.getTable();
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
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
