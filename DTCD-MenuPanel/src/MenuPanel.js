import MenuPanelComponent from './MenuPanel.vue';

import { version } from './../package.json';

import {
  PanelPlugin,
  EventSystemAdapter,
  StyleSystemAdapter,
  WorkspaceSystemAdapter,
  RouteSystemAdapter,
} from '../../DTCD-SDK/index';

export class MenuPanel extends PanelPlugin {
  #workspaceSystemInstance;
  #vueComponent;

  static getRegistrationMeta() {
    return {
      type: 'panel',
      name: 'MenuPanel',
      title: 'Панель меню',
      version,
      withDependencies: true,
    };
  }

  constructor(guid, selector) {
    super();

    const eventSystem = new EventSystemAdapter('0.4.0', guid);
    const styleSystem = new StyleSystemAdapter('0.4.0');
    const workspaceSystem = new WorkspaceSystemAdapter('0.4.0');
    const router = new RouteSystemAdapter('0.1.0');

    this.#workspaceSystemInstance = this.getSystem('WorkspaceSystem', '0.4.0');

    const VueJS = this.getDependence('Vue').default;
    const rootVueComponent = new VueJS({
      data: () => {
        return {
          guid,
          eventSystem,
          styleSystem,
          workspaceSystem,
          router,
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
