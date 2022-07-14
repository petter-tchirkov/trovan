<template>
  <nav class="sidebar-nav pt-6">
    <ul class="cursor-pointer">
      <li class="text-white font-bold text-md hover:bg-[#455360] py-4 pl-8">LPG managment system</li>
      <li class="text-white font-bold text-md hover:bg-[#455360] py-4 pl-8">Bulk tank management</li>
      <li class="text-white font-bold text-md hover:bg-[#455360] py-4 pl-8">Culinder manufacturer</li>
      <li class="text-white font-bold text-md hover:bg-[#455360] py-4 pl-8">Pets microchip tracking</li>
      <li class="text-white font-bold text-md hover:bg-[#455360] py-4 pl-8">Marketing</li>
      <li class="text-white font-bold text-md hover:bg-[#455360] py-4 pl-8">System admin</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .sidebar-nav {
    li {
      position: relative;
      &:after {
        content: url("data:image/svg+xml,%3Csvg width='6' height='11' viewBox='0 0 6 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.00003 5.48506L0.770394 10.2706L0.729754 0.744358L6.00003 5.48506Z' fill='%23F5F8FA'/%3E%3C/svg%3E%0A");
        position: absolute;
        top: 30%;
        right: 30px;
      }
    }
  }
</style>