import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    screens: {
      'phone': { max:'767px', },
      'pc': { min:'767px', },
    },
  },
})
