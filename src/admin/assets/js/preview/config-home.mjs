import { featuredBlog } from "./blog.mjs";
import { el, elc, eli, html, wrap } from "./element-builder.mjs";

export const ConfigHomePreview = createClass({
  render: function () {
    return wrap(hero(this.props.entry), featured(this.props));
  },
});

function hero(entry) {
  return eli(
    "section",
    "one",
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
  return eli(
    "section",
    "two",
    el("h2", widgets.getIn(["data", "header"])),
    elc("div", "row", exampleArticle(), exampleArticle()),
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

function exampleArticle() {
  return featuredBlog({
    title: "Lorem ipsum",
    description: "Commodo ut minim commodo culpa exercitation laborum qui.",
    imageThumb: "https://picsum.photos/300/150",
  });
}
