import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import '@/assets/styles/reset.scss';
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
