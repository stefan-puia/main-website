import { el, elc, eli, html, wrap } from "./element-builder.mjs";

export const ConfigHeaderPreview = createClass({
  render: function () {
    return wrap(header(this.props), content());
  },
});

function header(props) {
  const entry = props.entry;
  const overlay = props.getAsset(entry.getIn(["data", "overlay"])).toString();
  const background = props.getAsset(entry.getIn(["data", "background"])).toString();
  const avatar = props.getAsset(entry.getIn(["data", "avatar"])).toString();

  return h(
    "header",
    {
      id: "header",
      style: {
        backgroundImage: `url("${overlay}"), url("${background}")`,
      },
    },
    elc(
      "div",
      "inner",
      h(
        "a",
        { href: "#", className: "image avatar" },
        h("img", { src: avatar, alt: entry.getIn(["data", "avatarAlt"]) })
      ),
      h("h1", html(entry.getIn(["data", "description"]))),
      footer()
    )
  );
}

function footer() {
  return h(
    "footer",
    {
      id: "footer",
    },
    footerInner()
  );
}

function footerInner() {
  return elc(
    "div",
    "inner",
    elc(
      "ul",
      "icons",
      el("li", elc("a", "icon brands fa-github", elc("span", "label", "Github"))),
      el("li", elc("a", "icon solid fa-envelope", elc("span", "label", "Email"))),
      el("li", elc("a", "icon solid fa-mug-hot", elc("span", "label", "Ko-fi")))
    ),
    elc(
      "ul",
      "copyright",
      h("li", html("&copy; Stefan Puia")),
      el("li", "Acknowledgements")
    )
  );
}

function content() {
  return eli("div", "main", el("p", "Veniam fugiat do labore non officia."))
}