// Styles
import '../assets/scss/app.scss';

// Custom plugins
import SidebarPlugin from "../components/sidebar/plugin";
import TooltipPlugin from "../components/tooltip/plugin";
import CollapsePlugin from "../components/collapse/plugin";
import ToastNotificationsPlugin from "../components/toast/plugin";
import DataTable from "../components/datatable/plugin";

// Custom directives
import '../directives/click-outside';

import { createPopper } from '@popperjs/core';
if(typeof window !== 'undefined') {
    window.popper = createPopper;
}

// Base components
import Alert from "../components/alert/Alert";
import Badge from "../components/badge/Badge";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Collapse from "../components/collapse/Collapse";
import Input from "../components/input/Input";
import Modal from "../components/modal/Modal";
import Pagination from "../components/pagination/Pagination";
import ProgressBar from "../components/progressbar/ProgressBar";
import Select from "../components/select/Select";
import TagInput from "../components/taginput/TagInput";
import Checkbox from "../components/checkbox/Checkbox";
import Radio from "../components/radio/Radio";
import Nav from "../components/navs/Nav";
import NavItem from "../components/navs/NavItem";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Accordion from "../components/accordion/Accordion";
import AccordionItem from "../components/accordion/AccordionItem";
import Dropdown from "../components/dropdown/Dropdown";
import Navbar from "../components/navbar/Navbar";
import Dropzone from "../components/dropzone/Dropzone";

// Charts
import ChartsComponent from '../components/charts/Chart';

export default {
    install(Vue){
        // All components
        Vue.component(Alert.name, Alert);
        Vue.component(Badge.name, Badge);
        Vue.component(Button.name, Button);
        Vue.component(Card.name, Card);
        Vue.component(Collapse.name, Collapse);
        Vue.component(Input.name, Input);
        Vue.component(Modal.name, Modal);
        Vue.component(Pagination.name, Pagination);
        Vue.component(ProgressBar.name, ProgressBar);
        Vue.component(TagInput.name, TagInput);
        Vue.component(Select.name, Select);
        Vue.component(Checkbox.name, Checkbox);
        Vue.component(Radio.name, Radio);
        Vue.component(Nav.name, Nav);
        Vue.component(NavItem.name, NavItem);
        Vue.component(Breadcrumb.name, Breadcrumb);
        Vue.component(Collapse.name, Collapse);
        Vue.component(Accordion.name, Accordion);
        Vue.component(AccordionItem.name, AccordionItem);
        Vue.component(Dropdown.name, Dropdown);
        Vue.component(ChartsComponent.name, ChartsComponent);
        Vue.component(Navbar.name, Navbar);
        Vue.component(Dropzone.name, Dropzone);

        // Plugins
        Vue.use(SidebarPlugin);
        Vue.use(TooltipPlugin);
        Vue.use(CollapsePlugin);
        Vue.use(ToastNotificationsPlugin);
        Vue.use(DataTable);
    }
}