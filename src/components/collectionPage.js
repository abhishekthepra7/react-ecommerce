import * as React from 'react';
import { Item } from './item';
import Navbar from './navbar';
export default function CollectionPage(props) {
    console.log(props);
        return (
            <React.Fragment>
                <Navbar />
                {props.items.map(item => <Item {...item}/>)}
            </React.Fragment>
        )
}