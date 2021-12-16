import {
  BOBInputData,
  ComponentType,
  ICustomComponent,
  PostMessageType,
  RegisterComponentPostMessage,
} from '@bob-typess';

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

          const newPostMessage: RegisterComponentPostMessage = {
            messageType: PostMessageType.REGISTER_COMPONENT,
            messageData: {
              ...componentToPush,
              jsxElement: 'elo',
            },
          };

          window.parent.postMessage(newPostMessage, '*');
        }
      }
    }
  }
}
