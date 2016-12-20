define("ember-login/templates/account", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "ember-login/templates/account.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Merhaba ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Kayıt Ekle");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Kayıt Listele");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var element1 = dom.childAt(fragment, [5]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        return morphs;
      },
      statements: [["content", "currentUser.username", ["loc", [null, [1, 8], [1, 32]]], 0, 0, 0, 0], ["element", "action", ["kayitekle"], [], ["loc", [null, [2, 8], [2, 30]]], 0, 0], ["element", "action", ["kayitlistele"], [], ["loc", [null, [3, 8], [3, 33]]], 0, 0], ["inline", "sinav-cizelge-tablosu", [], ["exams", ["subexpr", "@mut", [["get", "model", ["loc", [null, [4, 30], [4, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "halls", ["subexpr", "@mut", [["get", "salonlar", ["loc", [null, [4, 42], [4, 50]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 52]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});