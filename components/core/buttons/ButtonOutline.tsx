import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
  onClick?: () => void
}

const ButtonOutline = ({ title, onClick } : propTypes) => {
  return (
    <Button variant="outline" onClick={onClick}>{title}</Button>
  )
} 

export default ButtonOutline
