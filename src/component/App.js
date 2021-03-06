import React from 'react';
import {Container} from 'reactstrap';
import LeftWrapperExchange from './LeftWrapperExchange';
import MenuExchange from './MenuExchange';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {_getTicker} from '../actions/index';

class Exchange extends React.Component {
  componentDidMount() {
      this.props._getTicker();
  }
  render() {
    return (<Router>
      <div>
      <MenuExchange />
      <Container fluid>
          <Switch>
              <Route exact path="/exchange" component={(props)=>
                <LeftWrapperExchange
                  symbols="ETH/BTC"
                  ticker={this.props.tickerEth}
                  icon = "cc ETH"/>}/>
              <Route exact path="/exchange/ETH/BTC" component={(props)=>
                <LeftWrapperExchange
                  symbols="ETH/BTC"
                  ticker={this.props.tickerEth}
                  icon = "cc ETH"/>}/>
             <Route exact path="/exchange/BCH/BTC" component={(props)=>
                <LeftWrapperExchange
                  symbols="BCH/BTC"
                  ticker={this.props.tickerBch}
                  icon = "cc BCH"/>}/>
            <Route exact path="/exchange/XRP/BTC" component={(props)=>
                <LeftWrapperExchange
                  symbols="XRP/BTC"
                  ticker={this.props.tickerXrp}
                  icon = "cc XRP"/>}/>
            <Route exact path="/exchange/LTC/BTC" component={(props)=>
                <LeftWrapperExchange
                  symbols="LTC/BTC"
                  ticker={this.props.tickerLtc}
                  icon = "cc LTC"/>}/>
            <Route exact path="/exchange/XMR/BTC" component={(props)=>
                <LeftWrapperExchange
                  symbols="XMR/BTC"
                  ticker={this.props.tickerXmr}
                  icon = "cc XMR"/>}/>
            <Route exact path="/exchange/ETC/BTC" component={(props)=>
                <LeftWrapperExchange
                  symbols="ETC/BTC"
                  ticker={this.props.tickerEtc}
                  icon = "cc ETC"/>}/>
            <Route exact path="/exchange/IOT/BTC" component={(props)=>
                  <LeftWrapperExchange
                  symbols="IOT/BTC"
                  ticker={this.props.tickerIot}
                  icon = "cc IOTA"/>}/>
            <Route exact path="/exchange/DSH/BTC" component={(props)=>
                  <LeftWrapperExchange
                    symbols="DSH/BTC"
                    ticker={this.props.tickerDsh}
                    icon = "cc DASH"/>}/>
            <Route exact path="/exchange/NEO/BTC" component={(props)=>
                    <LeftWrapperExchange
                    symbols="NEO/BTC"
                    ticker={this.props.tickerNeo}
                    icon = "cc NEO"/>}/>
            <Route exact path="/exchange/ZEC/BTC" component={(props)=>
                    <LeftWrapperExchange
                    symbols="ZEC/BTC"
                    ticker={this.props.tickerZec}
                    icon = "cc ZEC"/>}/>
            <Route exact path="/exchange/EOS/BTC" component={(props)=>
                    <LeftWrapperExchange
                    symbols="EOS/BTC"
                    ticker={this.props.tickerEos}
                    icon = "cc EOS"/>}/>
            <Route exact path="/exchange/OMG/BTC" component={(props)=>
                    <LeftWrapperExchange
                    symbols="OMG/BTC"
                    ticker={this.props.tickerOmg}
                    icon = "cc OMG"/>}/>
            <Route exact path="/exchange/XVG/BTC" component={(props)=>
                    <LeftWrapperExchange
                    symbols="XVG/BTC"
                    ticker={this.props.tickerXvg}
                    icon = "cc XVG"/>}/>
            <Route exact path="/exchange/GNT/BTC" component={(props)=>
                    <LeftWrapperExchange
                    symbols="GNT/BTC"
                    ticker={this.props.tickerGnt}
                    icon = "cc GNT"/>}/>
            <Route exact path="/exchange/QTM/BTC" component={(props)=>
                    <LeftWrapperExchange
                    symbols="QTM/BTC"
                    ticker={this.props.tickerQtm}
                    icon = "cc QTUM"/>}/>
          </Switch>

    </Container>
  </div>
    </Router>
    )
  }
}
const mapStateToProps = state =>({
  tickerEth:state.price.tickerEth,
  tickerBch:state.price.tickerBch,
  tickerXrp:state.price.tickerXrp,
  tickerLtc:state.price.tickerLtc,
  tickerXmr:state.price.tickerXmr,
  tickerEtc:state.price.tickerEtc,
  tickerIot:state.price.tickerIot,
  tickerDsh:state.price.tickerXmr,
  tickerNeo:state.price.tickerNeo,
  tickerZec:state.price.tickerZec,
  tickerEos:state.price.tickerEos,
  tickerOmg:state.price.tickerOmg,
  tickerXvg:state.price.tickerXvg,
  tickerGnt:state.price.tickerGnt,
  tickerQtm:state.price.tickerQtm,
  });
export default connect(mapStateToProps,{_getTicker})(Exchange);
Exchange.propTypes={
  tickerEth:PropTypes.array.isRequired,
  tickerBch:PropTypes.array.isRequired,
  tickerXrp:PropTypes.array.isRequired,
  tickerLtc:PropTypes.array.isRequired,
  tickerXmr:PropTypes.array.isRequired,
  tickerEtc:PropTypes.array.isRequired,
  tickerIot:PropTypes.array.isRequired,
  tickerDsh:PropTypes.array.isRequired,
  tickerNeo:PropTypes.array.isRequired,
  tickerZec:PropTypes.array.isRequired,
  tickerEos:PropTypes.array.isRequired,
  tickerOmg:PropTypes.array.isRequired,
  tickerXvg:PropTypes.array.isRequired,
  tickerGnt:PropTypes.array.isRequired,
  tickerQtm:PropTypes.array.isRequired,
  _getTicker:PropTypes.func.isRequired
};
