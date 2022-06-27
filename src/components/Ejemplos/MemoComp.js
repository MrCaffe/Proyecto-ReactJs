import React from 'react'

export const MemoComp = React.memo(() => {

	console.log ("Me Renderice")

	return (
		<div>
			<h4> Soy un Memo </h4>
		</div>
	)

})