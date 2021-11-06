import { defineComponent } from 'vue';
import { StyleSheet, css } from 'aphrodite';
export default defineComponent({
    name: 'Editor',
    setup() {
        return () => (
            <section class={css(styles.container)}>
                <header class={css(styles.header)}>
                    <div>
                        <img src={require('@/assets/images/editor-header.png')} alt="" />
                    </div>
                    <h3 class={css(styles.headerTitle)}>页面标题</h3>
                </header>
                <div class={css(styles.content)}></div>
            </section>
        );
    },
});
const styles = StyleSheet.create({
    container: {
        width: '450px',
        margin: '0 auto',
        height: '100%',
        background: '#f5f5f5',
        boxShadow: '0px 5px 20px #ccc',
        borderRadius: '15px',
        overflow: 'hidden',
    },
    header: {
        height: '98px',
        position: 'relative',
    },
    headerTitle: {
        width: '100%',
        position: 'absolute',
        bottom: '15px',
        textAlign: 'center',
        fontSize: '20px',
        letterSpacing: '1.5px',
    },
    content: {
        height: 'calc(100% - 98px)',
    },
});
