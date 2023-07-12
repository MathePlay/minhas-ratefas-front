import { ListTodo, ShoppingCart, CheckSquare } from 'lucide-react'

const buttonStyle = "hover:bg-zinc-600 rounded-tr-3xl pl-4 w-60 p-2 rounded-br-3xl flex items-center justify-start gap-3"

export default function Sidebar() {
    return (
        <aside className="fixed h-screen w-64 bg-zinc-700">
            <div className=' flex-col mt-4'>
            
            <button className={`${buttonStyle}`}>
                <ListTodo size={40} />
                <p className='text-xl'>Minhas Tarefas</p>
            </button>
            
            <button className={`${buttonStyle}`}>
                <ShoppingCart size={40} />
                <p className='text-xl'>Lista de Compras</p>
            </button>
            
            <button className={`${buttonStyle}`}>
                <CheckSquare size={40} />
                <p className='text-xl'>Tarefas realizadas</p>
            </button>
        </div>
        </aside>
    )
}