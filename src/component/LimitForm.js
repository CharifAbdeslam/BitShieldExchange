import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import {Tooltip, Col, Form} from 'reactstrap';

class LimitForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggleToolTipSellLimit = this.toggleToolTipSellLimit.bind(this);
    this.toggleToolTipBuyLimit = this.toggleToolTipBuyLimit.bind(this);
    this.toggleToolTipSellAmount = this.toggleToolTipSellAmount.bind(this);
    this.toggleToolTipBuyAmount = this.toggleToolTipBuyAmount.bind(this);
    this.state = {
      toolTipOpenSellLimit: false,
      tooltipOpenBuyLimit: false,
      toolTipOpenSellAmount:false,
      toolTipOpenBuyAmount:false
    };
  }
  toggleToolTipSellLimit() {
    this.setState({
      toolTipOpenSellLimit: !this.state.toolTipOpenSellLimit
    });
  }

  toggleToolTipBuyLimit() {
    this.setState({
      tooltipOpenBuyLimit: !this.state.tooltipOpenBuyLimit
    });
  }
  toggleToolTipBuyAmount() {
    this.setState({
      toolTipOpenBuyAmount: !this.state.toolTipOpenBuyAmount
    });
  }
  toggleToolTipSellAmount() {
    this.setState({
      toolTipOpenSellAmount: !this.state.toolTipOpenSellAmount
    });
  }
  render() {
    const {toolTipOpenSellLimit,
           tooltipOpenBuyLimit,
           toolTipOpenBuyAmount,
           toolTipOpenSellAmount} = this.state;

    return (<Form className="exchange-form row">
      <Col>
        <label>LIMIT PRICE BTC:</label>
        <span id="TooltipMaxSellLimit" className="circle-span-sell"><FontAwesomeIcon icon={faCircle}/></span>
        <Tooltip placement="top" isOpen={toolTipOpenSellLimit} target="TooltipMaxSellLimit" toggle={this.toggleToolTipSellLimit}>
          Set the price field to the current lowest bid
        </Tooltip>
        <span id="TooltipMaxBuyLimit" className="circle-span-buy mr-2"><FontAwesomeIcon icon={faCircle}/></span>
        <input className="p-1"/>
        <br></br>
        <Tooltip placement="top" isOpen={tooltipOpenBuyLimit} target="TooltipMaxBuyLimit" toggle={this.toggleToolTipBuyLimit}>
          Set the price field to the current highest bid
        </Tooltip>
        <label>AMOUNT:</label>
        <span id="TooltipMaxSellAmount" className="circle-span-sell"><FontAwesomeIcon icon={faCircle}/></span>
        <Tooltip placement="top" isOpen={toolTipOpenSellAmount} target="TooltipMaxSellAmount" toggle={this.toggleToolTipSellAmount}>
          Claculate max sell amount using your available balance.
        </Tooltip>
        <span id="TooltipMaxBuyAmount" className="circle-span-buy mr-2"><FontAwesomeIcon icon={faCircle}/></span>
        <input className="p-1"/>
        <br></br>
        <Tooltip placement="top" isOpen={toolTipOpenBuyAmount} target="TooltipMaxBuyAmount" toggle={this.toggleToolTipBuyAmount}>
          Claculate max buy amount using your available balance.
        </Tooltip>
      </Col>
      <Col>
        <label>TOTAL:</label>
        <br></br>
        <input className="p-1"/>
        <br></br>
      </Col>
      <div className="d-flex justify-content-between pl-3 pr-3">
        <button type="submit" className="excange-btn">BUY LIMIT</button>
        <button type="submit" className="excange-btn">SELL LIMIT</button>
      </div>
    </Form>)
  }
}

export default LimitForm;
