import { Block, RichText } from "./block";

export interface Paragraph {
  rich_text: RichText[];
  color: string;
  children: Block[];
}

export interface Heading1 {
  rich_text: RichText[];
  color: string;
  is_toggleable: boolean;
}

export interface Heading2 {
  rich_text: RichText[];
  color: string;
  is_toggleable: boolean;
}

export interface Heading3 {
  rich_text: RichText[];
  color: string;
  is_toggleable: boolean;
}

export type BlockParagraph = Block & {
  type: "paragraph";
  paragraph: Paragraph;
};

export type BlockHeading = Block &
  (
    | {
        type: "heading_1";
        heading_1: Heading1;
      }
    | {
        type: "heading_2";
        heading_2: Heading2;
      }
    | {
        type: "heading_3";
        heading_3: Heading3;
      }
  );
