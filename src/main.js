import { render } from 'react-dom'
import routes from 'router'

render(
	routes(), 
	document.getElementById('app')
)