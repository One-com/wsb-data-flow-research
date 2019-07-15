/* @flow */

import type {Position} from '../../../common/commonTypes';
import type { Components } from '../../components/types';
import type { WorkspaceWidthState } from '../../width/types';
import type { WorkspaceMarginState } from '../../margin/main/types';
import { calculateWorkspaceMarginValue } from '../../margin/width/functions/calculateWorkspaceMarginValue';
import { updateComponentById } from '../../components/functions/updateComponentById';

type Params = {|
  componentId: string,
  position: Position,
  components: Components,
  workspace: {
    width: WorkspaceWidthState,
    margin: WorkspaceMarginState,
  },
|};

type Result = {|
  components: Components,
  marginWidth: number,
|};

const moveComponent = ({ componentId: comId, position: inPosition, components, workspace }) => {
  const margin = calculateWorkspaceMarginValue(workspace.margin.width, workspace.width);

  return updateComponentById({
    id: comId,
    partial: com => {
      const
        maxLeft = margin + workspace.margin.width - com.dimensions.width,
        left = workspace.margin.isLocked
          ? Math.min(
            Math.max(inPosition.left, margin),
            maxLeft,
          )
          : Math.max(
            Math.min(
              inPosition.left,
              workspace.width - com.dimensions.width,
            ),
            0,
          ),
        position = {
          top: inPosition.top,
          left,
        };

      return {
        ...com,
        position,
      };
    },
    components
  });
};

export const moveComponentInWorkspace = (params: Params): Result => {
  const { componentId, position, components, workspace } = params;

  const nextComponents = moveComponent({
    componentId,
    position,
    components,
    workspace,
  });

  let nextMarginWidth = workspace.margin.width;

  if (!workspace.margin.isLocked) {
    const
      wsWidth = workspace.width,
      components = nextComponents,
      movingComponent = components.find(com => com.id === componentId),
      minComponentsMargin = components.reduce(
        (acc, com) => {
          const
            {position: {left: comLeft}, dimensions: {width}} = com,
            comRight = comLeft + width;

          return Math.min(comLeft, wsWidth - comRight);
        },
        wsWidth,
      ),
      minMargin = Math.min(
        minComponentsMargin,
        // $FlowFixMe
        movingComponent.position.left,
        // $FlowFixMe
        wsWidth - movingComponent.position.left - movingComponent.dimensions.width,
      );

    const nextMarginWidthVal = Math.min(
      wsWidth - 2 * minMargin,
      wsWidth,
    );

    if (nextMarginWidthVal > workspace.margin.width) {
      nextMarginWidth = nextMarginWidthVal;
    }
  }

  return {
    components: nextComponents,
    marginWidth: nextMarginWidth,
  };
};
