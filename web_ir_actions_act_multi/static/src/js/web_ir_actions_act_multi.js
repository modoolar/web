// Copyright 2017 - 2018 Modoolar <info@modoolar.com>
// License LGPLv3.0 or later (https://www.gnu.org/licenses/lgpl-3.0.en.html).

odoo.define('web_ir_actions_act_multi.ir_actions_act_multi', function (require) {
    "use strict";

    const ActionManager = require('web.ActionManager');

    ActionManager.include({

        execute_ir_actions_act_multi: function (actions, options, index) {
            let localIndex = index;

            if (localIndex >= actions.length) {
                return actions[actions.length - 1];
            }

            return this.do_action(actions[localIndex], options)
                .then(() => this.execute_ir_actions_act_multi(actions, options, ++localIndex));
        },

        ir_actions_act_multi: function (action, options) {
            return this.execute_ir_actions_act_multi(action.actions, options, 0);
        },

    });

});
