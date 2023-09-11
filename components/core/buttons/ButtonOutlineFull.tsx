import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
}

const ButtonOutlineFull = ({ title } : propTypes) => {
  return (
      <Button className="w-[100%]" variant="outline">{title}</Button>
  )
} 

export default ButtonOutlineFull
