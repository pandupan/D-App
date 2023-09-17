import ImagePlaceholder from '@/components/pages/Home/ImagePlaceholder'
import LongHeading from '@/components/pages/Product/LongHeading'
import MediumHeading from '@/components/pages/Product/MediumHeading'
import MediumWButton from '@/components/pages/Product/MediumWButton'
import MediumWIconButton from '@/components/pages/Product/MediumWIconButton'
import MediumWithButton from '@/components/pages/Product/MediumWithButton'
import MediumWithIcon from '@/components/pages/Product/MediumWithIcon'
import MediumWithImage from '@/components/pages/Product/MediumWithImage'
import PricingPlan from '@/components/pages/Product/PricingPlan'
import ProductAll from '@/components/pages/Product/ProductAll'
import ShortHeading from '@/components/pages/Product/ShortHeading'

const page = () => {
  return (
    <div>
      <ShortHeading/>
      <ProductAll/>
      <MediumHeading/>
      <MediumWithIcon/>
      <MediumWButton/>
      <MediumHeading/>
      <MediumWIconButton/>
      <LongHeading/>
      {/* <PricingPlan/> */}
      <MediumWithImage/>
      {/* <MediumWithButton/> */}
    </div>
  )
}

export default page
