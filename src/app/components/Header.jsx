import { Menu, Search } from 'lucide-react'

export default function Header() {
    return (
        <header className='fixed h-16 w-full flex items-center p-6 gap-4 bg-zinc-900 '>
            <div className='w-full flex gap-4 items-center justify-between'>
                <button className='w-96'>
                    <Menu size={30} />
                </button>

                <strong className='text-4xl '>Minhas Tarefas</strong>

                <div className='w-96 bg-zinc-200 px-2 py-1 rounded-3xl overflow-hidden' >
                    <form className='flex items-center '>
                        <button type='submit' className='text-zinc-600'>
                            <Search size={20} />
                        </button>
                        <input type="text" placeholder="Buscar tarefa..." className={`
                    flex-1 text-xl text-zinc-700 px-2 outline-none bg-zinc-200 
                    `} />
                    </form>
                </div>

                
            </div>

        </header>
    )
}