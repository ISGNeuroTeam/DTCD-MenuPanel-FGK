<template>
  <div class="container">
    <div class="home-group">
      <button class="btn icon-btn" @click="goToHomePage"><img :src="icons.homeSvg" /></button>
    </div>
    <vl class="divider" />
    <div class="title-group">
      <div class="title">{{ workspaceTitle }}</div>
    </div>
    <vl class="divider" />
    <div class="panels-group">
      <button class="btn icon-btn"><img :src="icons.textSvg" @click="addEmptyCell" /></button>
      <button class="btn icon-btn"><img :src="icons.schemeSvg" /></button>
      <button class="btn icon-btn"><img :src="icons.tableSvg" /></button>
      <button class="btn icon-btn"><img :src="icons.speedtestSvg" /></button>
      <button class="btn icon-btn"><img :src="icons.chartSvg" /></button>
    </div>
    <div v-if="!editMode" @click="toWorkspaceEditMode" class="settings-group">
      <button class="btn icon-btn"><img :src="icons.cogleSvg" /></button>
    </div>
    <div v-else class="settings-group settings-group_change">
      <button class="btn accept-btn" @click="acceptWorkspaceChanges">Сохранить</button>
      <button class="btn cancel-btn" @click="cancelWorkspaceChanges">Отменить</button>
    </div>
  </div>
</template>

<script>
import icons from './utils/icons';

export default {
  name: 'MenuPanelComponent',
  data() {
    return {
      icons,
      editMode: false,
    };
  },
  computed: {
    workspaceTitle() {
      return this.$root.workspaceSystem.currentConfiguration.title;
    },
  },
  methods: {
    addEmptyCell() {
      if (this.editMode) this.$root.workspaceSystem.createEmptyCell();
    },
    goToHomePage() {
      this.$root.workspaceSystem.setDefaultConfiguration();
    },
    toWorkspaceEditMode() {
      this.editMode = !this.editMode;
      this.$root.workspaceSystem.changeMode();
    },
    acceptWorkspaceChanges() {
      this.editMode = false;
      this.$root.workspaceSystem.changeMode();
      this.$root.workspaceSystem.saveConfiguration();
    },
    cancelWorkspaceChanges() {
      this.editMode = false;
      this.$root.workspaceSystem.changeMode();
    },
  },
};
</script>

<style lang="sass" scoped>

.btn
  border: none
  cursor: pointer
  background-color: transparent
  border-radius: 4.66px

  &:hover
    background: rgba(198, 198, 212, 0.2)


.divider
  border-left: 1px solid #C6C6D4
  height: 100%

.icon-btn
  width: 40px
  height: 40px

.container
  width: 100%
  height: 100%
  display: flex
  align-items: center

  .home-group
    // border-right: 1px solid #C6C6D4

  .title-group
    display: flex
    align-items: center
    padding: 0px 20px
    height: 40px
    font-family: Proxima Nova
    font-style: normal
    font-weight: bold
    font-size: 17px
    line-height: 21px
    color: #51515C
    // border-right: 1px solid #C6C6D4

  .panels-group

  .settings-group
    margin-left: auto
    display: flex
    justify-content: flex-end

  .settings-group_change
    .cancel-btn
      color: #51515C
      padding: 4px 13px
      background: rgba(198, 198, 212, 0.12)

    .accept-btn
      color: #4CD964
      padding: 4px 13px
      background: rgba(76, 217, 100, 0.12)
      margin-right:20px
</style>
