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
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920
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
      fontSize: "4.687rem",
      color: $secondaryOrange,
      marginBottom: 10,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.4rem',
      },
    },
    subtitle1:{
      fontSize: "1.875rem",
      color: $primaryGray,
      fontWeight: "lighter",
      lineHeight: 1.3,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    h2:{
      fontSize: "2rem",
      color: $primaryBlack,
      fontWeight: 300,
      lineHeight: 1.2,
      marginBottom: defaultTheme.spacing(1),
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    h3:{
      fontFamily:[
        "Exo",
        "Encode Sans Semi Expanded",
        "sans-serif"
      ].join(','),
      fontSize: "1.125rem",
      color: $iconPrimary,
      lineHeight: 2,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.125rem',
      }
    },
    body1:{
      fontWeight: "lighter",
      color: $primaryGray,
      fontSize: "1.25rem",
      lineHeight: 1.25,
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    body2:{
      fontWeight: "lighter",
      fontSize: "1rem",
      lineHeight: 1,
      color: $primaryGray,
    },

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
        backgroundColor: 'transparent',
        color: $primaryOrange,
        textTransform: "none",
        fontWeight: "normal",
        padding: 0,
        boxShadow: "initial",
        textAlign: 'left',
        maxWidth: 330,
        justifyContent: 'flex-start',
        marginLeft: defaultTheme.spacing(2),
        marginRight: defaultTheme.spacing(2),
        paddingLeft: defaultTheme.spacing(1),
        paddingRight: defaultTheme.spacing(1),
        "&:hover":{
          fontWeight: "bolder",
          backgroundColor: 'transparent',
        },
        "&:active":{
          boxShadow: "initial"
        },
        "&.doubleSVG .MuiButton-label":{
          marginLeft: 23,
        },
        "& .MuiButton-label svg:first-of-type":{
          left: -20,
          position: 'absolute'
        },
        "& .MuiButton-label svg:nth-of-type(2)":{
          marginLeft: 'auto'
        }
      },
      fullWidth:{
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
      }
    },
    MuiOutlinedInput:{
      root:{
        borderRadius:'8px',
        width:'300px',
        marginBottom: '30px',
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
        fontSize: '0.875rem',

        [defaultTheme.breakpoints.down('sm')]: {
          fontSize: '0.875rem',
        },
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
        paddingLeft: defaultTheme.spacing(3.25),
        paddingRight: defaultTheme.spacing(3.25)
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
        [defaultTheme.breakpoints.up('sm')]: {
          minWidth: 125,
        },
        "&:hover":{
          color: $primaryGray
        },
        "&$selected":{
          color: $primaryOrange
        },
        "&:first-of-type":{
          width: 150,
          marginRight: defaultTheme.spacing(9),
        }
      }
    },
    MuiTypography:{
      root:{
        wordWrap: "break-word"
      }
    },
    MuiPaper:{
      rounded:{
        borderRadius: 6
      },
      elevation0:{
        backgroundColor: 'transparent'
      },
      elevation4:{
        padding: defaultTheme.spacing(4,5,5),
        boxShadow: "0px 1px 40px 0px rgba(0, 0, 0, 0.08)"
      }
    },
    MuiExpansionPanelDetails:{
      root:{
        padding: defaultTheme.spacing(0,2,2)
      }
    }
  }
})
export default theme
