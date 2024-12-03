import { observer } from "mobx-react";
import * as React from "react";
import ToolbarMenu from "~/editor/components/ToolbarMenu";
import { DoneIcon, InfoIcon, StarredIcon, WarningIcon } from "outline-icons";

type Props = {
  type: "tip" | "warning" | "info" | "success";
}

const iconMap: { [key: string]: React.ReactElement } = {
  tip: <StarredIcon />,
  warning: <WarningIcon />,
  success: <DoneIcon />,
  info: <InfoIcon />,
};

function NoticeMenu({ type }: Props) {
  const icon = iconMap[type] || <InfoIcon />;

  return (
    <ToolbarMenu
      items={[
        {
          name: type,
          icon: icon,
          children: [
            {
              name: "info",
              label: "Info notice",
              icon: <InfoIcon />,
            },
            {
              name: "success",
              label: "Success notice",
              icon: <DoneIcon />,
            },
            {
              name: "warning",
              label: "Warning notice",
              icon: <WarningIcon />,
            },
            {
              name: "tip",
              label: "Tip notice",
              icon: <StarredIcon />,
            },
          ]
        },
      ]}
    />
  );
}

export default observer(NoticeMenu);
