<template>
  <div class="wrapper">
    <Sidebar/>
    <main>
      <Header/>
      <router-view/>
    </main>
    </div>
</template>

<script>
import Home from '@/components/Home.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import Header from '@/components/Header.vue';
export default {
  components: {
    Home, Sidebar, Header
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 290px 1fr;
}
</style>
