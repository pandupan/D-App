import { Button } from "@/components/ui/button"

type propTypes = {
  title: string;
}

const ButtonPrimaryFull = ({title} : propTypes) => {
  return (
      <Button className="w-[100%]">{title}</Button>
  )
}

export default ButtonPrimaryFull
