<template>
  <div class="px-11 pt-8 bg-[#F5F8FA] h-full">
    <Filter class="mb-11" />
    <Datatable />
  </div>
</template>

<script>
import Filter from "./Filter.vue";
import Datatable from "./Datatable.vue";
export default {
  components: {
    Filter,
    Datatable,
  },
};
</script>

<style lang="scss" scoped></style>
