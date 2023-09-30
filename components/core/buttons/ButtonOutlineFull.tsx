import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
  onClick?: () => void
}

const ButtonOutlineFull = ({ title, onClick } : propTypes) => {
  return (
      <Button className="w-[100%]" variant="outline" onClick={onClick}>{title}</Button>
  )
} 

export default ButtonOutlineFull
