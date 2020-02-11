import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="asterisk" to="/time-series-data-point">
      Time Series Data Point
    </MenuItem>
    <MenuItem icon="asterisk" to="/time-series">
      Time Series
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee">
      Employee
    </MenuItem>
    <MenuItem icon="asterisk" to="/division">
      Division
    </MenuItem>
    <MenuItem icon="asterisk" to="/department">
      Department
    </MenuItem>
    <MenuItem icon="asterisk" to="/government">
      Government
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
