<template>
    <div>
        <Card>
            <template slot="header">Badges</template>
            <div>
                <h5>Simple inline badges</h5>
                <Badge type="default">A default badge</Badge>
                <Badge type="primary">A primary badge</Badge>
                <Badge type="secondary">A secondary badge</Badge>
                <Badge type="success">A success badge</Badge>
                <Badge type="info">A info badge</Badge>
                <Badge type="warning">A warning badge</Badge>
                <Badge type="danger">A danger badge</Badge>
                <Badge type="light">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Simple pill badges</h5>
                <Badge pill type="default">A default badge</Badge>
                <Badge pill type="primary">A primary badge</Badge>
                <Badge pill type="secondary">A secondary badge</Badge>
                <Badge pill type="success">A success badge</Badge>
                <Badge pill type="info">A info badge</Badge>
                <Badge pill type="warning">A warning badge</Badge>
                <Badge pill type="danger">A danger badge</Badge>
                <Badge pill type="light">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Link badges</h5>
                <Badge type="default" link="#">A default badge</Badge>
                <Badge type="primary" link="#">A primary badge</Badge>
                <Badge type="secondary" link="#">A secondary badge</Badge>
                <Badge type="success" link="#">A success badge</Badge>
                <Badge type="info" link="#">A info badge</Badge>
                <Badge type="warning" link="#">A warning badge</Badge>
                <Badge type="danger" link="#">A danger badge</Badge>
                <Badge type="light" link="#">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Link pill badges</h5>
                <Badge pill type="default" link="#">A default badge</Badge>
                <Badge pill type="primary" link="#">A primary badge</Badge>
                <Badge pill type="secondary" link="#">A secondary badge</Badge>
                <Badge pill type="success" link="#">A success badge</Badge>
                <Badge pill type="info" link="#">A info badge</Badge>
                <Badge pill type="warning" link="#">A warning badge</Badge>
                <Badge pill type="danger" link="#">A danger badge</Badge>
                <Badge pill type="light" link="#">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Link inverse badges</h5>
                <Badge inverse type="default" link="#">A default badge</Badge>
                <Badge inverse type="primary" link="#">A primary badge</Badge>
                <Badge inverse type="secondary" link="#">A secondary badge</Badge>
                <Badge inverse type="success" link="#">A success badge</Badge>
                <Badge inverse type="info" link="#">A info badge</Badge>
                <Badge inverse type="warning" link="#">A warning badge</Badge>
                <Badge inverse type="danger" link="#">A danger badge</Badge>
                <Badge inverse type="light" link="#">A light badge</Badge>
            </div>
        </Card>
        <Card class="mt-5">
            <template slot="header">Pagination</template>
            <h5>Simple Pagination with 100 pages</h5>
            <Pagination :pages="100" v-model="selectedPage1">
                <span slot="next">Next</span>
                <span slot="previous">Prev</span>
            </Pagination>
            <h5 class="mt-5">Small Pagination with 100 pages</h5>
            <Pagination size="sm" :pages="100" v-model="selectedPage2">
                <span slot="next">Next</span>
                <span slot="previous">Prev</span>
            </Pagination>
            <!--            <h5 class="mt-5">Large Pagination with 100 pages</h5>-->
            <!--            <Pagination size="lg" :pages="100" v-model="selectedPage3">-->
            <!--                <span slot="next">Next</span>-->
            <!--                <span slot="previous">Prev</span>-->
            <!--            </Pagination>-->

            <h5 class="mt-5">Simple Pagination with Icons</h5>
            <Pagination :pages="100" v-model="selectedPage4">
                <span slot="previous"><fa icon="chevron-left"/></span>
                <span slot="next"><fa icon="chevron-right"/></span>
            </Pagination>
            <h5 class="mt-5">Simple Pagination with Icons and no first and last pages</h5>
            <Pagination :pages="100" v-model="selectedPage5" :show-first-page="false" :show-last-page="false">
                <span slot="previous"><fa icon="chevron-left"/></span>
                <span slot="next"><fa icon="chevron-right"/></span>
            </Pagination>
            <h5 class="mt-5">Simple Pagination with Icons and disabled pages</h5>
            <Pagination :pages="100" v-model="selectedPage6" :disabled-pages="[14, 16]">
                <span slot="previous"><fa icon="chevron-left"/></span>
                <span slot="next"><fa icon="chevron-right"/></span>
            </Pagination>
        </Card>
        <Card class="mt-5 progresses">
            <template slot="header">Progress bars</template>

            <h5>Simple progress bars</h5>

            <Badge type="default">Default progress bar: {{progress.default}}%</Badge>
            <ProgressBar type="default" :progress="progress.default"/>

            <Badge type="primary">Primary progress bar: {{progress.primary}}%</Badge>
            <ProgressBar type="primary" :progress="progress.primary"/>

            <Badge type="secondary">Secondary progress bar: {{progress.secondary}}%</Badge>
            <ProgressBar type="secondary" :progress="progress.secondary"/>

            <Badge type="success">Success progress bar: {{progress.success}}%</Badge>
            <ProgressBar type="success" :progress="progress.success"/>

            <Badge type="info">Info progress bar: {{progress.info}}%</Badge>
            <ProgressBar type="info" :progress="progress.info"/>

            <Badge type="warning">Warning progress bar: {{progress.warning}}%</Badge>
            <ProgressBar type="warning" :progress="progress.warning"/>

            <Badge type="danger">Danger progress bar: {{progress.danger}}%</Badge>
            <ProgressBar type="danger" :progress="progress.danger"/>

            <Button @click="shuffleProgress" type="secondary" size="sm">Shuffle</Button>
        </Card>
        <Card class="mt-5">
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
        <Card class="mt-5 tooltip-showcase">
            <template slot="header">Some tooltips</template>
            <Button type="success" v-tooltip="{id:'a2', placement:'left'}">Tooltip left</Button>
            <Button type="primary" v-tooltip="{id:'a1', placement:'top'}">Tooltip top</Button>
            <Button type="info" v-tooltip="{id:'a4', placement:'bottom'}">Tooltip bottom</Button>
            <Button type="secondary" v-tooltip="{id:'a3', placement:'right'}">Tooltip right</Button>

            <Tooltip id="a1">
                <b>Fancy tooltip top</b>
            </Tooltip>
            <Tooltip id="a2">
                <b>Fancy tooltip left</b>
            </Tooltip>
            <Tooltip id="a3">
                <b>Fancy tooltip right</b>
            </Tooltip>
            <Tooltip id="a4">
                <b>Fancy tooltip bottom</b>
                <p>You can put any html in tooltip</p>
                <Button class="mb-2" size="sm" type="default">Even components</Button>
            </Tooltip>
        </Card>
        <Card class="mt-5">
            <template slot="header">Breadcrumb</template>
            <h5>Breadcrumb with last page active</h5>
            <Breadcrumb :items="[
                {
                    page:'Home',
                    link:'/'
                },
                {
                    page:'Product',
                    link: '/product'
                },
                {
                    page:'Checkout',
                    link: '/checkout',
                    active:true,
                },
            ]"/>
            <h5 class="mt-5">Breadcrumb with no page active</h5>
            <Breadcrumb :items="[
                {
                    page:'Home',
                    link:'/'
                },
                {
                    page:'First page',
                    link: '/first-page'
                },
                {
                    page:'Second page',
                    link: '/second-page',
                },
                {
                    page:'Page without a link',
                },
                {
                    page:'Last page',
                    link: '/last-page',
                },
            ]"/>
        </Card>

        <Card class="mt-5">
            <template slot="header">Collapse</template>

            <p class="mb-3">Collapse with <code>v-collapse</code> directive</p>
            <Button v-collapse="'collapse'">
                Collapse
            </Button>
            <Collapse id="collapse">
                <Card class="mt-4" slot="default">
                    <template slot="header">
                        Collapsed card
                        <Badge type="secondary" inverse>It's cool</Badge>
                    </template>
                    Some great collapse stuff
                    <Button v-tooltip="{id:'tooltip', placement:'top'}" type="secondary" size="sm">Hover over me
                    </Button>
                    <Tooltip id="tooltip">
                        Tooltip inside collapse
                    </Tooltip>
                </Card>
            </Collapse>

            <p class="mb-3 mt-5">Collapse with manual control via <code>$refs</code> and <code>toggle()</code> method
            </p>
            <Button @click="$refs['referenced-collapse'].toggle()">
                Collapse
            </Button>
            <Collapse ref="referenced-collapse">
                <Card class="mt-4" slot="default">
                    <template slot="header">
                        Collapsed card
                        <Badge type="secondary" inverse>It's cool</Badge>
                    </template>
                    Some great collapse stuff
                    <Button v-tooltip="{id:'tooltip2', placement:'top'}" type="secondary" size="sm">Hover over me
                    </Button>
                    <Tooltip id="tooltip2">
                        Tooltip inside collapse
                    </Tooltip>
                </Card>
            </Collapse>
        </Card>

        <Card class="mt-5">
            <template slot="header">
                Accordion example
            </template>
            <h5 class="mt-1 mb-3">Simple accordion</h5>
            <Accordion>
                <AccordionItem>
                    <b slot="default">Test accordion item</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 1
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 2</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 2
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 3</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 3
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 4</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 4
                        </h1>
                    </div>
                </AccordionItem>
            </Accordion>
            <h5 class="mt-5  mb-3">Accordion with always one item open</h5>
            <Accordion always-one>
                <AccordionItem>
                    <b slot="default">Test accordion item</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 1
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 2</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 2
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 3</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 3
                        </h1>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <b slot="default">Test accordion item 4</b>
                    <div slot="body">
                        <h1>
                            Collapsed body 4
                        </h1>
                        <Accordion>
                            <AccordionItem>
                                <b slot="default">Accordion inside accordion</b>
                                <div slot="body">
                                    It's real
                                </div>
                            </AccordionItem>
                            <AccordionItem>
                                <b slot="default">Accordion inside accordion</b>
                                <div slot="body">
                                    It's real, I am not lying!
                                    <Accordion>
                                        <AccordionItem>
                                            <b slot="default">Clickable 1</b>
                                            <b slot="body">Clickable 1 content</b>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <b slot="default">Clickable 2</b>
                                            <b slot="body">Clickable 2 content</b>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </AccordionItem>
            </Accordion>
        </Card>

        <Card class="mt-5" body-classes="">
            <template v-slot:header>
                <div class="d-flex align-items-center justify-content-between">
                    <span>Data Tables</span>
                    <Input v-model="dataTableSearch" size="sm" placeholder="Filter table data" class="mb-0 w-25"/>
                </div>
            </template>
            <div>
                <DataTable class="table-bordered" show-filter-buttons :data="dataTable" :headers="dataTableHeaders"
                           :search-keyword="dataTableSearch" :per-page="dataTablePerPage" :current-page="dataTablePage">
                    <template v-slot:default="{row, rowKey, rowKeyViewport}">
                        <Cell
                                v-for="(cellData, key) in row"
                                :cell-classes="[
                                    // Center
                                    ['selected', 'status'].indexOf(key.toString().toLowerCase()) !== -1?'d-flex justify-content-center':'',
                                ]"
                                :class="[
                                    {'bg-info-light':dataTable[rowKey].Selected===true},
                                ]">
                            <Badge v-if="key.toString().toLowerCase() === 'status' || key === 4" pill :type="getPillByStatus(cellData)">
                                {{cellData}}
                            </Badge>
                            <Checkbox v-else-if="key.toString().toLowerCase() === 'selected'"
                                      v-model="dataTable[rowKey].Selected"></Checkbox>
                            <span v-else>{{cellData}}</span>
                        </Cell>
                    </template>
                </DataTable>
            </div>
            <div class="d-flex flex-wrap pt-3 pb-4 align-items-end mx-4 justify-content-end">

                <div class="me-4">
                    <p class="mb-2 small">Rows per page</p>
                    <Select  :data="[5, 10, 15, 25, 100]" :selected="dataTablePerPage"
                            @change="dataTablePerPage = $event,dataTablePage = 1"></Select>
                </div>
                <div>
                    <Pagination v-model="dataTablePage" :pages="Math.ceil(dataTable.length/dataTablePerPage)">
                        <template v-slot:next>
                            Next
                        </template>
                        <template v-slot:previous>
                            Prev
                        </template>
                    </Pagination>
                </div>
            </div>
        </Card>

        <Card class="mt-5">
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

        <Card class="mt-5">
            <template v-slot:header>
                Modals
            </template>
            <div>
                <Modal :open="showModal" @backdrop-clicked="showModal = false">
                    <div class="modal-header">
                        <h5 class="modal-title m-0">Modal title</h5>
                        <button @click="showModal = false" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><fa icon="times"></fa></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here. You will find some great content here inside <code>.modal-body</code> element</p>
                        <p>
                            Modals are fully customizable. You can put any valid html or other components inside the default slot.
                            Default slot content will be wrapped inside <code>.modal-content</code> which you can customize via <code>saas</code> files
                        </p>
                        <p>
                            You have to manage the display of modals manually. <code>@backdrop-clicked</code> event will be emitted when user clicks on modal backdrop.
                            You can use this event to hide modal, or ignore the event if you want to manage display of modal in another way.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary me-3" data-dismiss="modal" @click="showModal = false">Close Modal</button>
                        <button type="button" class="btn btn-primary">This button does nothing</button>
                    </div>
                </Modal>
                <Modal class="modal-xl" :open="showModal2" @backdrop-clicked="showModal2 = false">
                    <div class="modal-header"><h5 class="modal-title m-0">Real big one</h5></div>
                    <div class="modal-body">
                        This is an xl modal with <code>.modal-xl</code> applied to <code>Modal</code> component
                        <div>Close it by clicking outside the modal content</div>
                    </div>
                </Modal>
                <Modal :open="showModal3" @backdrop-clicked="showModal3 = false">
                    <div class="modal-header">
                        <h5 class="modal-title m-0">Really long content one</h5>
                        <button @click="showModal3 = false" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><fa icon="times"></fa></span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula vel massa at semper. Vestibulum et nulla et neque elementum commodo. Quisque pretium quis ligula at semper. Maecenas dignissim quis urna in finibus. Donec posuere tempus arcu, ut blandit sapien faucibus vitae. Sed tincidunt turpis non est euismod vulputate. Phasellus condimentum risus nec lorem luctus, sed dictum quam dignissim. Nam et ligula eros. Maecenas tortor justo, ultricies eget molestie at, finibus eu magna. Sed eu dapibus justo, id scelerisque elit. Suspendisse congue massa vitae velit lobortis, in congue diam bibendum. In at molestie magna. Morbi maximus quam eget facilisis bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit, purus nec tincidunt egestas, quam felis porttitor odio, eget feugiat dui purus nec purus. Nam erat ligula, tempus vel arcu eget, porta dapibus augue.

                        Aliquam erat volutpat. Donec eget est in est mollis faucibus. Aenean vitae pharetra lectus. Praesent ullamcorper ipsum id diam suscipit, in eleifend ante hendrerit. Aenean euismod condimentum purus et posuere. Sed et magna nibh. Mauris imperdiet sodales bibendum. Vivamus faucibus nulla eu ipsum bibendum, at viverra massa ullamcorper. Praesent non massa viverra, congue quam maximus, interdum tellus. Maecenas consectetur nulla augue, in dignissim leo aliquet sed. Integer in nisi volutpat, viverra elit quis, maximus nunc. Curabitur vitae tortor sed nisi porttitor sollicitudin.

                        Cras viverra tincidunt tellus, eu aliquam lorem pellentesque id. Maecenas ac erat bibendum, suscipit mauris eu, faucibus libero. Quisque sollicitudin viverra commodo. Donec facilisis ullamcorper leo, sit amet finibus enim tempus et. Praesent eros diam, tempus vitae ipsum ut, maximus dapibus ante. Fusce a fermentum diam. Nulla sit amet dictum enim, vitae faucibus tellus. Curabitur luctus convallis felis, vel gravida metus ultricies in. Proin accumsan tellus leo, id mattis tellus eleifend in. Morbi auctor dictum tincidunt. Proin tempus dictum consectetur. In hac habitasse platea dictumst. Aenean imperdiet nunc at est blandit, eu maximus justo dictum. Aliquam erat volutpat. Donec condimentum tristique ullamcorper.

                        Fusce dignissim nisi non nulla interdum blandit. Integer varius rhoncus elit, ac accumsan turpis rhoncus non. Sed vestibulum laoreet odio sed finibus. Mauris porttitor nibh orci, vitae ornare orci blandit nec. Sed lectus eros, bibendum ac ante non, rhoncus sagittis felis. Praesent lobortis, mauris sed ornare laoreet, purus odio maximus dolor, et tincidunt orci libero in nulla. Pellentesque venenatis libero eu diam dapibus rhoncus. Aliquam erat volutpat. Suspendisse auctor condimentum ligula ac commodo.

                        Quisque molestie magna a libero volutpat pellentesque. Maecenas bibendum turpis nec nunc rhoncus, eu blandit ex cursus. Mauris quis volutpat mi. Curabitur quis accumsan risus. Aenean rutrum augue libero, sed laoreet sem consequat eu. Phasellus imperdiet porta ornare. Phasellus non pharetra felis. Fusce et luctus dui. Etiam mollis lacus at urna porta tempus. Nulla lobortis, sapien non malesuada auctor, tortor tellus porttitor elit, in placerat eros lacus ut leo. Morbi id mattis nibh.
                    </div>
                </Modal>
                <Button class="me-3" @click="showModal = !showModal">Click me</Button>
                <Button class="me-3" @click="showModal3 = !showModal3">Modal with really long content</Button>
                <Button @click="showModal2 = !showModal2">Launch XL modal</Button>
            </div>
        </Card>
    </div>
