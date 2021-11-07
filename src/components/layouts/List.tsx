import { defineComponent, ref, onMounted } from 'vue';
import { componentList } from '@/config/components';
import { StyleSheet, css } from 'aphrodite/no-important';
export default defineComponent({
    name: 'List',
    emits: ['eventSelect'],
    setup(props, context) {
        const selectedIndex = ref(0);
        const handleListClick = (index: number) => {
            selectedIndex.value = index;
            context.emit('eventSelect', componentList[index].componentName);
        };
        onMounted(() => {
            handleListClick(0);
        });
        return () => (
            <>
                <h3 class={css(styles.title)}>组件列表</h3>
                <ul class={css(styles.list)}>
                    {componentList.map((item, index) => {
                        return (
                            <li
                                class={css(styles.listItem)}
                                style={{
                                    color: selectedIndex.value === index ? '#fa2c19' : '#000',
                                }}
                                onClick={() => handleListClick(index)}
                            >
                                <span class={css(styles.listItemText)}>{item.name}</span>
                                <span>{item.zhName}</span>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    },
});

const styles = StyleSheet.create({
    title: {
        margin: '0 20px 20px',
    },
    list: {
        textIndent: '30px',
        overflow: 'hidden',
    },
    listItem: {
        margin: '30px 0',
        cursor: 'pointer',
        span: {
            color: 'Red',
        },
    },
    listItemText: {
        fontWeight: 'bold',
        marginRight: '15px',
    },
});
