import * as React from "react";
import { CSSProperties } from "react";          

export interface IAccordionProps {
    title: string;
    icon?: React.FC<IIconProps>;
    expandedIcon?: React.FC<IIconProps>;
    styles?: IAccordionStyleFunctionOrObject<IAccordionStyleProps, IAccordionStyles>;
    defaultIsExpanded?: boolean,
    onToggle?: (isExpanded: boolean) => void,
    className?: string,
    children?: any
}

export interface IIconProps {
    style?: CSSProperties;
    className?: string;
}

export interface IAccordionStyleProps {
    isExpanded: boolean;
}

export interface IAccordionStyles {
    root?: CSSProperties;
    header?: CSSProperties;
    content?: CSSProperties;
    icon?: CSSProperties;
    expandedIcon?: CSSProperties;
    headerButton?: CSSProperties;
    title?: CSSProperties;
}

export type IAccordionStyleFunctionOrObject<IAccordionStyleProps, IAccordionStyles> = IAccordionStyles | ((props: IAccordionStyleProps) => IAccordionStyles )
