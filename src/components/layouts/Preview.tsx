import { defineComponent, PropType, resolveComponent, watchEffect, reactive } from 'vue';
import { StyleSheet, css } from 'aphrodite/no-important';

export default defineComponent({
    name: 'Preview',
    props: {
        componentName: {
            type: String as PropType<string>,
        },
    },
    components: {},
    setup(props) {
        const state = reactive({
            component: resolveComponent(''),
        });
        watchEffect(() => {
            state.component = resolveComponent(props.componentName as string);
            console.log(state.component);
        });
        return () => (
            <section class={css(styles.container)}>
                <header class={css(styles.header)}>
                    <div>
                        <img src={require('@/assets/images/editor-header.png')} alt="" />
                    </div>
                    <h3 class={css(styles.headerTitle)}>组件预览</h3>
                </header>
                <div class={css(styles.content)}></div>
            </section>
        );
    },
});
const styles = StyleSheet.create({
    container: {
        width: '375px',
        margin: '0 auto',
        height: '100%',
        background: '#f5f5f5',
        boxShadow: '0px 5px 20px #ccc',
        borderRadius: '15px',
        overflow: 'hidden',
    },
    header: {
        height: '105px',
        position: 'relative',
    },
    headerTitle: {
        width: '100%',
        position: 'absolute',
        bottom: '35px',
        textAlign: 'center',
        fontSize: '20px',
        letterSpacing: '1.5px',
    },
    content: {
        height: 'calc(100% - 105px)',
    },
});
