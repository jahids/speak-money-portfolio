
import '../styles/globals.css'
import '../public/assets/libs/tiny-slider/tiny-slider.css'
import '../public/assets/libs/tobii/css/tobii.min.css'
import '../public/assets/libs/@iconscout/unicons/css/line.css'
import '../public/assets/css/icons.css'
import '../public/assets/css/style.css'
import '../public/assets/css/swiper-bundle.min.css'
import '../public/assets/css/tailwind.css'
import 'tiny-slider/dist/tiny-slider.css';
import MainLayout from '../components/MainLayout/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
