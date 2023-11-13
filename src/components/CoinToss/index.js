// Write your code here
import {Component} from 'react'
import './index.css'

const headTossImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailTossImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headCount: 0, tailCount: 0, tossResultImg: headTossImg}

  onClickToss = () => {
    const {headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (tossResult === 0) {
      tossImage = headTossImg
      latestHeadCount += 1
    } else {
      tossImage = tailTossImg
      latestTailCount += 1
    }

    this.setState({
      headCount: latestHeadCount,
      tailCount: latestTailCount,
      tossResultImg: tossImage,
    })
  }

  render() {
    const {headCount, tailCount, tossResultImg} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImg} alt="toss result" className="toss-img" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="toss-counting">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
