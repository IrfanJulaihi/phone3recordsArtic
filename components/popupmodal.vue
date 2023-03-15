<script lang="ts" setup>
import useMyState from '~/composables/useUtils'
const showModal=ref(false)
const { state: myState } = useMyState()
function submitForm() {
  // Submit form logic goes here
  // Show the modal
  showModal.value = true
}
function closeModal() {
  // Hide the modal
  showModal.value = false
  // Reset the form data
}
</script>
<template>
  <div>
  <!-- Pop-up modal -->
  <div v-if="myState.popupmodalSuccess" class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
        <div class="bg-white rounded-lg p-6">
          <h2 class="text-xl font-bold mb-4">Success!</h2>
          <p class="mb-4">Your form has been successfully submitted.</p>
          <button @click="closeModal" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
        </div>
      </div>
  </div></div>
</template>
<style scoped></style>
