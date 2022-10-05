import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface FlippingTextCardContent {
    frontFace: FrontFaceContent;
    backFace: BackFaceContent;
}

interface FrontFaceContent {
    text?: string;
    icon?: IconProp;
    iconSize?: string;
    iconColor?: string;
}

interface BackFaceContent {
    bg?: string;
    // icon?: IconProp;

    text?: string;
    textSize?: string;
    textColor?: string;
    
    title?: string;
    titleSize?: string;
    titleColor?: string;
}
