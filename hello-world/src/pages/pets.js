import Image from 'next/image'

function PetsPage() {
  return (
    <div>
      {['1', '2', '3'].map(path => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt='pet' width='280' height='420' />
          </div>
        )
      })}
    </div>
  )
}

export default PetsPage