define([
    'core/js/adapt',
    'core/js/views/componentView',
    'core/js/models/componentModel',
    './arrow-js-0.1.9.min'
], function (Adapt, ComponentView, ComponentModel) {

    var DownloadButtonView = ComponentView.extend({

        events: {
            "click .download-button": "downloadFile"
        },
        preRender: function () {
            this.checkIfResetOnRevisit();
        },

        postRender: function () {
            this.setReadyStatus();
        },

        checkIfResetOnRevisit: function () {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },
        downloadFile: function (event) {
            Arrow.show();

            if (this.model.get('_setCompletionOn') === 'inview') {
                this.setupInviewCompletion('.component-widget');
            }


            if (!this.model.get('_isComplete')) {
                this.model.set('_isComplete', true);
                this.model.set('_isInteractionComplete', true);
            }

        }

    });
    var DownloadButtonModel = ComponentModel.extend({
        // Model functions goes here

    });
    return Adapt.register('downloadButton', {
        model: DownloadButtonModel,
        view: DownloadButtonView
    });
});
