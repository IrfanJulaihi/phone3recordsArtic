<script lang="ts" setup>
import axios from 'axios'
import { useStore } from 'vuex'
const formModal = useModal();
const PopUpModalSuccess = usePopUpModalSuccess();
const baseurl = "http://localhost:1337"
const formData = {
  nama: '',
  emel: '',
  unit: '',
  notelefon: ''
};
async function onSubmit() {
  const data = {
    name: formData.nama,
    emel: formData.emel,
    unit: formData.unit,
    phoneNumber: formData.notelefon
  }
  const response = await axios.post(baseurl + '/api/auth/local',
    {
      "identifier": "irfan",
      "password": "Vuenuxt123"
    })
    .then(function (response) {
      // console.log('response.data.jwt :>> ', response.data);
      const token = response.data.jwt
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      console.log(formData);
      axios.post(baseurl + '/api/contacts', {
        data
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        })
    })
    .catch(error => {
      console.log(error)
    })
}
</script>
<template>
  <div>
    {{ formModal }}
    <popupmodal />
    <div class="flex items-center justify-center min-h-screen fixed inset-0 bg-gray-900 bg-opacity-70" v-if="formModal">
      <div class="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 class="text-2xl font-bold mb-4">Tambah profil baru</h2>
        <form @submit.prevent="onSubmit">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="nama">
              Nama:
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Masukkan nama" v-model="formData.nama" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="emel">
              Emel
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emel" type="emel" placeholder="Masukkan emel" v-model="formData.emel" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="Nombor telefon">
              Nombor telefon
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="notelefon" type="text" placeholder="Masukkan no telefon" v-model="formData.notelefon" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="Nombor telefon">
              Unit
            </label>
            <label for="selection" class="block font-medium text-gray-700">Select an option:</label>
            <select id="selection" name="selection"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              v-model="formData.unit">
              <option value="Unit Aplikasi GunaSama dan Portal">UAGP</option>
              <option value="Unit Aplikasi Sokongan">UAS</option>
            </select>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              type="submit" @change="onSubmit" @click="PopUpModalSuccess = !PopUpModalSuccess">
              Register
            </button>
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" @click="formModal = !formModal">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
