import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
}

const ButtonOutline = ({ title } : propTypes) => {
  return (
    <Button variant="outline">{title}</Button>
  )
} 

export default ButtonOutline
