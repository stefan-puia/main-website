import { el, wrap } from "./element-builder.mjs";

export const ConfigAcknowledgementsPreview = createClass({
  render: function () {
    return wrap(
      this.props.widgetFor("body")
    );
  },
});
