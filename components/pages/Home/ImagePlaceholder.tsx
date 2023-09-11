import Image from "next/image"
const ImagePlaceholder = () => {
  return (
    <div className="w-full sm:min-h-screen sm:mt-0 mt-[30px] flex sm:px-[80px] px-4 justify-center items-center">
      <div className="relative sm:w-[1311px] sm:h-[532px] w-[335px] h-[188px]">
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
