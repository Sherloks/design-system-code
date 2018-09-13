import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { translate } from 'react-i18next';

class ButtonDropdownWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.title = "Dropdown";
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{marginBottom: '15px'}} color={this.props.color}>
        <DropdownToggle caret {...this.props}>
          {this.props.title}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action 1</DropdownItem>
          <DropdownItem>Action 2</DropdownItem>
          <DropdownItem>Action 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default translate('ButtonDropdownWrapper')(ButtonDropdownWrapper);
