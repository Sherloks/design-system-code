import React from 'react';
import { Container, Row, Col } from 'reactstrap'; // change to aurora import
import HtmlCodeBlock from '../components/HtmlCodeBlock';

// basic
class ButtonGroupExample1 extends React.Component
{
    render() {
      return (
        <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
          <Row>
            <Col lg="12" md="12" xs="12">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Left</button>
                <button type="button" class="btn btn-secondary">Middle</button>
                <button type="button" class="btn btn-secondary">Right</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12" xs="12">
              <HtmlCodeBlock html={`
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Left</button>
                <button type="button" class="btn btn-secondary">Middle</button>
                <button type="button" class="btn btn-secondary">Right</button>
              </div>
              `}
              />
            </Col>
          </Row>
        </Container>
  );}
}

// button toolbar
class ButtonGroupExample2 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
      <Row>
        <Col lg="12" md="12" xs="12">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-secondary">8</button>
          </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" xs="12">
          <HtmlCodeBlock html={`
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
              </div>
              <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-secondary">8</button>
              </div>
            </div>
          `}
          />
        </Col>
      </Row>
    </Container>
    )
  };
};

// button toolbar 2
class ButtonGroupExample3 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
              </div>
            </div>

            <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon2">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
              </div>
            </div>

            <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text" id="btnGroupAddon2">@</div>
                </div>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
              </div>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// Sizing
class ButtonGroupExample4 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group" role="group" aria-label="Default button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group" role="group" aria-label="Default button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            <br />
            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
              <button type="button" class="btn btn-secondary">Left</button>
              <button type="button" class="btn btn-secondary">Middle</button>
              <button type="button" class="btn btn-secondary">Right</button>
            </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// nesting
class ButtonGroupExample5 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-secondary">1</button>
              <button type="button" class="btn btn-secondary">2</button>

              <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>

                <div class="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </button>
                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="#">Dropdown link</a>
                    <a class="dropdown-item" href="#">Dropdown link</a>
                  </div>
                </div>
              </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// vertical
class ButtonGroupExample6 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

class ButtonGroupExample7 extends React.Component {
  render() {
    return (
      <Container style={{paddingLeft: '0px', paddingRight: '0px', marginTop: '15px', marginBottom: '15px'}} fluid>
        <Row>
          <Col lg="12" md="12" xs="12">
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
              <button type="button" class="btn btn-secondary">Button</button>
              <button type="button" class="btn btn-secondary">Button</button>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop2" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop3" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
              <div class="btn-group" role="group">
                <button id="btnGroupVerticalDrop4" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" xs="12">
            <HtmlCodeBlock html={`
              <div class="btn-group-vertical">
              ...
              </div>
            `}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export { ButtonGroupExample1, ButtonGroupExample2, ButtonGroupExample3, ButtonGroupExample4, ButtonGroupExample5, ButtonGroupExample6, ButtonGroupExample7 };
