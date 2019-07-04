import {createMuiTheme} from "@material-ui/core";

let $primaryOrange = "#FF9C28"
let $secondaryOrange = "#FF6633"
let $hoverPrimary = "#DD861F"
/* eslint-disable */
let $hoverSecondary = "#DD5228"
let $gradientPrimaryFrom = $secondaryOrange
let $gradientPrimaryTo = "#FF3E00"
let $gradientSecondaryFrom = $primaryOrange
let $gradientSecondaryTo = "#FF8B00"
/* eslint enable */
let $primaryBlack = "#040D14"
let $primaryGray = "#848383"
let $iconPrimary = "#B8B8B8"
// eslint-disable-next-line
let $iconHover = "#F4F4F4"
let $white = "#FFF"
let $errorRed = "#FF0000"

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
  palette: {
    primary:{
      main: $primaryOrange
    },
    secondary:{
      main: $secondaryOrange
    },
    background:{
      default: $white
    }
  },
  breakpoints: {
    values:{
      lg: 1200
    }
  },
  typography:{
    fontFamily:[
      "Encode Sans Semi Expanded",
      "Exo",
      "sans-serif"
    ].join(','),
    fontSize: 20,
    htmlFontSize: 20,
    h1:{
      fontFamily:[
        "Exo",
        "Encode Sans Semi Expanded",
        "sans-serif"
      ].join(','),
      fontSize: 75,
      color: $secondaryOrange
    },
    subtitle1:{
      fontSize: 30,
      color: $primaryGray,
      fontWeight: "lighter"
    },
    h2:{
      fontSize: 20,
      color: $primaryBlack
    },
    h3:{
      fontFamily:[
        "Exo",
        "Encode Sans Semi Expanded",
        "sans-serif"
      ].join(','),
      fontSize: 20,
      color: $iconPrimary
    },
    body1:{
      fontWeight: "lighter"
    }
  },
  overrides:{
    MuiButton:{
      root:{
        backgroundColor: $primaryOrange,
        borderRadius: 6,
        fontWeight: 900,
        color: $white,
        textTransform: "uppercase",
        height: 52,
        "&:hover":{
          backgroundColor: $hoverPrimary
        },
        "&$disabled":{
          backgroundColor: $iconPrimary
        }
      },
      text:{
        padding: "14px 37px",
      },
      contained:{
        backgroundColor: $white,
        color: $primaryOrange,
        textTransform: "none",
        fontWeight: "normal",
        padding: 0,
        boxShadow: "initial",
        marginLeft: defaultTheme.spacing(2),
        marginRight: defaultTheme.spacing(2),
        paddingLeft: defaultTheme.spacing(1),
        paddingRight: defaultTheme.spacing(1),
        "&:hover":{
          fontWeight: "bolder",
          backgroundColor: $white,
        },
        "&:active":{
          boxShadow: "initial"
        }
      },
    },
    MuiOutlinedInput:{
      root:{
        "&$error":{
          borderColor: $errorRed,
          color: $errorRed
        }
      },
      notchedOutline:{
        borderWidth: '1px !important'
      }
    },
    MuiFormLabel:{
      root:{
        fontSize: '0.75rem'
      }
    },
    MuiInputBase:{
      input:{
        fontSize: '0.75rem'
      }
    },
    MuiSvgIcon:{
      root:{
        marginLeft: defaultTheme.spacing(1)
      }
    },
    MuiIconButton:{
      label:{
        "& > .MuiSvgIcon-root":{
          marginLeft: "initial !important"
        }
      }
    },
    MuiContainer:{
      root:{
        paddingLeft: 26,
        paddingRight: 0
      }
    },
    MuiAppBar:{
      root:{
        backgroundColor: $white
      }
    },
    MuiTabs:{
      root:{
        color: $primaryBlack,
        textDecoration: "none",
        cursor: "initial"
      },
      indicator:{
        display: "none"
      }
    },
    MuiTab:{
      root:{
        height: 38,
        fontWeight: "bold",
        fontSize: "0.7rem",
        "&:hover":{
          color: $primaryGray
        },
        "&$selected":{
          color: $primaryOrange
        },
        "&:first-of-type":{
          width: 128,
          marginRight: 85,
          padding: "6px 0",
        }
      }
    }
  }
})
export default theme
