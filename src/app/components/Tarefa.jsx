export default function Tarefa(props) {
    let background = ""
    let border = ""


    if (props.prioridade === "URGENTE") {
        background = "bg-red-700"
        border = "border-red-700"
    } else if (props.prioridade === "ALTA") {
        background = "bg-orange-700"
        border = "border-orange-700"
    } else if (props.prioridade === "MEDIA") {
        background = "bg-yellow-600"
        border = "border-yellow-600"
    } else if (props.prioridade === "BAIXA") {
        background = "bg-green-700"
        border = "border-green-700"
    }

    return (
        <div className={`
            flex items-center flex-col border-2 
            ${border || "border-zinc-700"} 
            h-32  rounded-3xl overflow-hidden
        `}>
            <div className="flex-1 py-2 px-3 w-full text-xl mx-auto">
                <h1>{props.nome}</h1>
            </div>
            
            <div className="w-full flex items-end justify-end p-1">
                <span className="text-sm text-zinc-400">12/07/2023</span>
            </div>
            
            <div className={`flex justify-center w-full font-semibold ${background || "bg-zinc-700"}`}>
                <span>{props.prioridade}</span>
            </div>

        </div>
    )
}