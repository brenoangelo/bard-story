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
    },
    5: {
      textOne: '(Bardo emite sons mais fortes com sua trombeta e sai voando em direção ao quarto da bagunça)',
      textTwo: 'Parece que ele está querendo entregar algo a você',
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
    <div className="flex flex-col justify-center h-[100dvh] items-center relative gap-8 px-12 overflow-hidden">
      <p>{pageInfo?.textOne}</p>
      <p>{pageInfo?.textTwo}</p>
      {pageInfo?.input &&
        (pageInfo.input.type === 'text' ? (
          <input type='text' name={pageInfo.input.name} placeholder={pageInfo.input.placeholder} id='' />
        ) : (
          <select>
            <option value="">Selecione</option>
            <option value="majulas">majulas</option>
            <option value="ww">asdqwe</option>
            <option value="ee">Seleciasdasone</option>
            <option value="zz">asdasqe</option>
          </select>
        ))}
      <Button onClick={() => setPage(prevState => prevState + 1)}>{pageInfo?.buttonText}</Button>

      {pageInfo.status === 'hidden' ? <img src="/bard.png" className="absolute bottom-[-120px]" /> : <img src="/bard.png" className="absolute bottom-0" />}
    </div>
  )
}
