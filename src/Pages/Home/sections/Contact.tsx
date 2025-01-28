import { Button } from "../../../components/button"
import { contacts } from "../../../data/data"

const Contact = () => {
  return (
    <div className="container-style">
        <div className="flex gap-10 max-md:flex-col">
            {contacts.map(({value, label, Icon}, index) => (
                <div key={index} className={`flex items-center gap-4 ${index===3? "m-auto max-md:m-0": ""}`}>
                    <Button size={"icon"} className="bg-secondary-icon-color text-secondary-color cursor-auto">
                        <Icon size={18} />
                    </Button>
                    <div className="flex flex-col">
                        <span className="text-text-color text-sm">{label}</span>
                        <span className="font-semibold">{value}</span>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Contact