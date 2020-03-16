import React, { useEffect, useState} from 'react'
import { spawn } from 'child_process';


interface Geolocation {
    title: string
}
export const Geolocation: React.FunctionComponent<{
}> = () => {
    const [ latitude, setLatitude] = useState(0)
    const [ longitude, setLongitude] = useState(0)

    const [id, setId] = useState(0)
     const [isLoading, setIsLoading] = useState(false)
     const [hasError, setHasError] = useState(false)

      useEffect( () => {
        setIsLoading(true)
        const id = navigator.geolocation.watchPosition( position => {
            const { latitude, longitude } = position.coords
            setLatitude(latitude)
            setLongitude(longitude)
            setIsLoading(false)
            setHasError(false)
        })

        setId(id)

        return ()=> navigator.geolocation.clearWatch(id)

      }, [])



  return (
    <div>
        {isLoading && <span>Cargando...</span>}
        {!isLoading && (
            <div>
                <p>{latitude}</p>
                <p>{longitude}</p>
            </div>

        )
        }

        
    </div>
  )
}




