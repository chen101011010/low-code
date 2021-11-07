import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    name: 'ABC',
    setup() {
        return () => {
            return <div>ABC</div>;
        };
    },
});
