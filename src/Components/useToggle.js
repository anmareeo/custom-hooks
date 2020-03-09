import React, {useState, useEffect} from 'react';

export default function useToggle(def) {

    const [toggle, setToggle] = useState(def)

    const handleClick = () => {
        setToggle(!toggle)
    }


        return [toggle, setToggle, handleClick]

}

