<template>

    <BaseCard>
        <BaseButton @click="setSelectedTab('stored-resources')">Stored Resources</BaseButton>
        <BaseButton @click="setSelectedTab('add-resource')">Add Resource</BaseButton>
    </BaseCard>

    <component :is="selectedTab">

    </component>

</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>