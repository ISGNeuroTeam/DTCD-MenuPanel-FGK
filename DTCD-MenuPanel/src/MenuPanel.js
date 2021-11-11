import MenuPanelComponent from './MenuPanel.vue';

import {
  PanelPlugin,
  EventSystemAdapter,
  StyleSystemAdapter,
  WorkspaceSystemAdapter,
} from '../../DTCD-SDK/index';

export class MenuPanel extends PanelPlugin {
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

    const VueJS = this.getDependence('Vue').default;
    new VueJS({
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
  }
}
