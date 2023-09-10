import ImagePlaceholder from '@/components/pages/Home/ImagePlaceholder'
import LongHeading from '@/components/pages/Product/LongHeading'
import MediumHeading from '@/components/pages/Product/MediumHeading'
import MediumWithButton from '@/components/pages/Product/MediumWithButton'
import MediumWithIcon from '@/components/pages/Product/MediumWithIcon'
import MediumWithImage from '@/components/pages/Product/MediumWithImage'
import ProductAll from '@/components/pages/Product/ProductAll'
import ShortHeading from '@/components/pages/Product/ShortHeading'

const page = () => {
  return (
    <div>
      <ShortHeading/>
      <MediumHeading/>
      <MediumWithIcon/>
      <MediumHeading/>
      <MediumWithIcon/>
      <LongHeading/>
      <ImagePlaceholder/>
      <ProductAll/>

      <MediumWithImage/>
      <MediumWithButton/>
    </div>
  )
}

export default page
