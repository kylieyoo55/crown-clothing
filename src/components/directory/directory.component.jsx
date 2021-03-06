import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux';
import './directory.styles.scss';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector} from 'reselect';


 const Directory =({section})=>(
 <div className='directory-menu'>
{section.map( ({id,...otherSectionProps})=>(
    <MenuItem  key={id} {...otherSectionProps} />
))}
    </div>)

const mapStateToProps=createStructuredSelector({
section:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);