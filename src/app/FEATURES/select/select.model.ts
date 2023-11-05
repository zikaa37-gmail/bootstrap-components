export interface SelectItem {
  name: string;
  value: any;
}

export interface MultiSelectItem extends SelectItem {
  isSelected: boolean;
}
