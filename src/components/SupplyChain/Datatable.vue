<template>
  <div>datatable</div>
  <EasyDataTable :headers="table.headers" :items="table.data" />
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getTable"]),
  },
  mounted() {
    this.getTable();
  },
  computed: {
    table() {
      return this.$store.state.datatable;
    },
  },
};
</script>

<style lang="scss" scoped></style>
