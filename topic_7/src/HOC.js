import React, {useState} from 'react'

function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [money, setMoney] = useState(10);
        const handleIncrease = () => {
            setMoney(money + 10);
        
        }
        return <OriginalComponent handleIncrease={handleIncrease} money={money} />
    }
  return NewComponent;
}

export default UpdatedComponent