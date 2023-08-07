import style from './addProductForm.module.scss';

export const addProductFormFields = [
  {
    tagType: 'select',
    label: "Enabled",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "enabled",
    name: "enabled",
    type: "select",
    options: ["true", "false"],
  },
  // {
  //   tagType: 'regular',
  //   label: "Image URLs",
  //   labelClass: style.form__label,
  //   inputClass: style.form__input,
  //   errorClass: style.form__error,
  //   id: "imageUrls",
  //   name: "imageUrls",
  //   type: "text",
  //   placeholder: "Enter image URLs",
    
  // },
  {
    tagType: 'button',
    label: "Add image",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "file",
    name: "file",
    type: "file",
    placeholder: "Enter image URLs",
    multiple: true,
  },
  {
    tagType: 'regular',
    label: "Quantity",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "quantity",
    name: "quantity",
    type: "number",
    placeholder: "Enter quantity",
  },
//   {
//     tagType: 'regular',
//     label: "ID",
//     labelClass: style.form__label,
//     inputClass: style.form__input,
//     errorClass: style.form__error,
//     id: "_id",
//     name: "_id",
//     type: "text",
//     placeholder: "Enter ID",
//   },
  {
    tagType: 'regular',
    label: "Name",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Enter name",
  },
  {
    tagType: 'select',
    label: "Author",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "author",
    name: "author",
    type: "text",
    placeholder: "Enter author",
    options: ["@Art_ofbitcoin","@ArtWarsNFT", "@cybrpnk","@DaSucker","@ElifOnur","@elnafrederick","@Hakaji","@Hanzo","@illestrater", "@Ilya_Shapko","@Jabarvizu","@Jayeola_Muniz","@jessygrosch","@KingLe713","@kishuinu","@Kuchoka","@Monero","@OscarLlorens","@randomdash","@Subh77","@SUPERGUCCI","@VictorDuarte"],

  },
  {
    tagType: 'select',
    label: "Collections",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "categories",
    name: "categories",
    type: "select",
    options: ["animals","art side", "celebrities","cute planet","dog","fantasy landscape","kooler","metaverse", "mint", "rainbow lion", "other"],
  },
  {
    tagtype: 'checkbox',
    label: "Theme:",
    labelclass: style.checkbox__label,
    inputclass: style.checkbox__input,
    errorclass: style.form__error,
    divclass: style.form__checkboxes,
    checkboxclass : `${style.form__checkbox} ${style.checkbox}`,
    // id: "theme",
    name: "theme",
    type: "checkbox",
    options: ["art","film", "portrait", "people", "animal", "anime"],
    multiple: true,
  },
  {
    tagType: 'regular',
    label: "Current Price",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "currentPrice",
    name: "currentPrice",
    type: "number",
    placeholder: "Enter current price",
  },
  {
    tagType: 'regular',
    label: "Details",
    labelClass: style.form__label,
    inputClass: style.form__input,
    errorClass: style.form__error,
    id: "details",
    name: "details",
    type: "textarea",
    placeholder: "Enter details",
  },
];
