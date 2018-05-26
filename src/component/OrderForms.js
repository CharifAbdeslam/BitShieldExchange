import React from 'react';
import LimitForm from './LimitForm';
import ExchangeForm from './ExchangeForm';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faRandom from '@fortawesome/fontawesome-free-solid/faRandom';
import faGreaterThanEqual from '@fortawesome/fontawesome-free-solid/faGreaterThanEqual';
import faChartPie from '@fortawesome/fontawesome-free-solid/faChartPie';
import { TabContent,
         TabPane, Nav,
         NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

export default class OrderForms extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {activeTab: '1'};
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const {symbols , ticker} = this.props;
    return (
      <div>
        <span className="text-white ml-3" style={{lineHeight:'1.7'}}>ORDER FORM: <strong>{symbols}</strong></span>
        <Nav tabs className="nav-order-form ml-1 mr-1 mt-2 pt-0">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              <FontAwesomeIcon icon={faRandom} className="mr-1"/>
              EXCHANGE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              <FontAwesomeIcon icon={faGreaterThanEqual} className="mr-1"/>
              LIMIT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>
              <FontAwesomeIcon icon={faChartPie} className="mr-1"/>
              BALANCE
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="pb-2" activeTab={this.state.activeTab}>
          <TabPane className="tab-form-wrapper p-2 ml-1 mr-1" tabId="1">
              <ExchangeForm price = {this.props.avg}/>
          </TabPane>
          <TabPane className="tab-form-wrapper p-2 ml-1 mr-1" tabId="2">
            <LimitForm {...this.props}/>
          </TabPane>
          <TabPane className="tab-form-wrapper p-2 ml-1 mr-1" tabId="3">
            <h1 className="text-white">BALANCE GOES HERE</h1>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
