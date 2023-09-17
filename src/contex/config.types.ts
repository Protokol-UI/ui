export interface KonfigMenu {
  label: string;
  path: string;
  icon: string;
}

export interface KonfigHeader {
  menu: KonfigMenu[];
}

export interface Konfig {
  header: KonfigHeader;
}
