import { H5PField } from "../types/H5P/H5PField";
import { H5PFieldType } from "../types/H5P/H5PFieldType";
import { layoutOptions } from "./layout.utils";

export const timelineItemFields: Array<H5PField> = [
  {
    label: "Title",
    name: "label",
    type: H5PFieldType.Text,
  },
  {
    label: "Text content",
    name: "textContent",
    type: H5PFieldType.Text,
    widget: "html",
  },
  {
    label: "Layout",
    name: "layout",
    type: H5PFieldType.Select,
    default: layoutOptions.textOnRight.value,
    options: Object.values(layoutOptions),
  },
  {
    label: "Event content",
    name: "eventContent",
    type: H5PFieldType.Group,
    importance: "low",
    widget: "NDLATimelineEventLayout",
    fields: [
      {
        label: "Items",
        name: "items",
        type: H5PFieldType.Group,
        fields: [
          {
            label: "Id",
            name: "id",
            type: H5PFieldType.Text,
            widget: "none",
          },
          {
            label: "X position",
            name: "x",
            type: H5PFieldType.Text,
            widget: "none",
          },
          {
            label: "Y position",
            name: "y",
            type: H5PFieldType.Text,
            widget: "none",
          },
          {
            label: "Width",
            name: "width",
            type: H5PFieldType.Text,
            widget: "none",
          },
          {
            label: "Height",
            name: "height",
            type: H5PFieldType.Text,
            widget: "none",
          },
          {
            label: "Type",
            name: "type",
            type: H5PFieldType.Text,
            widget: "none",
          },
        ],
      },
    ],
  },
  {
    label: "Media type",
    name: "mediaType",
    type: H5PFieldType.Select,
    options: [
      {
        label: "Image",
        value: "image",
      },
      {
        label: "Video",
        value: "video",
      },
    ],
    default: "image",
  },
  {
    label: "Image",
    name: "image",
    type: H5PFieldType.Image,
    widget: "NDLAShowWhen",
    showWhen: {
      rules: [
        {
          field: "mediaType",
          equals: "image",
        },
      ],
    },
  },
  {
    label: "Video",
    name: "video",
    type: H5PFieldType.Video,
    widget: "NDLAShowWhen",
    showWhen: {
      rules: [
        {
          field: "mediaType",
          equals: "video",
        },
      ],
    },
  },
];