// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appId, appName, imageUrl} = app
  return (
    <li key={appId} className="app-item">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
