/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HomeBinderIndex', function(Y, NAME) {

/**
 * The HomeBinderIndex module.
 *
 * @module HomeBinderIndex
 */

    /**
     * Constructor for the HomeBinderIndex class.
     *
     * @class HomeBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;

            Y.one('body').addClass('yui3-skin-sam');
            var data = [
                { id: "ga-3475", name: "gadget", price: "$6.99", cost: "$5.99" },
                { id: "sp-9980", name: "sprocket", price: "$3.75", cost: "$3.25" },
                { id: "wi-0650", name: "widget", price: "$4.25", cost: "$3.75" }
            ];
            var table = new Y.DataTable({
                columns: ["id", "name", "price"],
                data: data
            });
            table.render("#example2");

            /**
             * Example code for the bind method:
             *
             * node.all('dt').on('mouseenter', function(evt) {
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).addClass('sel');
             *
             * });
             * node.all('dt').on('mouseleave', function(evt) {
             *   
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).removeClass('sel');
             *
             * });
             */
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client', 'node-base', 'datatable']});
