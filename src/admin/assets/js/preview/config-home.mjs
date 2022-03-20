import { featuredBlog } from "./blog.mjs";
import { el, elc, eli, html, wrap } from "./element-builder.mjs";

export const ConfigHomePreview = createClass({
  render: function () {
    return wrap(hero(this.props.entry), featured(this.props));
  },
});

function hero(entry) {
  return el(
    "section",
    elc("header", "major", h("h2", html(entry.getIn(["data", "heroHeader"])))),
    h("p", html(entry.getIn(["data", "heroDescription"]))),
    elc(
      "ul",
      "actions",
      el(
        "li",
        h("a", { href: "#", className: "button" }, entry.getIn(["data", "button"]))
      )
    )
  );
}
function featured(props) {
  const widgets = props.widgetsFor("featured");
  return el(
    "section",
    el("h2", widgets.getIn(["data", "header"])),
    elc("div", "row", exampleArticle(props), exampleArticle(props)),
    elc(
      "ul",
      "actions",
      el(
        "li",
        h("a", { href: "#", className: "button" }, widgets.getIn(["data", "button"]))
      )
    )
  );
}

function exampleArticle(props) {
  return featuredBlog(props, {
    title: "Lorem ipsum",
    description: "Commodo ut minim commodo culpa exercitation laborum qui.",
    imageThumb: "https://picsum.photos/300/150",
  });
}
