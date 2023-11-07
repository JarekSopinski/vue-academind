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

    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>

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
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
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
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId) {
            /**
             * This will not work - array won't be updated in child components
             * because we're creating new array.
             * 
             * this.storedResources = this.storedResources.filter(res => res.id !== resId);
             * 
             * Instead, we've to modify original array:
             */
             const resIndex = this.storedResources.findIndex(res => res.id === resId);
             this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>