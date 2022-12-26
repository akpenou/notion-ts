import { RichText } from "./block";
import { Annotations, Text, Parent } from "./commons";
import { File } from "./media";
import { Date, Page } from "./page";

export interface DataBaseQuery {
  object: "list";
  results: Page[];
  next_cursor: string;
  has_more: boolean;
  type: "page";
  page: object;
}

export interface Database {
  object: "database";
  id: string;
  created_time: string;
  last_edited_time: string;
  icon: Icon;
  cover: Cover;
  url: string;
  title: Title[];
  description: Description[];
  parent: Parent;
  archived: boolean;
  is_inline: boolean;
  properties: PropertiesDatabase;
}

export interface Icon {
  type: "emoji";
  emoji: string;
}

export interface Cover {
  type: "external";
  external: External;
}

export interface External {
  url: string;
}

export interface Title {
  type: "text";
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: string;
}

export interface Description {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: string;
}

export interface PropertiesDatabase {
  [name: string]:
    | PersonDatabaseProperty
    | CheckboxDatabaseProperty
    | NumberDatabaseProperty
    | RichTextDatabaseProperty
    | DateDatabaseProperty
    | RelationDatabaseProperty
    | RollupDatabaseProperty
    | MultiSelectDatabaseProperty
    | FileDatabaseProperty
    | SelectDatabaseProperty
    | TitleDatabaseProperty;
}

export interface PersonDatabaseProperty {
  id: string;
  name: string;
  type: "people";
  people: PersonDatabase[];
}

export interface PersonDatabase {
  object: "user";
  id: string;
}

export interface CheckboxDatabaseProperty {
  id: string;
  name: string;
  type: "checkbox";
  checkbox: CheckboxDatabase;
}

export interface CheckboxDatabase {
  tocomplete: string;
}

export interface NumberDatabaseProperty {
  id: string;
  name: string;
  type: "number";
  number: Number;
}

export interface Number {
  format: string;
}

export interface RichTextDatabaseProperty {
  id: string;
  name: string;
  type: "rich_text";
  rich_text: RichText;
}

export interface DateDatabaseProperty {
  id: string;
  name: string;
  type: "date";
  date: Date;
}

export interface RelationDatabaseProperty {
  id: string;
  name: string;
  type: "relation";
  relation: RelationDatabase;
}

export interface RelationDatabase {
  database_id: string;
  synced_property_name: string;
}

export interface RollupDatabaseProperty {
  id: string;
  name: string;
  type: "rollup";
  rollup: RollupDatabase;
}

export interface RollupDatabase {
  rollup_property_name: string;
  relation_property_name: string;
  rollup_property_id: string;
  relation_property_id: string;
  function: string;
}

export interface MultiSelectDatabaseProperty {
  id: string;
  name: string;
  type: "multi_select";
  multi_select: MultiSelect;
}

export interface MultiSelect {
  options: Option[];
}

export interface Option {
  id: string;
  name: string;
  color: string;
}

export interface FileDatabaseProperty {
  id: string;
  name: string;
  type: "files";
  files: File[];
}

export interface SelectDatabaseProperty {
  id: string;
  name: string;
  type: "select";
  select: Select;
}

export interface Select {
  options: Option[];
}

export interface TitleDatabaseProperty {
  id: string;
  name: string;
  type: "title";
  title: Title;
}
