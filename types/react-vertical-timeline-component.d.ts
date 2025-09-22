declare module "react-vertical-timeline-component" {
  import { FC, ReactNode } from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    lineColor?: string;
    children?: ReactNode; // 👈 add this
  }

  export const VerticalTimeline: FC<VerticalTimelineProps>;

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconStyle?: React.CSSProperties;
    iconOnClick?: () => void;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children?: ReactNode;
  }

  export const VerticalTimelineElement: FC<VerticalTimelineElementProps>;
}
