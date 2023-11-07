<template>

    <BaseCard>
        <BaseButton 
            @click="setSelectedTab('stored-resources')"
            :mode="storedResButtonMode"
        >
            Stored Resources
        </BaseButton>
        <BaseButton 
            @click="setSelectedTab('add-resource')"
            :mode="addResButtonMode"
            >
            Add Resource
        </BaseButton>
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
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>