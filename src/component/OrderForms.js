import React from 'react';
import { TabContent,
         TabPane, Nav,
         NavItem, NavLink,
         Row, Col,FormGroup,
         Form,Input,Label } from 'reactstrap';
import classnames from 'classnames';

export default class OrderForms extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
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
        <Nav tabs className="ml-1 mr-1">
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
            <Row>
              <Col sm="8">
                <Form className="exchange-form">
                    <label>PRICE:</label><br></br>
                    <input /><br></br>
                    <label>AMOUNT:</label><br></br>
                    <input/><br></br>
                    <label>TOTAL:</label><br></br>
                    <input /><br></br>
                </Form>
              </Col>
            </Row>
          </TabPane>
          <TabPane className="tab-form-wrapper p-2 ml-1 mr-1" tabId="2">
            <Row>
              <Col sm="12">
<h4 className="text-white">Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
