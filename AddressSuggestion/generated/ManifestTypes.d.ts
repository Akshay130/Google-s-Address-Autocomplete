/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    SelectedAddress: ComponentFramework.PropertyTypes.StringProperty;
    apiKey: ComponentFramework.PropertyTypes.StringProperty;
    IHeight: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    IWidth: ComponentFramework.PropertyTypes.DecimalNumberProperty;
}
export interface IOutputs {
    SelectedAddress?: string;
    apiKey?: string;
    IHeight?: number;
    IWidth?: number;
}
