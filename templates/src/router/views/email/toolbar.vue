<template>
  <div>
    <div class="btn-group mr-2 mb-2 mb-sm-0">
      <button type="button" class="btn btn-primary">
        <i class="fa fa-inbox"></i>
      </button>
      <button type="button" class="btn btn-primary">
        <i class="fa fa-exclamation-circle"></i>
      </button>
      <button type="button" class="btn btn-primary">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>

    <b-dropdown class="btn-group mr-2 mb-2 mb-sm-0" variant="primary">
      <template slot="button-content">
        <i class="fa fa-folder"></i>
        <i class="mdi mdi-chevron-down ml-2"></i>
      </template>

      <a class="dropdown-item" href="javascript: void(0);">Updates</a>
      <a class="dropdown-item" href="javascript: void(0);">Social</a>
      <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>
    </b-dropdown>

    <b-dropdown class="btn-group mr-2 mb-2 mb-sm-0" variant="primary">
      <template slot="button-content">
        <i class="fa fa-tag"></i>
        <i class="mdi mdi-chevron-down ml-2"></i>
      </template>
      <a class="dropdown-item" href="javascript: void(0);">Updates</a>
      <a class="dropdown-item" href="javascript: void(0);">Social</a>
      <a class="dropdown-item" href="javascript: void(0);">Team Manage</a>
    </b-dropdown>

    <b-dropdown class="btn-group mr-2 mb-2 mb-sm-0" variant="primary">
      <template slot="button-content">
        More
        <i class="mdi mdi-dots-vertical ml-2"></i>
      </template>
      <b-dropdown-item href="javascript: void(0);">Mark as Unread</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Add to Tasks</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Add Star</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Mute</b-dropdown-item>
    </b-dropdown>
  </div>
</template>