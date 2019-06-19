import React from 'react'
import AlgoOrderTable from '../../components/AlgoOrderTable'


const orders = [
  // all we care about is gid & symbol for rendering ([_, gid, _, symbol])
  [null, 0, null, 'tBTCUSD'],
  [null, 0, null, 'tBTCUSD'],
  [null, 0, null, 'tBTCUSD'],
  [null, 0, null, 'tBTCUSD'],
  // note strat (1) is stopped
  [null, 2, null, 'tLEOUSD'],
  [null, 2, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
  [null, 42, null, 'tLEOUSD'],
]


export default class AlgoOrdersView extends React.Component {
  state = {}

  render() {
   const { algoOrders } = this.props
   console.log(algoOrders)
    return (
      <div className='hfui_view__wrapper'>
        <h1>Algo Orders</h1>
        <AlgoOrderTable
          algoOrders={algoOrders}
          orders={orders} />
      </div>
    )
  }
}
