define('ember-login/models/exam', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        bolum: _emberData['default'].attr('string'),
        tarih: _emberData['default'].attr('number'),
        salon: _emberData['default'].attr('string'),
        gorunurluk: Ember.computed(function () {
            return true;
        })
    });
});