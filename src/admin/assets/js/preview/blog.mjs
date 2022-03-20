import { asset, el, elc, wrap } from "./element-builder.mjs";

export const BlogPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    return wrap(
      el("section", header(this.props), image(this.props), this.props.widgetFor("body")),
      h("hr"),
      featuredVersion(this.props)
    );
  },
});

function header(props) {
  console.log(props.assetentry);
  return el(
    "header",
    el("h2", props.entry.getIn(["data", "title"])),
    el("p", el("small", `Stefan, 01/01/2022`))
  );
}

function image(props) {
  const imageFull = props.getAsset(props.entry.getIn(["data", "imageFull"])).toString();
  return elc(
    "div",
    "box alt",
    elc(
      "div",
      "row gtr-50 gtr-uniform",
      elc(
        "div",
        "col-12 align-right",
        elc(
          "span",
          "image fit",
          h("img", {
            src: imageFull,
            alt: props.entry.getIn(["data", "imageAlt"]),
          })
        ),
        el("small", props.entry.getIn(["data", "imageCredit"]))
      )
    )
  );
}

function featuredVersion(props) {
  const featuredOpts = props.widgetsFor("featured");

  return elc(
    "div",
    "row",
    featuredBlog(props, {
      imageFull: props.entry.getIn(["data", "imageFull"]),
      imageThumb: featuredOpts.getIn(["data", "imageThumb"]),
      title: props.entry.getIn(["data", "title"]),
      description: featuredOpts.getIn(["data", "description"]),
    })
  );
}

export function featuredBlog(props, { imageFull, imageThumb, title, description }) {
  return elc(
    "article",
    "col-6 col-12-xsmall work-item",
    h(
      "a",
      { href: "#", className: "image fit thumb" },
      h("img", { src: asset(props, imageThumb || imageFull) })
    ),
    el("h3", title),
    el("p", description)
  );
}
