import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Plotly from 'plotly.js/lib/index-basic';
import PlotlyEditor, {localizeString} from 'react-chart-editor';
import 'react-chart-editor/lib/react-chart-editor.css';
import {EventEmitter} from 'events';
import Editor from './components/Editor';

const config = {
  displaylogo: false,
  toImageButtonOptions: {
    format: 'png',  
    filename: 'custom_image',
    height: 500,
    width: 700,
    scale: 1 
  },
  modeBarButtonsToRemove:['zoom2d','pan2d','select2d','lasso2d','zoomIn2d','zoomOut2d','autoScale2d','resetScale2d',
  'zoom3d', 'pan3d', 'orbitRotation', 'tableRotation', 'handleDrag3d', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d',
  'hoverClosestCartesian', 'hoverCompareCartesian',
  'zoomInGeo', 'zoomOutGeo', 'resetGeo', 'hoverClosestGeo',
  'hoverClosestGl2d', 'hoverClosestPie', 'toggleHover', 'resetViews','sendDataToCloud', 'toggleSpikelines', 'resetViewMapbox']
}


export default class App extends Component {
  constructor() {
    super();

    this.csvUpdater = new EventEmitter();
    
    this.state = {
      dataSources: {
        col3: [1, 2, 4],
        col4: [2, 5, 4]
      },
      data: [],
      layout: {},
      frames: [],
    };
  }

  componentDidMount() {
    this.csvUpdater.on('update', (dataSources) => {
      this.setState({dataSources});
    });
  }

  getChildContext() {
    return {
      localize: key => localizeString({}, 'en', key),
    };
  }
  
  onUpdate(data, layout, frames) {
    this.setState({data, layout, frames});
  }

  render(){
    return(
      <div className='app'>
        <PlotlyEditor 
          data={this.state.data}
          layout={this.state.layout}
          config={config}
          frames={this.state.frames}
          dataSources={this.state.dataSources}
          dataSourceOptions={Object.keys(this.state.dataSources).map(name => ({
            value: name,
            label: name,
          }))}
          plotly={Plotly}
          onUpdate={this.onUpdate.bind(this)}
          useResizeHandler
          debug
          advancedTraceTypeSelecto
        >
          <Editor csvUpdater = {this.csvUpdater} />
        </PlotlyEditor>
      </div>
    );
  }
}

App.childContextTypes = {
  localize: PropTypes.func,
};