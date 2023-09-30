import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
  onClick?: () => void
}

const ButtonPrimaryFull = ({title, onClick} : propTypes) => {
  return (
      <Button className="w-[100%]" onClick={onClick}>{title}</Button>
  )
}

export default ButtonPrimaryFull
