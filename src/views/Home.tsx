import { defineComponent, onMounted, reactive, ref, Ref } from 'vue';
import List from '@/components/layouts/List';
import Editor from '@/components/layouts/Editor';
import Attribute from '@/components/layouts/Attribute';
import Header from '@/components/layouts/Header';
import { StyleSheet, css } from 'aphrodite';
export default defineComponent({
    name: 'Home',
    components: {
        List,
        Editor,
        Attribute,
        Header,
    },
    setup() {
        const state = reactive({
            containerHeight: 0,
        });
        const header: Ref<HTMLElement | null> = ref(null);
        onMounted(() => {
            state.containerHeight = window.innerHeight - header!.value!.clientHeight;
        });
        return () => (
            <>
                <header class={css(styles.header)} ref={header}></header>
                <section
                    class={css(styles.container)}
                    style={{ height: state.containerHeight + 'px' }}
                >
                    <article class={css(styles.articleLeft)}></article>
                    <section class={css(styles.center)}></section>
                    <article class={css(styles.articleRight)}></article>
                </section>
            </>
        );
    },
});

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '80px',
        background: 'red',
        minWidth: '1280px',
    },
    container: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '1280px',
    },
    articleLeft: {
        width: '300px',
        height: '100%',
        background: 'pink',
        marginRight: '20px',
    },
    center: {
        width: 'auto',
        height: '100%',
        flex: '1',
        background: 'blue',
    },
    articleRight: {
        width: '300px',
        height: '100%',
        background: 'yellow',
        marginLeft: '20px',
    },
});