</template>

<script>

    // Uses directives/plugin.js
    import Tooltip from "../components/tooltip/Tooltip";
    import tableData from '@/data/tables.js'

    export default {
        name: "Components",
        components: {Tooltip},
        data() {
            return {
                selectedPage1: 30,
                selectedPage2: 50,
                selectedPage3: 40,
                selectedPage4: 40,
                selectedPage5: 15,
                selectedPage6: 15,
                progress: {
                    default: 10,
                    primary: 20,
                    secondary: 30,
                    success: 40,
                    info: 50,
                    warning: 60,
                    danger: 70,
                },
                fakePagination: 1,

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

                dataTableHeaders: [
                    null,
                    'Name',
                    'Surname',
                    'Phone',
                    'Website',
                    'Status',
                    'Income',
                ],
                dataTable: tableData,
                dataTableSearch: '',
                dataTablePage: 1,
                dataTablePerPage: 10,

                showModal:false,
                showModal2:false,
                showModal3:false,
            };
        },

        methods: {
            shuffleProgress() {
                Object.keys(this.progress).forEach((key) => {
                    this.progress[key] = parseInt(Math.random() * 100);
                });
            },

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

            // Presentational helper
            getPillByStatus(cellData) {
                switch (cellData) {
                    case 'Lead':
                        return 'info';
                    case 'Ongoing':
                        return 'warning';
                    case 'Closed':
                        return 'success';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .badge {
        margin-right: 10px;
    }

    .progress {
        margin-bottom: 2rem;
    }

    .progresses {
        .badge {
            margin-bottom: 0.5rem;
        }
    }

    .tooltip-showcase {
        .btn {
            margin-right: 10px;
            margin-top: 5px;
        }
    }
</style>