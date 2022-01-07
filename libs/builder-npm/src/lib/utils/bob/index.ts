import {
  DraftComponent_DataItem,
  DraftComponent_DataItem_Number,
  DraftComponent_DataItem_String,
  ICustomComponent,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_Registercomponent,
} from '@bob-typess';
import { RegisterComponentInput } from './types';

interface IRegisterComponent {
  name: string;
  inputs: RegisterComponentInput[];
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
    componentData: IRegisterComponent
  ): void {
    if (typeof window !== 'undefined') {
      const asIframe = window.location !== window.parent.location;

      // eslint-disable-next-line no-constant-condition
      if (true) {
        const existedComponent = this._customComponents.find(
          ({ name }) => name === componentData.name
        );

        if (!existedComponent) {
          const convertedComponentProps: DraftComponent_DataItem[] = [];
          componentData.inputs.forEach((input) => {
            if (input.type === 'string') {
              const convertedInput: DraftComponent_DataItem_String = {
                name: input.name,
                valueString: input.defaultValue,
              };

              return convertedComponentProps.push(convertedInput);
            }

            if (input.type === 'number') {
              const convertedInput: DraftComponent_DataItem_Number = {
                name: input.name,
                valueNumber: input.defaultValue,
              };

              return convertedComponentProps.push(convertedInput);
            }

            return;
          });

          console.log(convertedComponentProps);

          const componentToPush: ICustomComponent = {
            jsxElement: component,
            name: componentData.name,
            data: convertedComponentProps,
            style: {},
          };

          this._customComponents.push(componentToPush);
        }
      }
    }
  }
}
