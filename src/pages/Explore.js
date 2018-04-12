import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, Media, CardBody, Button} from 'reactstrap';
import classnames from 'classnames';
import Container from "../components/Container";

export default class Example extends React.Component {
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
        <Container>
        <Row>
        <Col style={{ marginTop: 30, marginBottom: 30 }} size="md-12">
            <h1 className="text-center">Explore</h1>
        </Col>
      </Row>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Blogs
            </NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Resources
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {/* Tab 1 contents */}
            {/* 1st Blog */}
            <Row>
            <Media style= {{marginTop: 30, marginBottom: 15}}>
              <Media left href="#">
              <img src="https://fossbytes.com/wp-content/uploads/2018/03/China-Facial-Recognition-Technology.jpg" alt="Smiley face" height="250" width="500"/>
              </Media>
              <Media body style= {{marginLeft: 20}}>
                <Media heading>
                China Develops Facial Recognition Technology; Scans Country’s Population In 1 Second
                </Media>
                <Media subtitle style= {{fontStyle: "italic", fontSize: 14}}>
                March 28, 2018
                </Media>
                In a quest to upgrade the surveillance systems, China has implemented facial recognition technology across sixteen regions of the country.
                <br/>
                <br/>
                Supposedly, the system can scan over China’s population which is about 1.4 billion in 1 second and the world’s population in almost 2 seconds.
                <br/>
                
                <Button outline color="danger" style= {{marginTop: 10}}>Read More</Button>
              </Media>
              
            </Media>
            </Row>
            {/* Second Blog */}
            <Row>
            <Media style= {{marginTop: 30, marginBottom: 15}}>
              <Media left href="#">
              <img src="https://fossbytes.com/wp-content/uploads/2017/03/best-hacker-distro-linux.jpg" alt="Smiley face" height="250" width="500"/>
              </Media>
              <Media body style= {{marginLeft: 20}}>
                <Media heading>
                12 Best Operating Systems For Ethical Hacking And Penetration Testing | 2018 Edition
                </Media>
                <Media subtitle style= {{fontStyle: "italic", fontSize: 14}}>
                March 27, 2018
                </Media>
                Wondering which is the best operating system for ethical hacking and pen testing purposes? Trying to solve this problem, Fossbytes has prepared a list of the most efficient Linux distros for hacking purposes that you need to check out in 2018.
                <br/>
                
                <Button outline color="danger" style= {{marginTop: 10}}>Read More</Button>
              </Media>
              
            </Media>
            </Row>
            {/* end o blog */}
            {/* Third Blog */}
            <Row>
            <Media style= {{marginTop: 30, marginBottom: 15}}>
              <Media left href="#">
              <img src="https://fossbytes.com/wp-content/uploads/2018/03/Android-P-Features-On-Oreo-Android-P-ify.png" alt="Smiley face" height="250" width="500"/>
              </Media>
              <Media body style= {{marginLeft: 20}}>
                <Media heading>
                Get Android P Features On Your Android Oreo Phone With Android P-ify
                </Media>
                <Media subtitle style= {{fontStyle: "italic", fontSize: 14}}>
                March 28, 2018
                </Media>
                Android P’s first developer preview arrived on March 7 with many features and improvements. The things many would notice quickly are the revamped Notifications shade and the colorful settings app. Also, the position of the clock in the status bar has changed.
                <br/>
                
                <Button outline color="danger" style= {{marginTop: 10}}>Read More</Button>
              </Media>
              
            </Media>
            </Row>
            {/* end o blog */}
           {/* Fourth Blog */}
           <Row>
            <Media style= {{marginTop: 30, marginBottom: 15}}>
              <Media left href="#">
              <img src="https://fossbytes.com/wp-content/uploads/2017/07/100-Disk-Usage-Main.png" alt="Smiley face" height="250" width="500"/>
              </Media>
              <Media body style= {{marginLeft: 20}}>
                <Media heading>
                How To Fix 100% Disk Usage In Windows 10?                </Media>
                <Media subtitle style= {{fontStyle: "italic", fontSize: 14}}>
                March 28, 2018
                </Media>
                If you’re a Windows user, you might have come across the 100% disk usage problem. Looking at the numbers in the task manager, it seems that your hard drive is doing some seriously hard work. In reality, your machine is sitting idle doing nothing but playing your favorite song. I don’t think the media player would be responsible for keeping your hard drive busy up to its full capacity.
                <br/>
                
                <Button outline color="danger" style= {{marginTop: 10}}>Read More</Button>
              </Media>
              
            </Media>
            </Row>
            {/* end o blog */}
           {/* Fifth Blog */}
           <Row>
            <Media style= {{marginTop: 30, marginBottom: 15}}>
              <Media left href="#">
              <img src="https://fossbytes.com/wp-content/uploads/2016/12/chrome-vs-chromium-difference.jpg" alt="Smiley face" height="250" width="500"/>
              </Media>
              <Media body style= {{marginLeft: 20}}>
                <Media heading>
                What Is The Difference Between Google Chrome And Chromium Browser?                
                </Media>
                <Media subtitle style= {{fontStyle: "italic", fontSize: 14}}>
                March 28, 2018
                </Media>
                What is Chromium browser? It is an open-source web browser developed and maintained by The Chromium Project. The git rolling release web browser was first introduced in 2008, and its different parts are released under different free software licenses which include BSD License (for the portion written by Google) and MIT License, LGPL, etc. for other portions.
                <br/>
                
