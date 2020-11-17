import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade from "@material-ui/core/Fade";

const palette = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: {
    dark: "#E95008",
    main: "#FD631C",
    light: "#FF7F43",
  },
  secondary: {
    dark: "#0471CD",
    main: "#284CFF",
    light: "#39A3FD",
  },
  grey: {
    900: "#161616",
    800: "#363636",
    700: "#656565",
    600: "#8F8F8F",
    500: "#AFAFAF",
    400: "#CDCDCD",
    300: "#E0E0E0",
    200: "#F4F4F4",
    100: "#FAFAFA",
  },
  text: {
    main: "#161616",
  },
};

const overrides = {
  MuiButton: {
    root: {
      paddingTop: "4px",
      paddingBottom: "5px",
    },
    contained: {
      backgroundColor: palette.grey[300],
      color: palette.grey[900],
      "&:hover": {
        backgroundColor: palette.grey[400],
      },
      "-webkit-font-smoothing": "antialiased",
    },
    containedPrimary: {
      color: palette.common.white,
    },
    containedSecondary: {
      color: palette.common.white,
    },
  },
  MuiCheckbox: {
    root: {
      backgroundColor: "transparent",
      "&:hover$checked$colorPrimary": {
        backgroundColor: "transparent",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
      paddingTop: "10px",
      paddingRight: "10px",
      paddingBottom: "10px",
      paddingLeft: "0",
      width: "unset",
      height: "unset",
    },
  },
  MuiFormControlLabel: {
    root: {
      userSelect: "none",
      marginLeft: "0",
    },
  },
  MuiFormLabel: {
    root: {
      fontWeight: "700",
      color: palette.grey[900],
    },
  },
  MuiGrid: {
    container: {
      "& $container": {
        width: "fit-content",
      },
    },
  },
  MuiIconButton: {
    root: {
      padding: "0",
      width: "42px",
      height: "42px",
      borderRadius: "5px",
      color: palette.grey[900],
      "&:hover": {
        backgroundColor: palette.grey[400],
      },
    },
  },
  MuiInputLabel: {
    root: {
      color: palette.grey[700],
      fontWeight: "400",
    },
    outlined: {
      "&$marginDense": {
        transform: "translate(14px, 13px) scale(1)",
      },
    },
  },
  MuiMenuItem: {
    root: {
      fontSize: "1.1111rem",
    },
  },
  MuiOutlinedInput: {
    root: {
      "&:hover $notchedOutline": {
        borderColor: palette.grey[500],
      },
      fontSize: "1.1111rem",
    },
    notchedOutline: {
      borderColor: palette.grey[400],
      borderWidth: "2px",
      transition: "border-color 100ms linear",
    },
    inputMarginDense: {
      paddingTop: "11px",
      paddingBottom: "10px",
    },
  },
  MuiPaper: {
    outlined: {
      border: `2px solid ${palette.grey[400]}`,
      boxSizing: "border-box",
    },
  },
  MuiRadio: {
    root: {
      backgroundColor: "transparent",
      "&:hover$checked$colorPrimary": {
        backgroundColor: "transparent",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
      paddingTop: "10px",
      paddingRight: "10px",
      paddingBottom: "10px",
      paddingLeft: "0",
      width: "unset",
      height: "unset",
    },
  },
  MuiSelect: {
    select: {
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
  },
};

const props = {
  MuiButton: {
    disableElevation: true,
    variant: "contained",
  },
  MuiButtonBase: {
    disableRipple: true,
  },
  MuiTextField: {
    margin: "dense",
    variant: "outlined",
  },
  MuiCheckbox: {
    color: "primary",
    disableRipple: true,
  },
  MuiFormControl: {
    margin: "dense",
    variant: "outlined",
  },
  MuiListItem: {
    button: true,
  },
  MuiLink: {
    underline: "always",
  },
  MuiRadio: {
    color: "primary",
    disableRipple: true,
  },
  MuiSelect: {
    IconComponent: ExpandMoreIcon,
    MenuProps: {
      anchorOrigin: { vertical: 50, horizontal: "left" },
      marginThreshold: 0,
      PaperProps: {
        variant: "outlined",
      },
      TransitionComponent: Fade,
      transitionDuration: 150,
      variant: "menu",
    },
  },
};

const shape = {
  borderRadius: "5px",
};

const typography = {
  button: {
    fontSize: "1.1666rem",
    fontWeight: 700,
    textTransform: "none",
  },
  fontFamily: '"Roboto", sans-serif',
  h1: {
    fontSize: "2.75rem",
    fontWeight: 800,
  },
  h2: {
    fontSize: "1.625rem",
    fontWeight: 800,
  },
  h3: {
    fontSize: "1.375rem",
    fontWeight: 800,
  },
  h4: {
    fontSize: "1.25rem",
    fontWeight: 800,
  },
  h5: {
    fontSize: "0.9375rem",
    fontWeight: 800,
    textTransform: "uppercase",
  },
  h6: {
    fontSize: "0.875rem",
    fontWeight: 800,
    textTransform: "uppercase",
  },
  subtitle1: {
    fontSize: "1.375rem",
  },
  subtitle2: {
    fontSize: "1.25rem",
  },
  body1: {
    fontSize: "1.1111rem",
  },
  body2: {
    fontSize: "0.875rem",
  },
};

const theme = {
  overrides,
  palette,
  props,
  shape,
  typography,
};

export default theme;
