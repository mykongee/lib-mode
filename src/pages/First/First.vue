<template>
    <div class="first-container">
        <h1>First Title</h1>
        <ul>
            <li>First-item-1</li>
            <li>First-item-2</li>
            <li>First-item-3</li>
            <li>First-item-4</li>
        </ul>
        <button @click="onClick">
            First button
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        onClick() {
            alert('clicked!');
        }
    }
}
</script>

<style scoped>
    .first-container {
        border: 1px aquamarine solid;
    }
</style>