                <Button outline color="danger" style= {{marginTop: 10}}>Read More</Button>
              </Media>
              
            </Media>
            </Row>
            {/* end o blog */}
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {/* special title cards second tab */}
              {/* youtube cards 1 */}
              <Col style={{marginTop: 15}} sm="6">
              <Card>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="pc video" width="560" height="315" src="https://www.youtube.com/embed/IhX0fOUYd8Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>              </div>               
                <CardBody>
                  <CardTitle>How to Build a PC! Step-by-step</CardTitle>
                  <CardText>Specs - <a href="http://www.bequiet.com/en/case/769">http://www.bequiet.com/en/case/769</a></CardText>
                  <CardText>
                  <small>Bitwit</small>
                    <br/>
                    <small className="text-muted">Published on May 23, 2017</small>                  
                  </CardText>
                </CardBody>
              </Card>
              </Col>
              {/* youtube cards 2 */}
              <Col style={{marginTop: 15}} sm="3">
              <Card>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="pc video" width="560" height="315" src="https://www.youtube.com/embed/RUR3tLk9NSg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>              </div>                               
              <CardBody>
                  <CardTitle>How NOT to build a PC</CardTitle>
                  <CardText>
                    <small className="text-muted">Published on Mar 22, 2018</small>
                  </CardText>
                </CardBody>
              </Card>
              {/* same column lil box */}
              <Card style={{ marginTop: 15}}>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="audio production build" width="560" height="315" src="https://www.youtube.com/embed/yi8hwdpfHmI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <CardBody>
                  <CardTitle>Build an Audio Production Computer for Under $1,500</CardTitle>
                  <CardText>
                    <small className="text-muted">Published on Oct 21, 2016</small>
                  </CardText>
                </CardBody>
              </Card>
              </Col>
               {/* youtube cards 3 */}
              <Col style={{marginTop: 15}} sm="3">
              <Card>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="first 5" width="560" height="315" src="https://www.youtube.com/embed/LbpqkiaO7q4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
                <CardBody>
                  <CardTitle>First 5 Things to Do with a New PC Build</CardTitle>
                  <CardText>
                    <small className="text-muted">Published on Oct 15, 2016</small>
                  </CardText>
                </CardBody>
              </Card>
              {/* same column lil box */}
              <Card style={{ marginTop: 15}}>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="batman themed build" width="560" height="315" src="https://www.youtube.com/embed/1dqb_NxQcOs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                  <CardBody>
                  <CardTitle>Building a Batman Themed Gaming PC</CardTitle>
                  <CardText>
                    <small className="text-muted">Published on Mar 21, 2018</small>
                  </CardText>
                </CardBody>
              </Card>
              </Col>             
              {/* youtube cards 4 */}
              <Col style={{marginTop: 15}} sm="3">
              <Card>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="used craiglist pc" width="560" height="315" src="https://www.youtube.com/embed/wfWWjicCRf8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>             
              </div>
              <CardBody>
                  <CardTitle>I bought a USED PC on Craigslist. Here's what happened!</CardTitle>
                  <CardText>Get 10% off Squarespace!! <a href="http://www.squarespace.com/bitwit">http://www.squarespace.com/bitwit</a><br/>
                    <br/>
                    BITWIT MERCH
                    <br/>
                    <a href="http://www.bitwit.tech/store/">http://www.bitwit.tech/store/</a></CardText>
                  <CardText>
                    <small>Bitwit</small>
                    <br/>
                    <small className="text-muted">Published on Mar 9, 2018</small>
                  </CardText>
                </CardBody>
              </Card>
              </Col>
              <Col style={{marginTop: 15}} sm="3">
              <Card>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="bros pc" width="560" height="315" src="https://www.youtube.com/embed/21-PTzcVhWs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>              </div>
              <CardBody>
                  <CardTitle>My Little Brother's New $750 4K Gaming PC!</CardTitle>
                  <CardText>This PC has the brawn and the looks to handle 4K games such as PUBG, Fortnite, CS:GO, Overwatch, and more while staying in an affordable price.</CardText>
                  <CardText>
                    <small>ScatterVolt</small>
                    <br/>
                    <small className="text-muted">Published on Jan 14, 2018</small>
                  </CardText>
                </CardBody>
              </Card>
              </Col>
              <Col style={{marginTop: 15}} sm="6">
              <Card>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe title="500 dollar build" width="560" height="315" src="https://www.youtube.com/embed/dFyhn6seoow" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>                
              </div>
              <CardBody>
                  <CardTitle>How To Build a $500 Gaming PC in 2018</CardTitle>
                  <CardText>Great for building a starter gaming PC on a budget!</CardText>
                  <CardText>
                    <small>Paul's Hardware</small>
                    <br/>
                    <small className="text-muted">Published on Feb 18, 2018</small>
                  </CardText>
                </CardBody>
              </Card>
              </Col>
              
            </Row>
          </TabPane>
          <TabPane tabId="3">
            {/* Tab 1 contents */}
            <Row>
              <Col style={{marginTop: 15}} sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        </Container>
      </div>
    );
  }
}