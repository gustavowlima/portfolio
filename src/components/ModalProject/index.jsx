import React, { useEffect, useState } from "react"


export function ModalProject({props}) {
    const [visible, setVisible] = useState('hidden')
    console.log(props)
        return (
            <div className={`${visible} w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-[#09041Dc7] backdrop-blur-xl z-[998]`}>
               
            </div>
        )
    }



