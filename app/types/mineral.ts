/**
 * @summary type for api call which represent a mineral
 * @description This type represent a Mineral from the collection. It's usually used for the api as a return type. Most values will be empty
 * @todo fix Fotolinks
 * @author Raffael Elias Schäfer
 */
export type Mineral = {
    /**
     * @summary The A_Code is code used for identifying a mineral.
     * @description The A_code consist of short Mineral description, Box size (<= 5 no Box), quality and the index of the mineral
     * @tutorial AgMin-Ag-1-1-1 stands for a silver mineral in a very small chest in good quality
     */
    A_Code?: string;
    Name?: string;
    /**
     * @summary other minerals on the same piece
     * @description A List of other Minerals that can be found on the same Item.
     */
    Paragenese?: string;
    /**
     * @summary The place where the mineral was found
     * @description The place where the mineral was found. Caution: The places are not standardized
     */
    Fundort?: string;
    /**
     * The form of the mineral
     */
    Ausbildung?: string;
    Funddatum?: string;
    Kaufdatum?: string;
    Tauschdatum?: string;
    Kauf_Tauschpreis?: string;
    /**
     * The worth of the mineral in "Deutsche Mark"
     * @deprecated
     */
    Wert_DM?: string;
    /**
     * @todo fix
     */
    Fotolink1?: string;
    /**
     * @todo fix
     */
    Fotolink2?: string;
}
