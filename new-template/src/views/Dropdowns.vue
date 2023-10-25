<template>
    <div>
        <Card :body-classes="['d-flex']">
            <template slot="header">Dropdown examples</template>
            <Dropdown class="me-5">
                <template slot="button">
                    <Button type="primary" still>Simple</Button>
                </template>
                <div>
                    <div class="dropdown-item">Item1</div>
                    <div class="dropdown-item">Item2</div>
                    <div class="dropdown-item">Item3</div>
                </div>
            </Dropdown>
            <Dropdown class="me-5" :menu-classes="['p-4', 'dropdown-menu-lg']" manual-close ref="dropdown1">
                <template slot="button">
                    <Button type="secondary" still>Manually closable</Button>
                </template>
                <div>
                    <div class="mb-3">
                        <b>A dropdown with a form</b>
                    </div>
                    <form>
                        <Input type="text" label="Name" placeholder="Enter your name" />
                        <Input type="text" label="Email" placeholder="Enter your name" />
                        <Input type="text" :valid="false" error-text="Some random error text" label="Error message" placeholder="Enter your name" />
                        <Button class="me-2" type="info" @click.prevent="$refs.dropdown1.close()">Save</Button>
                        <Button type="danger" @click.prevent="$refs.dropdown1.close()">Close</Button>
                    </form>
                </div>

            </Dropdown>
            <Dropdown class="me-5">
                <template slot="button">
                    <Button type="success" still>With header</Button>
                </template>
                <div>
                    <div class="dropdown-header">Available dropdown menu sizes</div>
                    <div class="dropdown-item">dropdown-menu-xs: 160px</div>
                    <div class="dropdown-item">dropdown-menu-sm: 200px</div>
                    <div class="dropdown-item">dropdown-menu-md: 300px</div>
                    <div class="dropdown-item">dropdown-menu-lg: 430px</div>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-item"><b>Last item</b></div>
                </div>
            </Dropdown>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "Dropdowns",
    }
</script>

<style scoped>

</style>