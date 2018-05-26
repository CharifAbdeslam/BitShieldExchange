import React from 'react';
import {Row , Col} from 'reactstrap';
import LiveTicker from './LiveTicker';
import OrderForms from './OrderForms'
import TickerSymbols from './TickerSymbols';
import PropTypes from 'prop-types';

const LeftWrapperExchange=({ticker,symbols,icon})=>{
    return(<Row className="mt-2">
      <Col xs={2} className="p-0 ml-2" style={{minWidth:'320px'}}>
        <LiveTicker ticker={ticker} symbols={symbols} icon={icon}/>
        <TickerSymbols/>
        <div className="exchange-field mt-2">
          <OrderForms ticker={ticker} symbols={symbols} />
        </div>
      </Col>
      <Col className="exchange-field ml-2 mr-2">
        <h1 className="text-white">HERE GOES THE CHART</h1>
      </Col>
    </Row>);
  }


export default LeftWrapperExchange;
LeftWrapperExchange.propTypes={
  ticker:PropTypes.array.isRequired,
  icon:PropTypes.string.isRequired,
  symbols:PropTypes.string.isRequired,
};
