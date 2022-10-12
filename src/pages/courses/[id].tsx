import React, { useEffect, useState } from 'react'

const curso = ({location,params}: any) => {

    const [cursoId,setCursoId] = useState(null);

	useEffect(() => {
		setCursoId(params.id)
	}, [params])

  return (
    <div>This is the {cursoId} course.</div>
  )
}

export default curso;