import MenuPanelComponent from './MenuPanel.vue';

import {
  PanelPlugin,
  EventSystemAdapter,
  StyleSystemAdapter,
  WorkspaceSystemAdapter,
} from '../../DTCD-SDK/index';

export class MenuPanel extends PanelPlugin {
  #workspaceSystemInstance;
  #vueComponent;

  static getRegistrationMeta() {
    return {
      type: 'panel',
      name: 'MenuPanel',
      title: 'Панель меню',
      version: '0.1.0',
      withDependencies: true,
    };
  }

  constructor(guid, selector) {
    super();

    const eventSystem = new EventSystemAdapter(guid);
    const styleSystem = new StyleSystemAdapter();
    const workspaceSystem = new WorkspaceSystemAdapter();

    this.#workspaceSystemInstance = this.getSystem('WorkspaceSystem');

    const VueJS = this.getDependence('Vue').default;
    const rootVueComponent = new VueJS({
      data: () => {
        return {
          guid,
          eventSystem,
          styleSystem,
          workspaceSystem,
          plugin: this,
        };
      },
      render: h => h(MenuPanelComponent),
    }).$mount(selector);

    this.#vueComponent = rootVueComponent.$children[0];
  }

  setPluginConfig({ title, column }) {
    this.#workspaceSystemInstance.changeConfigurationTitle(
      this.#workspaceSystemInstance.currentWorkspaceID,
      title
    );
    this.#workspaceSystemInstance.setColumn(column);
    this.#vueComponent.workspaceTitle = title;
  }

  getPluginConfig() {
    return {
      title: this.#workspaceSystemInstance.currentWorkspaceTitle,
      column: this.#workspaceSystemInstance.currentWorkspaceColumn,
    };
  }

  setFormSettings(config) {
    this.setPluginConfig(config);
  }

  getFormSettings() {
    return {
      fields: [
        {
          component: 'title',
          propValue: 'Настройки рабочего стола',
        },
        {
          component: 'text',
          propName: 'title',
          attrs: {
            label: 'Укажите название рабочего стола',
            required: true,
          },
        },
        {
          component: 'text',
          propName: 'column',
          attrs: {
            type: 'number',
            label: 'Укажите количество колонок',
          },
        },
      ],
    };
  }
}
