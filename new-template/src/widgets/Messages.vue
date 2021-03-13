<template>
    <Card body-classes="p-0">
        <template #header>Latest sales</template>
        <div class="p-4 hover-bg-gray-100" v-for="item in demo">
            <div class="d-flex flex-row align-items-center justify-content-between">
                <Badge inverse class="p-2" pill>{{item.time}}</Badge>
                <span class="color-gray-600 font-size-75 fw-bold">{{item.via}}</span>
            </div>
            <div class="d-flex flex-row mt-3 align-items-center justify-content-start">
                <img :src="item.img" class="rounded-circle" style="max-width: 30px;">
                <div class="ms-3">
                    <div class="font-size-100 ">{{item.name}}</div>
                    <div class="font-size-75 color-gray-600">{{item.items}}</div>
                </div>
                <div class="font-size-150 ms-auto text-success">{{item.amount}}</div>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Messages",

        data(){
            return {
                demo:[
                    {
                        time:'3 seconds ago',
                        img:'https://source.unsplash.com/kKXBw9Exn30/30x30',
                        amount:'$75',
                        name:'Jane Marriott',
                        items:'7 items',
                        via: 'via E-shop'
                    },
                    {
                        time:'16 minutes ago',
                        img:'https://source.unsplash.com/6anudmpILw4/30x30',
                        amount:'$96',
                        name:'Jack Jill',
                        items:'2 items',
                        via: 'via Mobile App'
                    },
                    {
                        time:'1 day ago',
                        img:'https://source.unsplash.com/7Sz71zuuW4k/30x30',
                        amount:'$25',
                        name:'David Bender',
                        items:'1 item',
                        via: 'via Mobile App'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>