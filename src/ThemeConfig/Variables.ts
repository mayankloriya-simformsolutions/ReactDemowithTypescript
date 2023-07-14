// Styled Component Variables
export const customTheme = (themeColor: any) => ({
    Primary: themeColor.Primary,
    Secondary: themeColor.Secondary,
    WhiteBgColor: themeColor.WhiteBgColor,
    WhiteTextColor: themeColor.WhiteTextColor,
    BlackBgColor: themeColor.BlackBgColor,
    BlackTextColor: themeColor.BlackTextColor,
    GrayBorderColor: themeColor.GrayBorderColor, 
  });
  
  // AntDesign global Variables
  export const antDTheme = (themeColor: any) => ({
    colorPrimary: themeColor.Primary,
    colorPrimaryBg: themeColor.Primary,
    colorPrimaryBgHover: themeColor.Secondary,
    controlHeightSX: 30,
    controlHeightSM: 40,
    controlHeightLG: 50,
    fontSize: 16,
    fontFamily: '"Roboto", sans-serif',
    borderRadius: 8,
    colorBgContainer: themeColor.WhiteBgColor,
    colorTextHeading: themeColor.BlackTextColor,
  });
  
  //AntDesign Components Variables
  export const antDComponents = (themeColor: any) => ({
    Button: {
      sizeStep: 10,
      controlPaddingHorizontal: 40,
      paddingContentHorizontal: 20,
      controlPaddingHorizontalSM: 20,
      paddingContentVertical: 40,
      colorBorder: themeColor.Primary,
      colorBgTextHover: themeColor.Secondary,
      colorText: themeColor.Primary,
      colorBgTextActive: themeColor.Secondary,
      controlHeight: 40,
      controlHeightSM: 30,
      colorBorderSecondary: themeColor.Secondary,
      colorPrimaryText: themeColor.Primary,
      paddingXS: 20,
    },
    Select: {
      fontWeightStrong: 400,
      colorBorder: themeColor.GrayBorderColor,
      colorTextPlaceholder: themeColor.BlackTextColor,
      colorTextDisabled: themeColor.BlackTextColor,
      colorText: themeColor.BlackTextColor,
      fontSize: 14,
      colorTextQuaternary: themeColor.BlackTextColor
    },
    Card: {
      colorBorderSecondary: themeColor.GrayBorderColor,
    },
  });