import React, { useEffect, useState} from 'react'

export const LoadYesno: React.FunctionComponent<{
}> = () => {
    const [responseImg, setresponseImg] = useState("")

  useEffect(() => {
    fetch('https://yesno.wtf/api')
    .then(function(response) {
        return response.json()
      }).then( data => data.image).then((image)=> {
          setresponseImg(image)
      })
  }, []);

  return (
    <div>
    <img onClick={} src={responseImg} alt=""/>
    </div>
  )
}




