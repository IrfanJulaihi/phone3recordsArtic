<script lang="ts" setup>
const PopUpModalSuccess = usePopUpModalSuccess()
function closeModals() {

  PopUpModalSuccess.value = false
}
</script>
<template>

  <!-- Pop-up modal -->
  <div  class="fixed z-50 inset-0 overflow-y-auto" v-if="PopUpModalSuccess">
    <div class="flex items-center justify-center min-h-screen">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-20"></div>
      <div class="bg-white rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4">Success!</h2>
        <p class="mb-4">Your form has been successfully submitted.</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" v-bind:click="closeModals"
          type="button">Close</button>
          
      </div>
    </div>
  </div>
</template>
<style scoped></style>
