import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
    setup() {
        return () => (
            <>
                <div>头部区域</div>
            </>
        );
    },
});
