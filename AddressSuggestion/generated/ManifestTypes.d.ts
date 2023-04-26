/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    SelectedAddress: ComponentFramework.PropertyTypes.StringProperty;
    apiKey: ComponentFramework.PropertyTypes.StringProperty;
    IHeight: ComponentFramework.PropertyTypes.StringProperty;
    IWidth: ComponentFramework.PropertyTypes.StringProperty;
    Radius: ComponentFramework.PropertyTypes.StringProperty;
    Fontsize: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    SelectedAddress?: string;
    apiKey?: string;
    IHeight?: string;
    IWidth?: string;
    Radius?: string;
    Fontsize?: string;
}
