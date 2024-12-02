import { accessToken, refreshToken } from "./state";

export const authenticate = ({
  accessToken: newAccessToken,
  refreshToken: newRefreshToken,
}) => {
  accessToken.value = newAccessToken;
  refreshToken.value = newRefreshToken;
  localStorage.setItem("accessToken", newAccessToken);
  localStorage.setItem("refreshToken", newRefreshToken);
};

export const logout = (refresh = true) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  accessToken.value = null;
  refreshToken.value = null;
  if (refresh) window.location.reload(false);
};
