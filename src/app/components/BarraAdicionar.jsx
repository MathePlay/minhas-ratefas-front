import { Search, Plus } from 'lucide-react'

export default function BarraAdicionar(props) {
    return (
        <div className="w-2/3 h-12 flex items-center px-2 bg-zinc-200 rounded-3xl text-zinc-600">
            <form className='flex items-center w-full'>
                
                <button type='submit' className='p-1 hover:bg-zinc-800 rounded-full hover:text-zinc-200'>
                    <Plus size={30}/>
                </button>
                
                <input type="text" placeholder="Adicionar Tarefa..." className={`
                    flex-1 text-xl text-text-zinc-700 px-2 outline-none bg-zinc-200
                `}/>

                <select name="prioridade" id="prioridade" className={`
                    w-28 bg-zinc-200 font-semibold text-lg hover:bg-zinc-100 rounded-3xl p-1
                `}>
                    <option value="URGENTE">Urgente</option>
                    <option value="ALTA">Alta</option>
                    <option value="MEDIA">Media</option>
                    <option value="BAIXA">Baixa</option>
                </select>

            </form>
        </div>
    )
}