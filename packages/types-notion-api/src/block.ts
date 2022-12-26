import { BlockBookmark } from "./bookmark";
import { BlockCallout } from "./callout";
import { BlockCode } from "./code";
import {
  BlockEmbed,
  BlockImage,
  BlockVideo,
  BlockFile,
  BlockPDF,
} from "./media";

import {
  Database,
  DateDatabaseProperty,
  PersonDatabaseProperty,
} from "./database";
import { BlockDivider } from "./divider";
import { BlockEquation, Equation } from "./equation";
import { BlockHeading } from "./headers";
import {
  BlockBulletedListItem,
  BlockNumberedListItem,
  BlockToDoListItem,
} from "./list";
import { BlockQuote } from "./quote";
import { Annotations, Text, Parent, CreatedBy, LastEditedBy } from "./commons";

export interface Block {
  object: string;
  id: string;
  parent: Parent;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  has_children: boolean;
  archived: boolean;
  type: string;
}

export interface RichText {
  type: string;
  plain_text: string;
  annotations: Annotations;
  href: any;

  text?: Text;
  equation?: Equation;
  mention?: Mention;
}

export interface Mention {
  type: string; // "user", "page", "database", "date", "link_preview".
  user?: PersonDatabaseProperty;
  page?: { id: string };
  database?: Database;
  date?: DateDatabaseProperty;
  link_preview?: any;
}

export type BlockList = (
  | BlockBookmark
  | BlockCallout
  | BlockCode
  | BlockDivider
  | BlockEquation
  | BlockHeading
  | BlockBulletedListItem
  | BlockNumberedListItem
  | BlockToDoListItem
  | BlockEmbed
  | BlockImage
  | BlockVideo
  | BlockFile
  | BlockPDF
  | BlockQuote
)[];
