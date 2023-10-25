<template>
    <div>
        <Card  body-classes="">
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
                                    {'bg-gray-200':dataTable[rowKey].Selected===true},
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

                <div class="me-sm-4 mb-sm-0 mb-3">
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
        <!-- Example 2 -->
        <Card body-classes="p-0" class="mt-5">
            <template v-slot:header>
                <div class="d-flex align-items-center justify-content-between">
                    <span>Data Tables - card body without padding and borderless table</span>
                    <Input v-model="dataTableSearch" size="sm" placeholder="Filter table data" class="mb-0 w-25"/>
                </div>
            </template>
            <div>
                <DataTable  show-filter-buttons :data="dataTable" :headers="dataTableHeaders"
                           :search-keyword="dataTableSearch" :per-page="dataTablePerPage" :current-page="dataTablePage">
                    <template v-slot:default="{row, rowKey, rowKeyViewport}">
                        <Cell
                                v-for="(cellData, key) in row"
                                :cell-classes="[
                                    // Center
                                    ['selected', 'status'].indexOf(key.toString().toLowerCase()) !== -1?'d-flex justify-content-center':'',
                                ]"
                                :class="[
                                    {'bg-gray-200':dataTable[rowKey].Selected===true},
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

                <div class="me-sm-4 mb-sm-0 mb-3">
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
    </div>
</template>

<script>

    import tableData from '@/data/tables.js'

    export default {
        name: "Tables",
        data(){
            return {
                dataTableHeaders: [
                    null,
                    'Name',
                    'Email',
                    'Phone',
                    'Website',
                    'Status',
                    'Income',
                ],
                dataTable: tableData,
                dataTableSearch: '',
                dataTablePage: 1,
                dataTablePerPage: 10,
            }
        },

        methods:{
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

<style scoped>

</style>