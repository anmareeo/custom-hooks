import React from 'react';
import useToggle from './useToggle';


function Component1(props) {

    const [t1Toggle, setT1Toggle, onClickHandler1] = useToggle(false)
    const [t2Toggle, setT2Toggle, onClickHandler2] = useToggle(false)

    return (
        <div>
            <button onClick={onClickHandler1}>Am I cool?</button>
            <p>
                {
                    t1Toggle ? (
                        "Yes"
                     
                    ) : ( 
                        "No, but my mom is!"
                        )
                }
            </p>
            <button onClick={onClickHandler2}>Are you cool?</button>
            <p>
                {
                    t2Toggle ? (
                        "Yes"
                    ) : (
                        "No, but your mom is!"
                        )
                }
            </p>
        </div>
    )
    }
export default Component1