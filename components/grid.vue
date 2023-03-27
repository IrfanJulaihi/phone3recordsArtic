<script setup>
import axios from 'axios'
import { onMounted } from 'vue';
const searchTerm = ref('')
const baseurl = "http://localhost:1337"
const originalData=ref('')
const datalist=ref('')
async function fetchData() {
  const response = await axios.post(baseurl + '/api/auth/local',
    {
      "identifier": "irfan",
      "password": "Vuenuxt123"
    })
    .then(function (response) {
      // console.log('response.data.jwt :>> ', response.data);
      const token = response.data.jwt
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      result = axios.get(baseurl + '/api/contacts', config)
        .then(function (response) {
          datalist.value = response.data.data
          return {
            data: response.data.data,
            error: "",
            module: "token"
          }
        })
        .catch(error => {
          return {
            error: error.response.status,
            module: "getjpnlist"
          }
        })
      return result
    })
    .catch(error => {
      return {
        error: error.response,
        module: "getdata"
      }
    })
    //Pass to original data
    originalData.value=datalist
}
onMounted(() => {
  fetchData()
})
function updateSearch() {
  if (searchTerm.value == "") {
    fetchData()
  } else {
    datalist.value = datalist.value.filter(item => {
      for (const key in item.attributes) {
        if (item.attributes[key].toString().toLowerCase().includes(searchTerm.value.toLowerCase())) {
          return true
        }else{
          return false
        }
      }
      return false
    })
  }
}
</script>
<template>
  <div>
    <div class="w-1/2 mx-auto">
      <input
      class="border border-gray-300 rounded-md py-2 px-3 mb-10 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      type="search" placeholder="Search" v-model="searchTerm" @input="updateSearch">
  </div>
    <div v-if=!datalist>
      Loading ...
    </div>
    <div v-else>
      <div>
        <div class="grid-container">
          <div v-for="contacts in datalist" :key="contacts.id" class="grid-item">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <!-- <img src="https://source.unsplash.com/random/800x600" alt="Card image" class="w-full h-64 object-cover"> -->
              <div class="p-4">
                <h2 class="text-xl font-medium text-gray-800 mb-2">{{ contacts.attributes.name }}</h2>
                <p class="text-xl text-black-600">03-{{contacts.attributes.phoneNumber}}</p>
                <p class="text-l text-black-600">{{contacts.attributes.emel}}</p>
                <div class="mt-4 flex items-center">
                  <img src="https://source.unsplash.com/random/32x32" alt="Avatar" class="w-8 h-8 rounded-full mr-2">
                  <div>
                    <p class="text-gray-800 font-medium">{{contacts.attributes.unit}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.grid-item {
  background-color: #ddd;
  padding: 20px;
  text-align: center;
}
</style>
