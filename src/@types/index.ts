
export interface IThemeProps {
    white: {
        colors: IColors
    },
    fonts: IFonts
}

interface IColors {
    WHITE: {
        "900": string,
        "800": string,
        "0": string,
    },
    BLACK: string,
    PURPLE: {
        "800": string,
    },
    GREEN: {
        "900": string,
        "800": string,
        "400": string,
    },
    RED: {
        "500": string
    },
    TURQUESE: {
        "400": string
    }
}

interface IFonts {
    family: {
        primary: "Roboto"
    },
    weight: {
        regular: string,
        medium: string,
        bold: string
    }
}