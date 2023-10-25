<template>
    <Card body-classes="p-0">
        <template #header>Task list</template>
        <template #default>
            <div :class="['p-4', , {'bg-gray-100':task.checkbox}]" v-for="task in tasks">
                <div :class="['row d-flex align-items-center ']" >
                    <div class="col-sm-2 d-flex flex-row align-items-center mb-3 mb-sm-0">
                        <Checkbox v-model="task.checkbox"/>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ms-3 stroke-default" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.25"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                            <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l 9 9" />
                            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                            <line x1="17" y1="17" x2="17" y2="17.01" />
                        </svg>
                    </div>
                    <div class="col-8">
                        <div class="row d-flex flex-row align-items-sm-center align-items-start">
                            <div class="col-10">
                                <div class="font-size-100">{{task.title}}</div>
                                <div class="font-size-75 color-gray-600">{{task.subtext}}</div>
                            </div>
                            <div class="col-2 my-sm-0 my-2">
                                <Badge inverse :type="task.badgeType" pill>{{task.badgeText}}</Badge>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 col-4 d-flex justify-content-end">
                        <Dropdown :popper-config="{placement:'bottom-end'}">
                            <template #button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default cursor-pointer" width="30" height="30" viewBox="0 0 24 24" stroke-width="2"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <circle cx="5" cy="12" r="1" />
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="19" cy="12" r="1" />
                                </svg>
                            </template>
                            <div class="dropdown-item">
                                Delete
                            </div>
                            <div class="dropdown-item">
                                Mark as done
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>

<script>
    export default {
        name: "TaskList",

        data(){
            return {
                tasks:[
                    {
                        title: 'Clean up the codebase',
                        subtext: 'Deadline: Jan 21st',
                        badgeType: 'danger',
                        badgeText: 'Urgent',
                        checkbox: false,
                    },
                    {
                        title: 'Demo day',
                        subtext: 'Deadline: May 4th',
                        badgeType: 'success',
                        badgeText: 'Important',
                        checkbox: false,
                    },
                    {
                        title: 'Hire employees',
                        subtext: 'Deadline: Jul 14th',
                        badgeType: 'info',
                        badgeText: 'Required',
                        checkbox: false,
                    },
                    {
                        title: 'IPO day',
                        subtext: 'Deadline: October 21st',
                        badgeType: 'success',
                        badgeText: 'Success',
                        checkbox: false,
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>