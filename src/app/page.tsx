"use client"
import {tarefas} from  '@/data/data'
import Header from './components/Header'
import BarraAdicionar from './components/BarraAdicionar'
import Tarefa from './components/Tarefa'
// import { useEffect, useState, } from 'react'

export default function Home() {
  // const [tarefas, setTarefas] = useState([])

  // useEffect(() => {
  //   const url = "http://localhost:1514/tarefa/"

  //   function carregarTarefas(){
  //     fetch(url).then(resultado => resultado.json()).then(json => {
  //       setTarefas(json)
  //     })
  //   }

  //   carregarTarefas()
  // },[])


  return (
    <div className='h-full flex bg-zinc-800 text-zinc-300 flex-col'>
      <Header />

      <div className="flex flex-1 pt-16 ">

        <aside className="fixed flex h-screen w-60 bg-zinc-700">
          <h1>Sidebar</h1>
        </aside>


        <main className='flex flex-1 w-full p-7 justify-center item-center flex-col ml-60'>
          <div className='flex justify-center h-20 w-full'>
            <BarraAdicionar />
          </div>
          <div className='flex-1'>
            <div className='grid grid-cols-3 gap-7'>
              {tarefas.map((item, i) => (
                <Tarefa key={i} nome={item.nome} prioridade={item.prioridade} />
              ))}
            </div>
          </div>
        </main>
      </div>

    </div>
  )
}
