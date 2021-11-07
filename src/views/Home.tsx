import { defineComponent, onMounted, reactive, ref, Ref } from 'vue';
import List from '@/components/layouts/List';
import Editor from '@/components/layouts/Editor';
import Preview from '@/components/layouts/Preview';
import Attribute from '@/components/layouts/Attribute';
import Header from '@/components/layouts/Header';
import { StyleSheet, css } from 'aphrodite/no-important';
export default defineComponent({
    name: 'Home',
    components: {
        List,
        Editor,
        Preview,
        Attribute,
        Header,
    },
    setup() {
        const state = reactive({
            containerHeight: 0,
            currentPreviewComponent: '',
        });
        const header: Ref<HTMLElement | null> = ref(null);
        onMounted(() => {
            state.containerHeight = window.innerHeight - header!.value!.clientHeight;
        });
        const setCurrentPreviewComponent = (componentName: string) => {
            console.log(componentName);
            state.currentPreviewComponent = componentName;
            console.log(state.currentPreviewComponent);
        };
        return () => (
            <>
                <header class={css(styles.header)} ref={header}>
                    <Header />
                </header>
                <section
                    class={css(styles.container)}
                    style={{ height: state.containerHeight + 'px' }}
                >
                    <article class={css(styles.articleLeft)}>
                        <List
                            onEventSelect={(name: string) => {
                                setCurrentPreviewComponent(name);
                            }}
                        />
                    </article>
                    <section class={css(styles.center)}>
                        <Preview componentName={state.currentPreviewComponent} />
                        <Editor />
                    </section>
                    <article class={css(styles.articleRight)}>
                        <Attribute />
                    </article>
                </section>
            </>
        );
    },
});

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '80px',
        minWidth: '1920px',
    },
    container: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '1920px',
    },
    articleLeft: {
        width: '280px',
        height: '100%',
        marginRight: '20px',
    },
    center: {
        width: 'auto',
        height: '100%',
        flex: '1',
        padding: '20px 0 100px',
        background: '#eee',
        overflowY: 'scroll',
        display: 'flex',
        justifyContent: 'space-around',
    },
    articleRight: {
        width: '420px',
        height: '100%',
        marginLeft: '20px',
    },
});
