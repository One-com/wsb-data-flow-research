/* @flow */

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import type { PropertiesPanelState } from '../types';
import { PROPERTIES_PANEL_CONTAINER_ID } from './styles';
import type { ReactElementRef } from '../../common/commonTypes';
import { showPropertiesPanelAction } from '../actions';
import type { AppDispatch, AppState } from '../../main/types';
import { propertiesPanelAppSel } from '../selectors';
import { connectComponent } from '../../common/connectComponent';

const container = document.getElementById(PROPERTIES_PANEL_CONTAINER_ID);

type Props = {
  state: PropertiesPanelState,
  children: React.Node,
  dispatch: AppDispatch,
};

export class PropertiesPanelCom extends React.Component<Props> {
  ref: ReactElementRef<'div'>;

  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount(): void {
    if (this.ref.current) {
      const
        {state: {componentId}, dispatch} = this.props,
        {width, height} = this.ref.current.getBoundingClientRect(),
        dimensions = {
          width,
          height,
        };
      
      dispatch(showPropertiesPanelAction(componentId, dimensions));
    }
  }

  render() {
    const {children} = this.props;
    return ReactDOM.createPortal(
      <div ref={this.ref}>{children}</div>,
      // $FlowFixMe
      container,
    );
  }
}

const mapStateToProps = (appState: AppState) => ({
  state: propertiesPanelAppSel(appState),
});

export const PropertiesPanel = connectComponent(PropertiesPanelCom, {
  mapStateToProps,
});
