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
    exampleFeatured(),
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

function exampleFeatured() {
  return elc("div", "row", article(), article());

  function article() {
    return elc(
      "article",
      "col-6 col-12-xsmall work-item",
      h(
        "a",
        { href: "#", className: "image fit thumb" },
        h("img", { src: "https://picsum.photos/300/150" })
      ),
      el("h3", "Lorem ipsum"),
      el(
        "p",
        "Cillum proident magna incididunt cupidatat mollit mollit ipsum labore ad sunt aliquip elit nisi ea."
      )
    );
  }
}
