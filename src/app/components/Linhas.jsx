import { tarefas } from '@/data/data'
import { CakeIcon, Trash, Trash2 } from 'lucide-react'
import { useState } from 'react'


export default function Linhas() {
    return (
        <div>
            {tarefas.map((item, i) => (
                <TarefaLinhas key={i} nome={item.nome} prioridade={item.prioridade} />
            ))}
        </div>
    )
}


function TarefaLinhas({ nome, prioridade }) {
    const [selecionado, setSelecionado] = useState(false)

    console.log(selecionado)

    let background = ""
    let border = ""
    let text = ""

    if (prioridade === "URGENTE") {
        background = "bg-red-700"
        border = "border-red-700"
        text = "text-red-700"
    } else if (prioridade === "ALTA") {
        background = "bg-orange-700"
        border = "border-orange-700"
        text = "text-orange-700"
    } else if (prioridade === "MEDIA") {
        background = "bg-yellow-600"
        border = "border-yellow-600"
        text = "text-yellow-700"
    } else if (prioridade === "BAIXA") {
        background = "bg-green-700"
        border = "border-green-700"
        text = "text-green-700"
    }

    function alterarLinhas() {
        nome = "Novo Texto"

        if (selecionado) {
            setSelecionado(false)
        } else {
            setSelecionado(true)
        }
    }

    return (
        <div className={`flex items-center w-full border-b-2  pt-2 transition-colors justify-between pr-2
            ${selecionado ? "border-zinc-600 text-zinc-600" : `${border || "border-zinc-500"}`}`}>
            <div className='flex gap-2 items-center'>
                <input type="checkbox" className='w-4 h-4' onChange={() => alterarLinhas()} />
                <h1 className='text-xl py-1'>{nome}</h1>
            </div>
            <button className={`${selecionado ? "text-zinc-600" : `${text || "border-zinc-500"}`}`}>
                <Trash2  />
            </button>
        </div>
    )
}