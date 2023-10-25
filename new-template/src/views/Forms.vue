<template>
    <div>
        <Card>
            <template v-slot:header>
                Input fields
            </template>
            <div class="row">
                <div class="col-12">
                    <Input  placeholder="Basic input"  label="Input label"></Input>
                </div>
                <div class="col-12">
                    <Input  placeholder="Basic input with info text" info-text="Some basic informative info text"  label="Input label"></Input>
                </div>
                <div class="col-sm-6">
                    <Input  placeholder="Basic input with error" invalid error-text="Sample error text" >
                        <template v-slot:label>
                            <label class="text-danger">Error input label</label>
                        </template>
                    </Input>
                </div>
                <div class="col-sm-6">
                    <Input  placeholder="Basic input with success" :invalid="false">
                        <template v-slot:label>
                            <label class="text-success">Success input label</label>
                        </template>
                    </Input>
                </div>
                <div class="col-sm-12">
                    <Input v-model="textarea" tag="textarea"  placeholder="Basic textarea">
                        <template v-slot:label>
                            <label>Input with textarea tag</label>
                        </template>
                    </Input>
                </div>
            </div>
        </Card>
        <Card class="mt-5">
            <template v-slot:header>
                Input fields with prepend/append
            </template>
            <div class="row">
                <div class="col-12">
                    <Input  placeholder="Basic input"  label="Input with prepend and icon">
                        <template v-slot:prepend>
                            <div class="input-group-text text-primary" v-html="icons.UserCheck"></div>
                        </template>
                    </Input>
                </div>
                <div class="col-12">
                    <Input  placeholder="Basic input"  label="Input with append and icon">
                        <template v-slot:append>
                            <div class="input-group-text text-primary" v-html="icons.UserCheck"></div>
                        </template>
                    </Input>
                </div>
                <div class="col-12">
                    <Input placeholder="Basic input with info text" info-text="Some basic informative info text"  label="Input with prepend and append">
                        <template v-slot:prepend>
                            <div class="input-group-text text-primary" v-html="icons.UserCheck"></div>
                        </template>
                        <template v-slot:append>
                            <div class="input-group-text text-primary" v-html="icons.UserCheck"></div>
                        </template>
                    </Input>
                </div>
            </div>
        </Card>
        <Card class="mt-5">
            <template v-slot:header>
                Sized fields
            </template>
            <div class="row">
                <div class="col-12">
                    <Input  size="lg" placeholder="Large input"  label="Input label"></Input>
                </div>
                <div class="col-12">
                    <Input  size="sm" placeholder="Small input"  label="Input label"></Input>
                </div>
            </div>
        </Card>
        <Card class="mt-5">
            <template v-slot:header>
                Tag input
            </template>
            <div class="row">
                <div class="col-sm-6">
                   <TagInput
                           label="Tag input label"
                           v-model="tags"
                           info-text="Tag input info text"
                           placeholder="Try to type something and hit enter..."
                   ></TagInput>
                </div>
                <div class="col-sm-6">
                    <p>Tag input value:</p>
                    <pre>{{tags}}</pre>
                </div>
            </div>
        </Card>

        <Card class="mt-5">
            <template slot="header">Checkboxes & Radio inputs</template>
            <div class="row">
                <div class="col-sm-6">
                    <Checkbox v-model="checkboxes" checkbox-value="first">Simple checkbox</Checkbox>
                    <Checkbox v-model="checkboxes" checkbox-value="second">Simple checked checkbox</Checkbox>
                    <Checkbox v-model="checkboxes" checkbox-value="third" disabled>Disabled unchecked checkbox</Checkbox>
                    <Checkbox :value="true" checkbox-value="fourth" disabled >Disabled checked checkbox</Checkbox>
                </div>
                <div class="col-sm-6">
                    <Radio v-model="radio" name="test" radio-value="first">Simple Radio</Radio>
                    <Radio v-model="radio" name="test" radio-value="second" >Simple checked Radio</Radio>
                    <Radio v-model="radio" name="test" radio-value="third" disabled>Disabled unchecked Radio</Radio>
                    <Radio value="last" radio-value="last"  disabled >Disabled checked Radio</Radio>
                </div>
                <div class="col-sm-12">
                    <h5 class="mt-5">Switch checkboxes</h5>
                    <Checkbox show-as-switch v-model="checkboxes" checkbox-value="first">Simple switch checkbox</Checkbox>
                    <Checkbox show-as-switch v-model="checkboxes" checkbox-value="second">Simple switch checked checkbox</Checkbox>
                    <Checkbox show-as-switch v-model="checkboxes" checkbox-value="third" disabled>Disabled switch unchecked checkbox</Checkbox>
                    <Checkbox show-as-switch :value="true" checkbox-value="fourth" disabled >Disabled switch checked checkbox</Checkbox>
                </div>
            </div>
        </Card>

        <Card class="mt-5 mb-5">
            <template slot="header">Select dropdown</template>
            <div class="row">
                <div class="col-6">
                    <h5 class="mb-3">Select for array of strings with <code>is-searchable</code></h5>
                    <Select is-searchable :data="selectData" :selected="selectedItem" @change="selectedItem = $event">
                        <template v-slot:placeholder="{selectedItem}">
                            <span v-if="selectedItem !== null">
                                <span>{{selectedItem}}</span>
                            </span>
                            <span v-else>Select a technology</span>
                        </template>
                        <template v-slot:default="{item}">
                            <span v-if="item === null">Select nothing</span>
                        </template>
                    </Select>
                    <div class="mt-3">Selected item: <pre>{{selectedItem}}</pre></div>
                </div>
                <div class="col-6">
                    <h5 class="mb-3">Select for array of objects</h5>
                    <Select :data="selectData1" @change="selectedItem1 = $event">
                        <template v-slot:placeholder="{selectedItem}">
                            <div v-if="selectedItem !== null" class="d-flex flex-row align-items-center">
                                <img :src="selectedItem.img" class="img-fluid rounded-circle me-4">
                                <div>{{selectedItem.name}}</div>
                            </div>
                            <span v-else>Select something</span>
                        </template>
                        <template v-slot:default="{item, isSelected}">
                            <div class="d-flex flex-row align-items-center text-">
                                <img :src="item.img" class="img-fluid rounded-circle me-4">
                                <div class="w-75">{{item.name}}</div>
                                <div class="small">({{item.role}})</div>
                                <div v-if="isSelected" class="ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="color-gray-500" width="15" height="15" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
                            </div>
                        </template>
                    </Select>
                    <div class="mt-3">Selected item: <pre>{{selectedItem1}}</pre></div>
                </div>
                <div class="col-12 mt-3">
                    <h5 class="mb-3">Select for array of numbers</h5>
                    <Select :data="[1,2,3,4,5,7,8,9,10,11,12,13,14,15]">
                        <template v-slot:placeholder="{selectedItem}">
                            <span>{{selectedItem === null?"Select a number":selectedItem}}</span>
                        </template>
                    </Select>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    import icons from "../helpers/icons";
    export default {
        name: "Forms",

        data(){
            return {
                icons,
                textarea:'',
                tags:['JavaScript', 'Tag-input', 'JSX', 'Vue.js'],
                checkboxes:['second', 'fourth'],
                radio:'first',
                selectData:[null, 'Vue.js', 'Svelte', 'React', 'Angular', "jQuery", 'Ember.js', 'Lodash', 'Bootstrap', 'Laravel'],
                selectData1:[
                    {
                        test:true,
                        img:'https://source.unsplash.com/TAGFNCnw7f4/25x25',
                        name:'John',
                        role:'user',
                    },
                    {
                        test:true,
                        img:'https://source.unsplash.com/0jSd5XW58Ak/25x25',
                        name:'Nick',
                        role:'user',
                    },
                    {
                        test:true,
                        img:'https://source.unsplash.com/JTj_ein28zo/25x25',
                        name:'Tracy',
                        role:'admin',
                    },
                    {
                        test:true,
                        img:'https://source.unsplash.com/kKXBw9Exn30/25x25',
                        name:'Tasty Hotdog',
                        role:'food',
                    },
                ],
                selectedItem:null,
                selectedItem1:null,
            }
        },

        methods:{
        }
    }
</script>

<style scoped>

</style>