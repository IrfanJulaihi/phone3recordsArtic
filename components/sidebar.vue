<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
const formModal=useModal();
</script>
<template>
  <aside class="hidden md:block md:w-1/10 bg-gray-800">
    <div class="min-h-screen flex flex-col justify-between py-6">
      <nav>
        <ul class="space-y-1">
          <li class="px-4">
            <NuxtLink to="/">
              <a href="#" class="text-gray-300 hover:text-white block px-2 py-2 rounded-md text-base font-medium">
                Utama
              </a>
            </NuxtLink>
          </li>
          <li class="px-4">
            <NuxtLink to="/register">
              <a href="#" class="text-gray-300 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
                @click="formModal=!formModal">
                Tambah profil
              </a>
            </NuxtLink>
          </li>
          <li class="px-4">
            <a href="#" class="text-gray-300 hover:text-white block px-2 py-2 rounded-md text-base font-medium">
              Projects
            </a>
          </li>
          <li class="px-4">
            <a href="#" class="text-gray-300 hover:text-white block px-2 py-2 rounded-md text-base font-medium">
              Calendar
            </a>
          </li>
        </ul>
      </nav>
      <div class="px-4">
        <a href="#" class="text-gray-300 hover:text-white block px-2 py-2 rounded-md text-base font-medium">
          Settings
        </a>
        <a href="#" class="text-gray-300 hover:text-white block px-2 py-2 rounded-md text-base font-medium">
          Sign out
        </a>
      </div>
    </div>
  </aside>
</template>
<style scoped></style>
