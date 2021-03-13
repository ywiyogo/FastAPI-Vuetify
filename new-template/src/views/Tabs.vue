<template>
    <Card class="">
        <template slot="header">Tab Navs</template>

        <h5>Tab navs with full width tabs</h5>
        <Nav nav-fill :init-active-tab="1">
            <NavItem title="First tab">
                <div>
                    <h2>This is the first tab</h2>
                </div>
            </NavItem>
            <NavItem title="second tab">
                <div>
                    <h2>This is the second tab</h2>
                </div>
            </NavItem>
            <NavItem title="Third tab">
                <div>
                    <h2>This is the third tab</h2>
                </div>
            </NavItem>
        </Nav>

        <h5 class="mt-5">Tab navs with auto width tabs</h5>
        <Nav :init-active-tab="1">
            <NavItem title="First tab">
                <div>
                    <h2>This is the first tab</h2>
                </div>
            </NavItem>
            <NavItem title="second tab">
                <div>
                    <h2>This is the second tab</h2>
                </div>
            </NavItem>
            <NavItem title="Third tab">
                <div>
                    <h2>This is the third tab</h2>
                </div>
            </NavItem>
        </Nav>

        <h5 class="mt-5">Tab navs with column placed tabs</h5>
        <Nav :init-active-tab="1" nav-column>
            <NavItem title="First tab">
                <div>
                    <h2>This is the first tab</h2>
                </div>
            </NavItem>
            <NavItem title="second tab">
                <div>
                    <h2>This is the second tab</h2>
                </div>
            </NavItem>
            <NavItem title="Third tab">
                <div>
                    <h2>This is the third tab</h2>
                    <p>
                        It has some random text and small pagination
                    </p>
                    <div>
                        <Pagination size="sm" :pages="25" v-model="fakePagination">
                            <span slot="next">Next</span>
                            <span slot="previous">Prev</span>
                        </Pagination>
                    </div>
                </div>
            </NavItem>
        </Nav>
    </Card>

</template>

<script>
    export default {
        name: "Tabs",

        data() {
            return {
                fakePagination: 1,
            }
        },
    }
</script>

<style scoped>

</style>