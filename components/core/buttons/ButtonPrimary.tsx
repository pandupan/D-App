import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
}

const ButtonPrimary = ({title} : propTypes) => {
  return (
    <div>
      <Button>{title}</Button>
    </div>
  )
}

export default ButtonPrimary
