import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
  onClick?: () => void
}

const ButtonPrimary = ({title, onClick} : propTypes) => {
  return (
    <div>
      <Button onClick={onClick}>{title}</Button>
    </div>
  )
}

export default ButtonPrimary
