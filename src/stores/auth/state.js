import { ref } from "vue";

export const accessToken = ref(localStorage.getItem("accessToken"));
export const refreshToken = ref(localStorage.getItem("refreshToken"));
