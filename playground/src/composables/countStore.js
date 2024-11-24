import { ref } from 'vue';

export const globalCount = ref(200);
const incrementGlobalCount = () => {
    globalCount.value+= 1000;
};

export function useCount() {
    const localCount = ref(50);
    const incrementLocalCount = () => {
        localCount.value+= 80;
    };
    return {
        globalCount,
        localCount,
        incrementLocalCount,
        incrementGlobalCount
    }
}

