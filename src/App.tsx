import { useEffect, useRef, useState } from "react"
import { Page } from "./Page"
import { Button } from "./Button"

export function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }, [audioRef])

  return (
    <div className="bg-zinc-100 h-[100dvh] w-[100dvw] flex justify-center items-center">
      <audio ref={audioRef} src="/bard-music.mp3" autoPlay loop></audio>
      {page === 0 && (
        <div className="relative px-5 h-[100dvh] w-[100dvw] flex flex-col gap-8 justify-center items-center bg-start-bg bg-no-repeat bg-center bg-cover">
          <div className="h-[100dvh] w-[100dvw] bg-gradient-to-r opacity-45 from-zinc-800 to-zinc-300 absolute"></div>
          <h1 className="text-zinc-50 text-lg z-10">Olá Ana Júlia você deseja começar?</h1>
          <Button onClick={() => setPage(1)}>Vamos</Button>
        </div>
      )}
      <Page currentPage={page} setPage={setPage} />

      {page === 5 && (
        <div className="relativ px-5 h-[100dvh] w-[100dvw] flex flex-col gap-8 justify-center items-center bg-end-bg bg-no-repeat bg-center bg-cover">
          <div className="h-[100dvh] w-[100dvw] bg-gradient-to-r opacity-45 from-zinc-800 to-zinc-300 absolute"></div>
          <h1 className="text-zinc-50 text-lg z-10">
            (Bardo surge para te entregar o presente e por alguns segundos você consegue compreender o que ele diz)
          </h1>

          <h1 className="text-zinc-50 z-10">
            "Parabéns Ana Julia, faça bom proveito desse presente. Dê um abraço e um beijo no Breno, pois foi ele quem me chamou."
          </h1>
          <Button onClick={() => setPage(prevState => prevState + 1)}>Revelar presente</Button>
        </div>
      )}

      {page === 6 && (
        <div className="relative h-[100dvh] w-[100dvw] flex flex-col gap-8 justify-center items-center bg-end-bg bg-no-repeat bg-center bg-cover">
          <div className="h-[100dvh] w-[100dvw] bg-gradient-to-r opacity-45 from-zinc-800 to-zinc-300 absolute"></div>
          <div className="z-10 text-center">
            <h1 className="text-yellow-300 mb-4 text-4xl z-10">
              Parabéns Ana Júlia!
            </h1>

            <h2 className="text-zinc-50 text-2xl">
              Você ganhou Escova Taiff!
            </h2>
            <h2 className="text-zinc-50  text-2xl">
              Você ganhou Protetor Térmico!
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}
