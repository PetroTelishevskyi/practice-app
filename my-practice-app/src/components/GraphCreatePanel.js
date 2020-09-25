import React from 'react';
import PropTypes from 'prop-types';
import {
  DataSelector,
  TraceAccordion,
  TraceSelector,
 
  LocationSelector,
  Dropzone,

} from 'react-chart-editor';


const GraphCreatePanel = (props, {localize: _, setPanel}) => {
  return (
    <TraceAccordion
      canAdd
      traceFilterCondition={(t) =>
        !(t.transforms && t.transforms.some((tr) => ['fit', 'moving-average'].includes(tr.type)))
      }
      canReorder
    >
      <TraceSelector label={_('Type')} attr="type" show />

      <Dropzone attr="geojson" fileType="geojson" />
      <LocationSelector attr="type" />
      <DataSelector label={_('Values')} attr="values" />
      <DataSelector label={_('Labels')} attr="labels" />
      <DataSelector label={_('Parents')} attr="parents" />



      <DataSelector
        label={{
          '*': _('X'),
        }}
        attr="x"
      />
      <DataSelector
        label={{
          '*': _('Y'),
        }}
        attr="y"
      />
    </TraceAccordion>
  );
};

export default GraphCreatePanel;
GraphCreatePanel.contextTypes = {
  localize: PropTypes.func,
  setPanel: PropTypes.func,
};