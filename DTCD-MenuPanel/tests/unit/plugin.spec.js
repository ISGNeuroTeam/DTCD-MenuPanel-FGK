describe('Init tests', () => {
  test('Init', () => {
    expect(true).toBeTruthy();
  });
});

// import { mount } from '@vue/test-utils';
// import { Plugin } from './../../src/Plugin';
// import MenuPanel from './../../src/components/MenuPanel.vue';

// import {
//   EventSystemAdapter,
//   StorageSystemAdapter,
//   StyleSystemAdapter
// } from './../../../DTCD-SDK';

// jest.mock('./../../../DTCD-SDK/Adapters/EventSystemAdapter', () => {
//   return {
//     EventSystemAdapter: jest.fn().mockImplementation(() => {
//       return {
//         subscribeByNames: jest.fn(),
//         createActionByCallback: jest.fn(),
//         createEvent: jest.fn(),
//         registerEvent: jest.fn(),
//         createAndPublish: jest.fn(),
//       };
//     }),
//   };
// });

// jest.mock('./../../../DTCD-SDK/Adapters/StorageSystemAdapter');

// jest.mock('./../../../DTCD-SDK/Adapters/StyleSystemAdapter', () => {
//   return {
//     StyleSystemAdapter: jest.fn().mockImplementation(() => {
//       return {
//         getThemes: jest.fn().mockImplementation(() => {
//           return new Promise(() => {});
//         }),
//         setTheme: jest.fn(),
//       };
//     }),
//   };
// });

// const Vue = {
//   default: jest.fn().mockImplementation(() => {
//     return {
//       $mount: jest.fn(),
//     };
//   }),
// };

// const getDependence = jest.fn().mockImplementation(depName => {
//   switch (depName) {
//     case 'Vue':
//       return Vue;
//   }
// });

// Object.assign(Plugin.prototype, { getDependence });

// // ----TESTS----

// describe('Utils tests', () => {

//   describe('Testing MenuPanel class', () => {

//     describe('AbstractPlugin methods', () => {
//       it('getDependence', () => {
//         expect(Plugin.prototype.getDependence).toBeDefined();
//       });
//     });

//     describe('Creating adapters instances', () => {

//       afterAll(() => {
//         jest.clearAllMocks();
//       });

//       describe('EventSystem', () => {

//         beforeAll(() => {
//           new Plugin('guid1', '#test-selector');
//         });

//         it('constructor to have been called', () => {
//           expect(EventSystemAdapter).toHaveBeenCalled();
//         });

//         it('should be executed registerEvent method 4 times', () => {
//           expect(EventSystemAdapter.mock.results[0].value.registerEvent).toBeCalledTimes(4);
//         });

//         it('should be executed createEvent method 4 times', () => {
//           expect(EventSystemAdapter.mock.results[0].value.createEvent).toBeCalledTimes(4);
//         });

//         it('should be executed createEvent method with ChangeWorkspaceEditMode, DefaultAddWorkspacePanel, CompactWorkspacePanel, ThemeUpdate', () => {
//           const events = [
//             'ChangeWorkspaceEditMode',
//             'DefaultAddWorkspacePanel',
//             'CompactWorkspacePanel',
//             'ThemeUpdate',
//           ];
//           events.forEach(evtName => {
//             expect(EventSystemAdapter.mock.results[0].value.createEvent).toHaveBeenCalledWith('guid1', evtName);
//           });
//         });
//       });

//       it('StyleSystem constructor', () => {
//         expect(StyleSystemAdapter).toHaveBeenCalled();
//       });

//       it('StorageSystem constructor', () => {
//         expect(StorageSystemAdapter).toHaveBeenCalled();
//       });

//     });

//     describe('MenuPanel Vue component', () => {
//       let eventSystem, storageSystem, styleSystem, guid, wrapper;
//       beforeAll(() => {
//         guid = 'guid1';
//         eventSystem = new EventSystemAdapter();
//         storageSystem = new StorageSystemAdapter();
//         styleSystem = new StyleSystemAdapter();
//         const Parent = {
//           data() {
//             return {
//               guid,
//               eventSystem,
//               storageSystem,
//               styleSystem,
//             };
//           },
//         };
//         wrapper = mount(MenuPanel, {parentComponent: Parent});
//       });

//       // TODO: styleSystem tests
//       // it('changing of theme by selecting of new theme ', () => {
//       // 	wrapper.setData({editMode: true});
//       // 	const el = wrapper.find();
//       // 	expect(el.exists()).toBe(true);
//       // expect(styleSystem.setTheme).toBeCalledWith();
//       // });

//       it('changeMode button', () => {
//         wrapper.find('#changeModeBtn').trigger('click');
//         expect(eventSystem.createAndPublish).toHaveBeenCalledWith(guid, 'ChangeWorkspaceEditMode');
//       });

//       it('compactWorspacePanels button', () => {
//         wrapper.setData({editMode: true});
//         wrapper.find('#compactWorkspaceBtn').trigger('click');
//         expect(eventSystem.createAndPublish).toBeCalledWith(guid, 'CompactWorkspacePanel');
//       });

//       it('defaultAddNewPanel', () => {
//         wrapper.find('#addNewPanelBtn').trigger('click');
//         expect(eventSystem.createAndPublish).toBeCalledWith(guid, 'DefaultAddWorkspacePanel');
//       });

//     });

//   });

// });
