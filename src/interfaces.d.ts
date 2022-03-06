import { Color } from "@ionic/core";

export interface Control {
  /**
   * The label to show next to the button
   */
  label: string;
  /**
   * The icon to use in the button
   */
  icon: string;
  /**
   * The color from the theme to make the button
   */
  color?: Color;
  /**
   * The link to use for the button
   */
  href?: string;
  /**
   * The functionality to run when the button is clicked
   */
  onClick?: (event: any) => any;
}
