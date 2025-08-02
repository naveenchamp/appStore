import './index.css'

const TabItem = props => {
  const {onClickTab, tabDetails, isActive} = props
  const {tabId, displayText} = tabDetails

  const handleClick = () => onClickTab(tabId)

  const activeClass = isActive ? 'active-tab' : ''

  return (
    <li className={`tab-button ${activeClass}`} onClick={handleClick}>
      {displayText}
    </li>
  )
}

export default TabItem
