import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  DTicks,
  DTicksInterval,
  NTicks,
  ColorPicker,
  Dropdown,
  FontSelector,
  Numeric,
  Radio,
  TextEditor,
  PlotlySection,
  LayoutPanel,
  AxesFold,
  AxisSide,
  VisibilitySelect,
} from 'react-chart-editor';

class StyleAxesPanel extends Component {
  render() {
    const {localize: _} = this.context;
    return (
      <LayoutPanel>
        <AxesFold
          name={_('Titles')}
          axisFilter={(axis) => !(axis._name.includes('angular') || axis._subplot.includes('geo'))}
        >
          <TextEditor attr="title.text" />
          <FontSelector label={_('Typeface')} attr="title.font.family" />
          <Numeric label={_('Font Size')} attr="title.font.size" units="px" />
          <ColorPicker label={_('Font Color')} attr="title.font.color" />
        </AxesFold>

        <AxesFold name={_('Range')}>
          <PlotlySection name={_('Range')} attr="autorange">
            <Dropdown
              attr="type"
              label={_('Type')}
              clearable={false}
              options={[
                {label: _('Linear'), value: 'linear'},
                {label: _('Categorical'), value: 'category'},
              ]}
            />
            <Radio
              attr="autorange"
              label={_('Range')}
              options={[
                {label: _('Auto'), value: true},
              ]}
            />
          </PlotlySection>
          <Dropdown
            label={_('Direction')}
            attr="direction"
            options={[
              {label: _('Clockwise'), value: 'clockwise'},
              {label: _('Counter Clockwise'), value: 'counterclockwise'},
            ]}
            clearable={false}
          />
        </AxesFold>
        <AxesFold name={_('Lines')}>
          <PlotlySection name={_('Axis Line')} attr="showline">
            <VisibilitySelect
              attr="showline"
              options={[
                {label: _('Show'), value: true},
                {label: _('Hide'), value: false},
              ]}
              showOn={true}
              defaultOpt={true}
            >
              <Numeric label={_('Thickness')} attr="linewidth" units="px" />
              <ColorPicker label={_('Color')} attr="linecolor" />
              <AxisSide label={_('Position')} attr="side" />
            </VisibilitySelect>
          </PlotlySection>
          <PlotlySection name={_('Grid Lines')} attr="showgrid">
            <VisibilitySelect
              attr="showgrid"
              options={[
                {label: _('Show'), value: true},
                {label: _('Hide'), value: false},
              ]}
              showOn={true}
              defaultOpt={true}
            >
              <Numeric label={_('Thickness')} attr="gridwidth" units="px" />
              <ColorPicker label={_('Color')} attr="gridcolor" />

              <Radio
                label={_('Position On')}
                attr="tickson"
                options={[
                  {label: _('Labels'), value: 'labels'},
                  {label: _('Boundaries'), value: 'boundaries'},
                ]}
              />
              <Radio
                label={_('Grid Spacing')}
                attr="tickmode"
                options={[
                  {label: _('Auto'), value: 'auto'},
                  
                ]}
              />
            </VisibilitySelect>
          </PlotlySection>
          <PlotlySection name={_('Axis Background')} attr="showbackground">
            <Radio
              attr="showbackground"
              options={[
                {label: _('Show'), value: true},
                {label: _('Hide'), value: false},
              ]}
            />
            <ColorPicker label={_('Color')} attr="backgroundcolor" />
          </PlotlySection>
        </AxesFold>
        <AxesFold name={_('Tick Labels')} axisFilter={(axis) => !axis._subplot.includes('geo')}>
          <PlotlySection name={_('Tick Labels')} attr="showticklabels">
            <VisibilitySelect
              attr="showticklabels"
              options={[
                {label: _('Show'), value: true},
                {label: _('Hide'), value: false},
              ]}
              showOn={true}
              defaultOpt={true}
            >
              <AxisSide label={_('Position')} attr="side" />
              <Radio
                label={_('Auto margins')}
                attr="automargin"
                options={[
                  {label: _('True'), value: true},
                  {label: _('False'), value: false},
                ]}
              />
              <FontSelector label={_('Typeface')} attr="tickfont.family" />
              <Numeric label={_('Font Size')} attr="tickfont.size" units="px" />
              <ColorPicker label={_('Font Color')} attr="tickfont.color" />
              <Dropdown
                label={_('Angle')}
                attr="tickangle"
                clearable={false}
                options={[
                  {label: _('Auto'), value: 'auto'},
                  {label: _('45'), value: 45},
                  {label: _('90'), value: 90},
                  {label: _('135'), value: 135},
                  {label: _('180'), value: 180},
                ]}
              />
              <Dropdown
                label={_('Exponents')}
                attr="exponentformat"
                clearable={false}
                options={[
                  {label: _('None'), value: 'none'},
                  {label: _('e+6'), value: 'e'},
                  {label: _('E+6'), value: 'E'},
                  {label: _('x10^6'), value: 'power'},
                  {label: _('k/M/G'), value: 'SI'},
                  {label: _('k/M/B'), value: 'B'},
                ]}
              />
              <Dropdown
                label={_('Show Exponents')}
                attr="showexponent"
                clearable={false}
                options={[
                  {label: _('All'), value: 'all'},
                  {label: _('First'), value: 'first'},
                  {label: _('Last'), value: 'last'},
                  {label: _('None'), value: 'none'},
                ]}
              />    
              <Radio
                label={_('Tick Spacing')}
                attr="tickmode"
                options={[
                  {label: _('Auto'), value: 'auto'},
                  {label: _('Custom'), value: 'linear'},
                ]}
              />

              <DTicks label={_('Step Offset')} attr="tick0" />
              <DTicksInterval label={_('Step Size')} attr="dtick" />
              <NTicks label={_('Max Number of Labels')} attr="nticks" />
            </VisibilitySelect>
          </PlotlySection>
        </AxesFold>
        <AxesFold name={_('Tick Markers')} axisFilter={(axis) => !axis._subplot.includes('geo')}>
          <PlotlySection name={_('Tick Markers')} attr="ticks">
            <VisibilitySelect
              attr="ticks"
              options={[
                {label: _('Outside'), value: 'outside'},
                {label: _('Hide'), value: ''},
              ]}
              showOn={['outside']}
              defaultOpt={'Outside'}
            >
              <Numeric label={_('Length')} attr="ticklen" units="px" />
              <Numeric label={_('Width')} attr="tickwidth" units="px" />
              <ColorPicker label={_('Color')} attr="tickcolor" />
              <Radio
                label={_('Tick Spacing')}
                attr="tickmode"
                options={[
                  {label: _('Auto'), value: 'auto'},
                  {label: _('Custom'), value: 'linear'},
                ]}
              />

              <DTicks label={_('Step Offset')} attr="tick0" />
              <DTicksInterval label={_('Step Size')} attr="dtick" />
              <NTicks label={_('Max Number of Markers')} attr="nticks" />
            </VisibilitySelect>
          </PlotlySection>
        </AxesFold>
      </LayoutPanel>
    );
  }
}

StyleAxesPanel.contextTypes = {
  fullLayout: PropTypes.object,
  localize: PropTypes.func,
};

export default StyleAxesPanel;