import FeaturedMerch from '@/components/pages/Merchandise/FeaturedMerch'
import HeroMerch from '@/components/pages/Merchandise/HeroMerch'
import HeroShop from '@/components/pages/Merchandise/HeroShop'
import MessageMerch from '@/components/pages/Merchandise/MessageMerch'


const page = () => {
  return (
    <div>
      <HeroShop/>
      <FeaturedMerch/>
      <HeroMerch/>
      <MessageMerch/>
    </div>
  )
}

export default page
