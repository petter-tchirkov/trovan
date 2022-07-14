<template>
  <div class="px-11 pt-6 bg-[#F5F8FA]">
    <Filter class="mb-6" />
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
