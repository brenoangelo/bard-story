import { Button } from "./Button"

interface PageProps {
  currentPage: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export function Page({ currentPage, setPage }: PageProps) {
  const pageInfo = {
    1: {
      textOne: 'Então um ser misterioso surge tocando sua trombeta...',
      status: 'hidden',
      input: null,
      buttonText: 'Continuar',
    },
    2: {
      textOne: 'Quem você acha que está emitindo esses sons calmos e que não conseguimos compreender ?',
      status: 'hidden',
      input: {
        type: 'text',
        name: 'name',
        placeholder: 'Digite aqui...'
      },
      buttonText: 'Responder'
    },
    3: {
      textOne: '(Sons emitidos pelo Bardo com sua trombeta)',
      textTwo: 'O que ele quis dizer?',
      status: 'visible',
      input: {
        type: 'select',
        name: 'bard-says',
        placeholder: 'selecione'
      },
      buttonText: 'Responder'
    },
    4: {
      textOne: '(Bardo emite sons novamente com sua trombeta)',
      textTwo: 'Parece que ele quer que você encontre algo importante que está na sua mochila.',
      status: 'visible',
      input: {
        type: 'text',
        name: 'item',
        placeholder: 'Digite aqui o item encontrado...'
      },
      buttonText: 'Continuar'
    }
  }[currentPage]

  if (!pageInfo) return <></>

  return (
    <div className="flex flex-col text-zinc-600 justify-center h-[100dvh] items-center relative gap-8 px-12 overflow-hidden">
      <p>{pageInfo?.textOne}</p>
      <p>{pageInfo?.textTwo}</p>
      {pageInfo?.input &&
        (pageInfo.input.type === 'text' ? (
          <div className="bg-gradient-to-b w-full inline-flex relative from-amber-200 to-yellow-800 p-1 z-10">
            <input type='text' className="z-10 h-10 bg-zinc-50 w-full px-3 outline-0" name={pageInfo.input.name} placeholder={pageInfo.input.placeholder} id='' />
          </div>
        ) : (
          <div className="bg-gradient-to-b w-full inline-flex relative from-amber-200 to-yellow-800 p-1 z-10">
            <select className="z-10 bg-zinc-50 w-full h-10 px-3">
              <option value="">Selecione</option>
              <option value="majulas">majulas</option>
              <option value="ww">asdqwe</option>
              <option value="ee">Seleciasdasone</option>
              <option value="zz">asdasqe</option>
            </select>
          </div>
        ))}
      <Button onClick={() => setPage(prevState => prevState + 1)}>{pageInfo?.buttonText}</Button>

      {pageInfo.status === 'hidden' ? <img src="/bard.png" className="absolute bottom-[-120px]" /> : <img src="/bard.png" className="absolute bottom-0" />}
    </div>
  )
}
