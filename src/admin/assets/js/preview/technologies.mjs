import { asset, el, elc, wrap } from "./element-builder.mjs";

export const ConfigTechnologiesPreview = createClass({
  render: function() {
    // const technologies = this.props.widgetsFor("technology");
    const src = asset(this.props, this.props.entry.getIn(["data", "image"]));
    let description = this.props.entry.getIn(["data", "description"]);
    return wrap(
      elc("ul", "icons flex",
        el("li", h("img", { src, title: description })),
        el("li", description))
    );
  }
});