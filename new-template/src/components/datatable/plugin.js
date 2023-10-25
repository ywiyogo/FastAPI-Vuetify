import Vue from 'vue';

import DataTable from "./DataTable";
import Cell from "./Cell";

const DataTablePlugin = {
    install(Vue){
        Vue.component(DataTable.name, DataTable);
        Vue.component(Cell.name, Cell);
    }
}

export default DataTablePlugin;