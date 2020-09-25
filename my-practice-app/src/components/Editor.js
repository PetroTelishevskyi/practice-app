import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import {
    StyleTracesPanel,
    SingleSidebarItem,
    Button,
    PanelMenuWrapper,
} from 'react-chart-editor';
import CsvReader from '../components/CsvReader';
import GraphCreatePanel  from '../components/GraphCreatePanel';
import StyleAxesPanel from '../components/StyleAxesPanel';
import StyleLegendPanel from '../components/StyleLegendPanel';
import StyleLayoutPanel from '../components/StyleLayoutPanel';



export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render(){
        return(
            <PanelMenuWrapper>
                <GraphCreatePanel group='Graph' name='Create' />
                <StyleTracesPanel group='Style' name='Traces' />
                <StyleLayoutPanel group='Style' name='Layout' />
                <StyleLegendPanel group='Style' name='Legend' />
                <StyleAxesPanel group='Style' name='Axes' />
                <SingleSidebarItem>
                    <Button label='Import' onClick={() => this.openModal()}/>
                    <Modal 
                        visible={this.state.visible}
                        width="500"
                        height="350"
                        effect="fadeInDown"
                        onClickAway={() => this.closeModal()}
                    >
                        <div>
                            <h1>Upload File</h1>
                            <CsvReader csvUpdater={this.props.csvUpdater}/>
                            <button onClick={() => this.closeModal()}>Close</button>
                        </div> 
                    </Modal>
                </SingleSidebarItem>                
            </PanelMenuWrapper>
        );
    }
}