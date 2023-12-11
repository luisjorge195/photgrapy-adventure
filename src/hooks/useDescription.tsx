import  { useState } from 'react'

const useDescription = () => {
    const [description, setDescription] = useState('')

  return {
    description,
    setDescription
  }
}

export default useDescription