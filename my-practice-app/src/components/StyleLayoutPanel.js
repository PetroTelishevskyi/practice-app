import React from 'react';
import PropTypes from 'prop-types';
import {
  ColorPicker,
  Dropdown,
  FontSelector,
  PlotlyFold,
  Numeric,
  TextEditor,
  PlotlySection,
  LayoutPanel,
} from 'react-chart-editor';


const StyleLayoutPanel = (props, {localize: _}) => (
  <LayoutPanel>
    <PlotlyFold name={_('Defaults')}>
      <ColorPicker label={_('Plot Background')} attr="plot_bgcolor" />
      <ColorPicker label={_('Margin Color')} attr="paper_bgcolor" />
      <PlotlySection name={_('Text')} attr="font.family">
        <FontSelector label={_('Typeface')} attr="font.family" clearable={false} />
        <Numeric label={_('Base Font Size')} attr="font.size" units="px" />
        <ColorPicker label={_('Font Color')} attr="font.color" />
        <Dropdown
          label={_('Number format')}
          attr="separators"
          options={[
            {label: _('1,234.56'), value: '.,'},
            {label: _('1 234.56'), value: ', '},
            {label: _('1 234,56'), value: ', '},
            {label: _('1.234,56'), value: ',.'},
          ]}
          clearable={false}
        />
      </PlotlySection>
    </PlotlyFold>
    <PlotlyFold name={_('Title')}>
      <TextEditor attr="title.text" />
      <FontSelector label={_('Typeface')} attr="title.font.family" clearable={false} />
      <Numeric label={_('Font Size')} attr="title.font.size" units="px" />
      <ColorPicker label={_('Font Color')} attr="title.font.color" />
      <Numeric label={_('Horizontal Position')} showSlider step={0.02} attr="title.x" />
    </PlotlyFold>
  </LayoutPanel>
);

StyleLayoutPanel.contextTypes = {
  localize: PropTypes.func,
};

export default StyleLayoutPanel;