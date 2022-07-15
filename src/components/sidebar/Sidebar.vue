<template>
  <aside class="sidebar pt-6">
    <div class="sidebar__logo flex justify-center">
      <img src="@/assets/images/Logo.svg" alt="" />
    </div>
    <SidebarNav />
  </aside>
</template>

<script>
import SidebarNav from "./SidebarNav.vue";
export default {
  components: { SidebarNav },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 290px;
  background: #2e3842;
  min-height: 100vh;
}
</style>
