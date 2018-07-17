export const COUNTRIES_LIST = "COUNTRIES_LIST";
export const SELECTED_COUNTRY = "SELECTED_COUNTRY";

const getCountriesList = payload => (
    {
        type: COUNTRIES_LIST,
        payload
    }
);

const changeSelectedCountry = payload => (
    {
        type: SELECTED_COUNTRY,
        payload
    }
);

export {
    getCountriesList,
    changeSelectedCountry
}