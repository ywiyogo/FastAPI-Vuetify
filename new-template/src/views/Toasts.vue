<template>
    <Card class="">
        <template slot="header">
            Toast notifications
        </template>
        <div class="row">
            <div class="col-sm-6">
                <Input v-model="toastHeader" label="Notification header title"/>
                <Input tag="textarea" v-model="toastBody" label="Notification body"/>
                <Input v-model="toastAutoHideTimeout" label="Auto hide timeout in milliseconds"
                       info-text="Automatically hides toast after provided amount of milliseconds. If -1 is provided, toast will not be hidden"/>
            </div>
            <div class="col-sm-6">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h5>Positioning</h5>
                    </div>
                    <div class="col-sm-6">
                        <Radio v-model="toastPosition" radio-value="bottom-center">Bottom Center</Radio>
                        <Radio v-model="toastPosition" radio-value="bottom-right">Bottom Right</Radio>
                        <Radio v-model="toastPosition" radio-value="bottom-left">Bottom Left</Radio>
                    </div>
                    <div class="col-sm-6">
                        <Radio v-model="toastPosition" radio-value="top-center">Top Center</Radio>
                        <Radio v-model="toastPosition" radio-value="top-right">Top Right</Radio>
                        <Radio v-model="toastPosition" radio-value="top-left">Top Left</Radio>
                    </div>
                    <div class="col-sm-12 mt-4">
                        <h5>Other settings</h5>
                    </div>
                    <div class="col-sm-12">
                        <Checkbox v-model="toastShowCloseButton">Show close button</Checkbox>
                        <Checkbox v-model="toastCloseOnClick">Close on click</Checkbox>
                    </div>
                    <div class="col-sm-12 mt-4">
                        <h5>Toast notification type</h5>
                        <Select @change="toastType = $event" :data="toastTypes" :selected="toastType" is-searchable>
                            <template v-slot:placeholder="{selectedItem}">
                                <div class="d-flex flex-row justify-content-between align-items-center">
                                    <div :class="[`bg-${selectedItem.toString().toLowerCase()}`, 'rounded', 'me-2']"
                                         style="width: 16px;height: 16px;"></div>
                                    {{selectedItem}}
                                </div>
                            </template>
                            <template v-slot:default="{item}">
                                <div class="d-flex flex-row justify-content-between align-items-center">
                                    <div :class="[`bg-${item.toString().toLowerCase()}`, 'rounded', 'me-2']"
                                         style="width: 16px;height: 16px;"></div>
                                    <span class="me-auto">{{item}}</span>
                                </div>
                            </template>
                        </Select>
                    </div>
                </div>
                <Button @click="showToast">Show toast</Button>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Toasts",

        data() {
            return {
                toastHeader: 'Notification title',
                toastBody: 'Notification body text',
                toastPosition: 'top-center',
                toastAutoHideTimeout: 5000,
                toastShowCloseButton: true,
                toastCloseOnClick: false,
                toastType: 'default',

                toastTypes: [
                    'default',
                    'primary',
                    'secondary',
                    'success',
                    'info',
                    'warning',
                    'danger',
                    'light',
                    'dark',
                ],
            }
        },

        methods: {
            showToast() {
                this.$toasts.add({
                    body: this.toastBody,
                    title: this.toastHeader,
                    position: this.toastPosition,
                    timeout: this.toastAutoHideTimeout,
                    showCloseButton: this.toastShowCloseButton,
                    closeOnClick: this.toastCloseOnClick,
                    type: this.toastType,
                });
            },
        }
    }
</script>

<style  scoped lang="scss">
    .tooltip-showcase {
        .btn {
            margin-right: 10px;
            margin-top: 5px;
        }
    }
</style>