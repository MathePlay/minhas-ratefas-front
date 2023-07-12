"use client"
import Grid from './components/Grid'
import Linhas from './components/Linhas'
import Header from './components/Header'
import BarraAdicionar from './components/BarraAdicionar'
import Sidebar  from './components/Sidebar'
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

      <div className="flex flex-1 mt-16 ">

        <Sidebar/>

        <main className='flex flex-1 w-full p-7 justify-center item-center flex-col ml-64'>
          <div className='flex justify-center h-20 w-full'>
            <BarraAdicionar />
          
          </div>
          
          <div className='flex-1'>
            {/* <Grid /> */}
            <Linhas />
          </div>
        </main>
      </div>

    </div>
  )
}
