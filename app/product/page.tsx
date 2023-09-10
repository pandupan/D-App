import ImagePlaceholder from '@/components/pages/Home/ImagePlaceholder'
import LongHeading from '@/components/pages/Product/LongHeading'
import MediumHeading from '@/components/pages/Product/MediumHeading'
import MediumWithIcon from '@/components/pages/Product/MediumWithIcon'
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
      
    </div>
  )
}

export default page
