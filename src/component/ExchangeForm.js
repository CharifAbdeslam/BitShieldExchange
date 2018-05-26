import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import { Tooltip,Col,Form } from 'reactstrap';
class ExchangeForm extends React.Component{
  constructor(props) {
    super(props);
    this.toggleToolTipSell = this.toggleToolTipSell.bind(this);
    this.toggleToolTipBuy = this.toggleToolTipBuy.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.state = {
      toolTipOpenSell:false,
      tooltipOpenBuy:false,
      amount:0
    };
  }
  calculateTotal(e){
    this.setState({amount:e.target.value})
  }
  toggleToolTipSell() {
      this.setState({
        toolTipOpenSell:!this.state.toolTipOpenSell
      });
    }

 toggleToolTipBuy() {
        this.setState({
          tooltipOpenBuy:!this.state.tooltipOpenBuy
        });
      }

  render(){
    const {toolTipOpenSell,tooltipOpenBuy,amount} = this.state;
    const {ticker} = this.props;
    return(
      <Form className="exchange-form row">
          <Col>
            <label>PRICE BTC:</label><br></br>
            <input className="p-1" readOnly value={ticker[1] ? ticker[1][6].toFixed(8):'0.00'}/><br></br>
            <label>AMOUNT:</label>
            <span id="TooltipMaxSell" className="circle-span-sell"><FontAwesomeIcon icon={faCircle}/></span>
            <Tooltip placement="top" isOpen={toolTipOpenSell}
            target="TooltipMaxSell"
            toggle={this.toggleToolTipSell}>
            Claculate max sell amount using your available balance.
          </Tooltip>
            <span id="TooltipMaxBuy" className="mr-2 circle-span-buy"><FontAwesomeIcon icon={faCircle}/></span>
            <input onChange={this.calculateTotal} className="p-1"/><br></br>
            <Tooltip placement="top" isOpen={tooltipOpenBuy}
            target="TooltipMaxBuy"
            toggle={this.toggleToolTipBuy}>
            Claculate max buy amount using your available balance.
          </Tooltip>
          </Col>
          <Col>
            <label>TOTAL:</label><br></br>
            <input className="p-1" readOnly value={ticker[1] ? ticker[1][6].toFixed(8)*amount:'0.00'} /><br></br>

          </Col>
          <div className="d-flex justify-content-between pl-3 pr-3">
            <button type="submit" className="excange-btn">BUY EXCHANGE</button>
            <button type="submit" className="excange-btn">SELL EXCHANGE</button>
          </div>
      </Form>
    )
  }
}

export default ExchangeForm;
