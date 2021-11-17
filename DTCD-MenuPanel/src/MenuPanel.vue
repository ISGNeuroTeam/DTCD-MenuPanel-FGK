<template>
  <div class="container">
    <div class="home-group">
      <button class="btn icon-btn" @click="goToHomePage">
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.577663 6.92251L6.411 1.08917C6.73641 0.763855 7.26391 0.763855 7.58933 1.08917L13.4227 6.92251C13.579 7.07875 13.6668 7.29068 13.6668 7.51167V15.5C13.6668 15.9602 13.2937 16.3333 12.8335 16.3333H8.66683V10.5H5.3335V16.3333H1.16683C0.706592 16.3333 0.333496 15.9602 0.333496 15.5V7.51167C0.333496 7.29068 0.421372 7.07875 0.577663 6.92251Z"
            fill="#51515C"
          />
        </svg>
      </button>
    </div>
    <vl class="divider" />
    <div class="title-group">
      <div class="title">{{ workspaceTitle }}</div>
    </div>
    <vl class="divider" />
    <div class="panels-group">
      <button class="btn icon-btn" @click="addEmptyCell">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 6.15484H14.5232C14.5162 6.108 14.502 6.01768 14.4808 5.88387C14.3396 4.90036 13.9546 4.12425 13.326 3.55556C12.6691 2.9601 11.825 2.66237 10.7938 2.66237H10.2323V13.8222C10.2323 14.9462 10.8256 15.5283 12.0122 15.5685V16H4.99837V15.5685C6.185 15.5283 6.77832 14.9462 6.77832 13.8222V2.66237H6.21679C5.18555 2.66237 4.34148 2.9601 3.6846 3.55556C3.05596 4.12425 2.67101 4.90036 2.52975 5.88387C2.51562 5.95747 2.49796 6.04779 2.47677 6.15484H2V2H15V6.15484Z"
            fill="#51515C"
          />
        </svg>
      </button>
      <button class="btn icon-btn">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.25 9.75V5.25C14.25 4.8 13.95 4.5 13.5 4.5H12C12 3.225 11.025 2.25 9.75 2.25H8.25C6.975 2.25 6 3.225 6 4.5H4.5C4.05 4.5 3.75 4.8 3.75 5.25V7.875V9.75C2.475 9.75 1.5 10.725 1.5 12V13.5C1.5 14.775 2.475 15.75 3.75 15.75H5.25C6.525 15.75 7.5 14.775 7.5 13.5V12C7.5 10.725 6.525 9.75 5.25 9.75V6H6C6 7.275 6.975 8.25 8.25 8.25H9.75C11.025 8.25 12 7.275 12 6H12.75V9.75C11.475 9.75 10.5 10.725 10.5 12V13.5C10.5 14.775 11.475 15.75 12.75 15.75H14.25C15.525 15.75 16.5 14.775 16.5 13.5V12C16.5 10.725 15.525 9.75 14.25 9.75ZM6 12V13.5C6 13.95 5.7 14.25 5.25 14.25H3.75C3.3 14.25 3 13.95 3 13.5V12C3 11.55 3.3 11.25 3.75 11.25H5.25C5.7 11.25 6 11.55 6 12ZM10.5 6C10.5 6.45 10.2 6.75 9.75 6.75H8.25C7.8 6.75 7.5 6.45 7.5 6V4.5C7.5 4.05 7.8 3.75 8.25 3.75H9.75C10.2 3.75 10.5 4.05 10.5 4.5V6ZM15 13.5C15 13.95 14.7 14.25 14.25 14.25H12.75C12.3 14.25 12 13.95 12 13.5V12C12 11.55 12.3 11.25 12.75 11.25H14.25C14.7 11.25 15 11.55 15 12V13.5Z"
            fill="#51515C"
          />
        </svg>
      </button>
      <button class="btn icon-btn">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.75 7.5V10.5H14.25V7.5H9.75ZM8.25 7.5H3.75V10.5H8.25V7.5ZM9.75 14.25H14.25V12H9.75V14.25ZM8.25 14.25V12H3.75V14.25H8.25ZM9.75 3.75V6H14.25V3.75H9.75ZM8.25 3.75H3.75V6H8.25V3.75ZM14.25 2.25C15.0784 2.25 15.75 2.92157 15.75 3.75V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H3.75C2.92157 15.75 2.25 15.0784 2.25 14.25V3.75C2.25 2.92157 2.92157 2.25 3.75 2.25H14.25Z"
            fill="#51515C"
          />
        </svg>
      </button>
      <button class="btn icon-btn">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7165 14.9319C14.0015 14.1268 14.9903 12.9262 15.5342 11.5108C16.0781 10.0953 16.1477 8.54153 15.7324 7.08314C15.3172 5.62475 14.4396 4.34062 13.2317 3.42393C12.0238 2.50725 10.5509 2.00758 9.03459 2.00009C7.51825 1.99259 6.04048 2.47769 4.82358 3.38239C3.60668 4.28709 2.71646 5.56249 2.28684 7.01671C1.85721 8.47092 1.91142 10.0253 2.44129 11.4461C2.97117 12.8669 3.94807 14.0771 5.22503 14.8949L6.0168 13.6585C5.00767 13.0122 4.23567 12.0558 3.81693 10.933C3.39819 9.81028 3.35535 8.58189 3.69487 7.43268C4.03438 6.28348 4.73789 5.27559 5.69955 4.56064C6.66122 3.84569 7.82904 3.46234 9.02733 3.46826C10.2256 3.47418 11.3896 3.86905 12.3442 4.59347C13.2987 5.31789 13.9922 6.33268 14.3204 7.48519C14.6485 8.63769 14.5935 9.86559 14.1637 10.9842C13.7339 12.1027 12.9525 13.0515 11.937 13.6877L12.7165 14.9319Z"
            fill="#51515C"
          />
          <path
            d="M11.8017 5.10616L8.00002 8.88022L9.0766 9.65414L11.8017 5.10616Z"
            fill="#51515C"
          />
        </svg>
      </button>
      <button class="btn icon-btn">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="6" y="3" width="10" height="2" fill="#51515C" />
          <rect x="2" y="6" width="10" height="2" fill="#51515C" />
          <rect x="2" y="9" width="13" height="2" fill="#51515C" />
          <rect x="7" y="12" width="9" height="2" fill="#51515C" />
          <rect x="8" y="2" width="1" height="14" fill="#51515C" />
        </svg>
      </button>
    </div>
    <div v-if="!editMode" @click="toWorkspaceEditMode" class="settings-group">
      <button class="btn icon-btn">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5167 18.3333H8.48335C8.09178 18.3333 7.75298 18.0608 7.66918 17.6783L7.33001 16.1083C6.87756 15.9101 6.44853 15.6622 6.05085 15.3692L4.52001 15.8567C4.14668 15.9757 3.74084 15.8186 3.54501 15.4792L2.02501 12.8533C1.83134 12.5138 1.89806 12.0854 2.18585 11.8208L3.37335 10.7375C3.31934 10.2467 3.31934 9.75156 3.37335 9.26082L2.18585 8.17999C1.89764 7.9153 1.83089 7.48642 2.02501 7.14666L3.54168 4.51916C3.7375 4.17974 4.14335 4.0226 4.51668 4.14166L6.04751 4.62916C6.2509 4.47845 6.46262 4.33934 6.68168 4.21249C6.89196 4.0939 7.10838 3.98653 7.33001 3.89082L7.67001 2.32249C7.7534 1.93996 8.09184 1.66707 8.48335 1.66666H11.5167C11.9082 1.66707 12.2466 1.93996 12.33 2.32249L12.6733 3.89166C12.9073 3.99459 13.1352 4.11089 13.3558 4.23999C13.5619 4.35897 13.7611 4.48945 13.9525 4.63082L15.4842 4.14332C15.8573 4.02471 16.2626 4.18179 16.4583 4.52082L17.975 7.14832C18.1687 7.48789 18.102 7.91625 17.8142 8.18082L16.6267 9.26416C16.6807 9.7549 16.6807 10.2501 16.6267 10.7408L17.8142 11.8242C18.102 12.0887 18.1687 12.5171 17.975 12.8567L16.4583 15.4842C16.2626 15.8232 15.8573 15.9803 15.4842 15.8617L13.9525 15.3742C13.7587 15.5169 13.5573 15.649 13.3492 15.77C13.1307 15.8966 12.9054 16.0109 12.6742 16.1125L12.33 17.6783C12.2463 18.0605 11.9079 18.333 11.5167 18.3333ZM9.99668 6.66666C8.15573 6.66666 6.66335 8.15904 6.66335 9.99999C6.66335 11.8409 8.15573 13.3333 9.99668 13.3333C11.8376 13.3333 13.33 11.8409 13.33 9.99999C13.33 8.15904 11.8376 6.66666 9.99668 6.66666Z"
            fill="#51515C"
          />
        </svg>
      </button>
    </div>
    <div v-else class="settings-group settings-group_change">
      <button class="btn accept-btn" @click="acceptWorkspaceChanges">Сохранить</button>
      <button class="btn cancel-btn" @click="cancelWorkspaceChanges">Отменить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuPanelComponent',
  data() {
    return {
      editMode: false,
    };
  },
  computed: {
    workspaceTitle() {
      const config = this.$root.workspaceSystem.getPluginConfig();
      return config.title;
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
