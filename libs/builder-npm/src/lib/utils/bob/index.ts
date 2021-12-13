import { BOBInputData } from '../../types/inputs.types';
import { ComponentType, ICustomComponent } from '../../types/types';

interface CustomComponentInputs {
  name: string;
  inputs: BOBInputData[];
}

// const registeredComponents = window.pblBuilder.customComponents;

export class BOB {
  static _instance: BOB;

  private _key: string;
  static _customComponents: ICustomComponent[] = [];

  private constructor(d: string) {
    this._key = d;
  }

  static init(key: string): BOB {
    if (!BOB._instance) {
      BOB._instance = new BOB(key);
    }
    return BOB._instance;
  }

  static registerComponent(
    component: any,
    componentData: CustomComponentInputs
  ): void {
    if (typeof window !== 'undefined') {
      const asIframe = window.location !== window.parent.location;

      if (true) {
        const existedComponent = this._customComponents.find(
          ({ name }) => name === componentData.name
        );

        if (!existedComponent) {
          const componentToPush: ICustomComponent = {
            componentType: ComponentType.CUSTOM,
            jsxElement: component,
            name: componentData.name,
            data: componentData.inputs,
            style: {},
          };

          this._customComponents.push(componentToPush);
          window.postMessage(
            { messageType: 'register-component', data: componentToPush },
            '*'
          );
        }
      }
    }
  }
}
