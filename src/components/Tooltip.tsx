import React from "react";
import { Popup } from "semantic-ui-react";
import styled from "styled-components";
import { SemanticShorthandItem } from "semantic-ui-react/dist/commonjs/generic";
import { PopupContentProps } from "semantic-ui-react/dist/commonjs/modules/Popup/PopupContent";

interface TooltipProps {
  content: SemanticShorthandItem<PopupContentProps>;
  trigger: React.ReactNode;
}
export const TooltipTrigger = styled.span`
  cursor: pointer;
  border-bottom: 1px dashed gray;
`;
function Tooltip({ content, trigger }: TooltipProps) {
  return (
    <Popup
      size="small"
      positionFixed
      inverted
      content={content}
      trigger={trigger}
    />
  );
}

export default Tooltip;
