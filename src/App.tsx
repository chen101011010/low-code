import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});
