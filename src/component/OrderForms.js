import React from 'react';
import LimitForm from './LimitForm';
import ExchangeForm from './ExchangeForm';
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

    return (
      <div>
        <span className="text-white ml-3" style={{lineHeight:'1.7'}}>ORDER FORM: ETH/BTC</span>
        <Nav tabs className="ml-1 mr-1 pt-0">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              EXCHANGE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              LIMIT
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="pb-2" activeTab={this.state.activeTab}>
          <TabPane className="tab-form-wrapper p-2 ml-1 mr-1" tabId="1">
              <ExchangeForm />
          </TabPane>
          <TabPane className="tab-form-wrapper p-2 ml-1 mr-1" tabId="2">
            <LimitForm />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
