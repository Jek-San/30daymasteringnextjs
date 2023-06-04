export interface Category {
  Id: string
  NameCategory: string
  Description: string
  IsDelete: string
  CreateBy: string
  CreatedDate?: any
  UpdateBy: string
  UpdateDate?: any
}

export interface Variant {
  Id: string
  IdCategory: string
  NameVariant: string
  Description: string
  IsDelete: string
  CreateBy: string
  CreatedDate?: any
  UpdateBy: string
  UpdateDate?: any
}
