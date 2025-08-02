import './index.css'

const TabItem = props => {
  const {onClickTab, tabDetails, isActive} = props
  const {tabId, displayText} = tabDetails

  const handleClick = () => onClickTab(tabId)

  const activeClass = isActive ? 'active-tab' : ''

  return (
    <li>
      <button
        className={`tab-button ${activeClass}`}
        type="button"
        onClick={handleClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
