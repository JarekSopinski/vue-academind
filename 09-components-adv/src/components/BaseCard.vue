<template>
    <!-- slot renders children of this component -->
    <!-- we can use named slot if we want multiple -->
    <div>
        <header>
            <slot name="header">
                <!-- default slot's content -->
                <h2>The Default</h2>
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>