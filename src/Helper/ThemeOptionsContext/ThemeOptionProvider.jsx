'use client';
import request from '@/Utils/AxiosUtils';
import { ThemeOptionsAPI } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ThemeOptionContext from '.';

const ThemeOptionProvider = (props) => {
  //declaring states that will be available throughout the application to control the UI.
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  const [cartCanvas, setCartCanvas] = useState(false);
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const [collectionMobile, setCollectionMobile] = useState(false);
  const [themeOption, setThemeOption] = useState({});

  // fetch theme options using tanstack query through Axios instance. The query is initially disabled (enabled: false) and does not refetch on window focus (refetchOnWindowFocus: false). The select option is used to extract the data property from the API response.
  const { data, isLoading, refetch } = useQuery([ThemeOptionsAPI], () => request({ url: ThemeOptionsAPI }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });

  //calls refetch() when the component mounts to trigger data fetching.
  useEffect(() => {
    refetch();
  }, []);

  //updates the themeOption state with the fetched data once loading is complete
  useEffect(() => {
    if (data) {
      setThemeOption(data?.options);
    }
  }, [isLoading]);
  return (
    <>
      <ThemeOptionContext.Provider
        value={{ ...props, themeOption, openOffCanvas, setOpenOffCanvas, cartCanvas, setCartCanvas, mobileSideBar, setMobileSideBar, collectionMobile, setCollectionMobile, isLoading }}>
        {props.children}
      </ThemeOptionContext.Provider>
    </>
  );
};

export default ThemeOptionProvider;
