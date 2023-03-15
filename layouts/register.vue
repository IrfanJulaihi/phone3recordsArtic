<script lang="ts" setup></script>
<template>
   <div class="flex">
    <Sidebar />
    <div class="flex-1 w-4/5">
      <Navbar />
      <main class="px-4 py-8">
        <registerModal />
        <slot />
      </main>
    </div>
  </div>

</template>
<style scoped></style>
