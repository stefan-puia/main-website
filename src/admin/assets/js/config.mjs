import { ConfigAcknowledgementsPreview } from "./preview/acknowledgements.mjs";
import { BlogPreview } from "./preview/blog.mjs";
import { ConfigErrorsPreview } from "./preview/config-errors.mjs";
import { ConfigHeaderPreview } from "./preview/config-header.mjs";
import { ConfigHomePreview } from "./preview/config-home.mjs";

CMS.registerPreviewStyle("/assets/css/main.min.css");
CMS.registerPreviewStyle("/admin/assets/css/preview.css");

CMS.registerPreviewTemplate("config-errors", ConfigErrorsPreview);
CMS.registerPreviewTemplate("config-home", ConfigHomePreview);
CMS.registerPreviewTemplate("config-header", ConfigHeaderPreview);
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("acknowledgements", ConfigAcknowledgementsPreview);
