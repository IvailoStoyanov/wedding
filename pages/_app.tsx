import '../styles/globals.scss';

// function Application({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// export default Application

import type { AppProps } from "next/app";
import { IsSsrMobileContext } from "../contexts/IsMobileContext";

export default function Application({
  Component,
  pageProps
}: AppProps<{ isSsrMobile: boolean }>) {
  return (
    <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
      <Component {...pageProps} />
    </IsSsrMobileContext.Provider>
  );
}