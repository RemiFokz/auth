export const state = () => ({
  info: {},
  logined: false
});

const req = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "John",
        email: "letitshow@show.com",
        img:
          "https://www.wallpaperflare.com/static/686/189/164/jon-snow-kit-harington-game-of-thrones-season-7-john-wallpaper-preview.jpg"
      });
    }, 5000);
  });

export const mutations = {
  SET_INFO(state, newinfo) {
    state.logined = true;
    state.info = { ...state.info, ...newinfo };
  }
};

export const actions = {
  async API_LOGIN({ commit }, payload) {
    try {
      const response = await req(payload);
      commit("SET_INFO", response);
    } catch (error) {
      throw error;
    }
  }
};
