import { Block, RichText } from "./block";

export interface Callout {
  rich_text: RichText[];
  color: string;
  icon: {
    emoji: string;
  };
}

export type BlockCallout = Block & {
  type: "callout";
  callout: Callout;
};
