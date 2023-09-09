import Image from "next/image"
const ImagePlaceholder = () => {
  return (
    <div className="w-full min-h-screen flex px-[80px] justify-center items-center">
      <div className="relative w-full h-[530px]">
        <Image
          src="/images/placeHolder_1.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default ImagePlaceholder
