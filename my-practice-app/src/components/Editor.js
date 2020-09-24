import React, {Component} from 'react';
import {
    GraphCreatePanel,
    StyleLayoutPanel,
    StyleAxesPanel,
    StyleTracesPanel,
    StyleLegendPanel,
    SingleSidebarItem,
    Button,
    PanelMenuWrapper,
} from 'react-chart-editor';

export default class Editor extends Component {
    render(){
        return(
            <PanelMenuWrapper>
                <GraphCreatePanel group='Graph' name='Create' />
                <StyleTracesPanel group='Style' name='Traces' />
                <StyleLayoutPanel group='Style' name='Layout' />
                <StyleLegendPanel group='Style' name='Legend' />
                <StyleAxesPanel group='Style' name='Axes' />                
            </PanelMenuWrapper>
        );
    }
}