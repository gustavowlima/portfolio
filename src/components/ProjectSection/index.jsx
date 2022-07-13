import React from "react"

import conver from '../../../assets/conver.png'
import proffy from '../../../assets/proffy.png'
import projeto_blog from '../../../assets/projeto_blog.png'
import { useState } from 'react'
import { ModalProject } from "../ModalProject"

export function ProjectSection() {
    const [props, setProps] = useState(null)
   
    return (
        <>
            <ModalProject props={props} />

            <h1 className="text-3xl font-bold mb-8">Portfólio</h1>

            <div className="grid justify-around grid-cols-1 gap-4 md:grid-cols-3">

                <div className="h-full" onClick={data => setProps({conver, title: 'Projeto Conver', visible: 'hidde'})}>
                    <img className="w-full " src={conver} alt="Projeto conver" />
                </div>

                <div className="h-full">
                    <img className="w-full" src={proffy} alt="Projeto conver" />
                </div>

                <div className="h-full">
                    <img className="w-full" src={projeto_blog} alt="Projeto conver" />
                </div>
            </div>
        </>
    )
}
