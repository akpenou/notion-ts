import { RichText } from "./block";
import { CreatedBy, LastEditedBy, Parent } from "./commons";
import { Cover, Icon, Option } from "./database";

export interface Page {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  cover: Cover;
  icon: Icon;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface Properties {
  [name: string]:
    | MultiSelectProperty
    | SelectProperty
    | NumberProperty
    | PersonProperty
    | DateProperty
    | FormulaProperty
    | RelationProperty
    | DescriptionProperty
    | CheckboxProperty
    | RollupProperty
    | UrlProperty
    | TitleProperty;
}

export interface MultiSelectProperty {
  id: string;
  type: "multi_select";
  multi_select: Option[];
}

export interface SelectProperty {
  id: string;
  type: "select";
  select: Option;
}

export interface NumberProperty {
  id: string;
  type: "number";
  number: number;
}

export interface PersonProperty {
  id: string;
  type: "people";
  people: Person[];
}

export interface Person {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: "person";
  person: {
    email: string;
  };
}

export interface DateProperty {
  id: string;
  type: "date";
  date: Date;
}

export interface Date {
  start: string;
  end?: string;
  time_zone?: string;
}

export interface FormulaProperty {
  id: string;
  type: "formula";
  formula: Formula;
}

export interface Formula {
  expression: string;
}

export interface RelationProperty {
  id: string;
  type: "relation";
  relation: Relation[];
  has_more: boolean;
}

export interface Relation {
  id: string;
}

export interface DescriptionProperty {
  id: string;
  type: "rich_text";
  rich_text: RichText[];
}

export interface CheckboxProperty {
  id: string;
  type: "checkbox";
  checkbox: boolean;
}

export interface RollupProperty {
  id: string;
  type: "rollup";
  rollup: Rollup;
}

export interface Rollup {
  type: "number";
  number: number;
  function: string;
}

export interface UrlProperty {
  id: string;
  type: "url";
  url: string;
}

export interface TitleProperty {
  id: string;
  type: "title";
  title: RichText[];
}
