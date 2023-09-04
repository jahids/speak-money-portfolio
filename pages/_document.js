import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head/>
      <body className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
        <Main />
        <NextScript />
        {/* <script async src="/assets/libs/tiny-slider/min/tiny-slider.js" />
      <script async  src="/assets/libs/tobii/js/tobii.min.js" /> */}
      </body>
   
      {/* <Script async src="/assets/libs/feather-icons/feather.min.js" />
      <Script async src="/assets/js/plugins.init.js" />
      <Script async src="/assets/js/app.js" /> */}
    </Html>
  )
}