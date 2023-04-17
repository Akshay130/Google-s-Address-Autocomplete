import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class AddressSuggestions3 implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;
    private _container: HTMLDivElement;
    private _input: HTMLInputElement;
    private _autocomplete: google.maps.places.Autocomplete;
    private _apiKey: string;
    private _selectedAddress: string;

    constructor() {
        this._selectedAddress = "";
    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
        this._container = container;
        this._apiKey = context.parameters.apiKey.raw || "";

        // Create input element
        this._input = document.createElement("input");
        this._input.style.width= context.parameters.IWidth.raw! + "px";
        this._input.style.height= context.parameters.IHeight.raw! + "px";
        this._input.type = "text";
        this._input.id = "address-input";
        this._container.appendChild(this._input);

        // Load Google Places API
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this._apiKey}&libraries=places`;
        script.async = true;
        script.onload = this._initializeAutocomplete.bind(this);
        this._container.appendChild(script);
    }

    private _initializeAutocomplete(): void {
        // Create autocomplete object
        this._autocomplete = new google.maps.places.Autocomplete(this._input);
        this._autocomplete.addListener("place_changed", this._handlePlaceChanged.bind(this));

        // Add event listener to input element
        this._input.addEventListener("input", this._handleInput.bind(this));
    }

    private _handleInput(): void {
        const query = this._input.value;
        const service = new google.maps.places.AutocompleteService();
        service.getPlacePredictions({ input: query }, (predictions, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const addresses = predictions.map(prediction => prediction.description);
              //  this._renderSuggestions(addresses);
            } else {
              //  this._renderSuggestions([]);
            }
        });
    }

    private _handlePlaceChanged(): void {
        const place = this._autocomplete.getPlace();
        if (place && place.formatted_address) {
            this._selectedAddress = place.formatted_address;
            this._notifyOutputChanged();
        }
    }


    private _clearSuggestions(): void {
        const suggestionsList = this._container.querySelector(".suggestions-list");
        if (suggestionsList) {
            this._container.removeChild(suggestionsList);
        }
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._context = context;
        this._apiKey = context.parameters.apiKey.raw!;
       
        this._input.style.width= context.parameters.IWidth.raw! + "px";
        this._input.style.height= context.parameters.IHeight.raw! + "px";
        this._input.type = "text";
        this._input.id = "address-input";
        this._container.appendChild(this._input);

        // Load Google Places API
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this._apiKey}&libraries=places`;
        script.async = true;
        script.onload = this._initializeAutocomplete.bind(this);
        this._container.appendChild(script);
    }

    public getOutputs(): IOutputs {
        return { SelectedAddress: this._selectedAddress };
    }
    public destroy(): void {
         
    }}
