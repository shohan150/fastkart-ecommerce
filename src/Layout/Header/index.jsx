import I18NextContext from "@/Helper/I18NextContext";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";
import { usePathname } from "next/navigation";
import { useContext, useMemo } from "react";
import { headerOptionsMap } from "../../../Data/LayoutData";
import BasicHeader from "./BasicHeader";
import ClassicHeader from "./ClassicHeader";
import FastkartHeader from "./FastKartHeader";
import MinimalHeader from "./MinimalHeader";
import StandardHeader from "./StandardHeader";

const MainHeader = () => {
  const pathName = usePathname();
  const { i18Lang } = useContext(I18NextContext);
  let currentPath = pathName.split(`/${i18Lang}`)[1];
  const { themeOption } = useContext(ThemeOptionContext);
  const headerList = {
    basic_header: <BasicHeader />,
    classic_header: <ClassicHeader />,
    minimal_header: <MinimalHeader />,
    standard_header: <StandardHeader />,
    fastkart_header: <FastkartHeader />,
  };
  const showHeader = useMemo(() => {
    return headerOptionsMap[currentPath] || themeOption?.header?.header_options;
  }, [pathName, themeOption?.header?.header_options]);
  return headerList[showHeader] || <FastkartHeader />;
};

export default MainHeader;